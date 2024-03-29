<script lang="ts">
  import { window as tauriWindow } from "@tauri-apps/api";
  import { onMount } from "svelte";
  import IconButton from "../components/IconButton.svelte";
  import VerticalSeparator from "../components/VerticalSeparator.svelte";
  
  let isMaximized: boolean = false;
  let isInTauriApp = "__TAURI__" in window;

  async function toggleMaximize() {
    if(isMaximized) {
      tauriWindow.appWindow.unmaximize();
    } else {
      tauriWindow.appWindow.maximize();
    }
    isMaximized = !isMaximized;
  }
  
  function minimize() {
    tauriWindow.appWindow.minimize();
  }

  onMount(async () => {
    if(isInTauriApp) {
      isMaximized = await tauriWindow.appWindow.isMaximized();
    }
  });

  async function close() {
    let canClose = await confirm("Deseja mesmo encerrar o programa?");
    if (canClose === true) {
      tauriWindow.appWindow.close();
    } else {
      console.log(canClose);
    }
  }
</script>

<div class="titlebar" data-tauri-drag-region>
  <div class="titlebar-content">
    <slot />
  </div>
  <div class="window-controls" on:dblclick={toggleMaximize}>
    <slot name="window-controls" />
    {#if $$slots['window-controls'] && isInTauriApp}
      <VerticalSeparator --vertical-separator-height="1.8rem" />
    {/if}
    {#if isInTauriApp}
    <IconButton
      on:click={minimize}
      src="minus"
      label="Minimize Window"
      --icon-button-hover-color="var(--color-success-700)"
      --icon-button-active-bg="var(--color-success-500)"
      --icon-button-hover-bg="var(--color-success-200)"
    />
    <IconButton
      on:click={toggleMaximize}
      src={isMaximized ? "arrow-contract" : "arrow-expand"}
      label="Maximize or Restore Window"
      --icon-button-hover-color="var(--color-info-700)"
      --icon-button-active-bg="var(--color-info-500)"
      --icon-button-hover-bg="var(--color-info-200)"
    />
    <IconButton
      on:click={close}
      src="close"
      label="Close Window"
      --icon-button-hover-color="var(--color-error-700)"
      --icon-button-active-bg="var(--color-error-500)"
      --icon-button-hover-bg="var(--color-error-300)"
    />
    {/if}
  </div>
</div>

<style>
  .titlebar {
    position: fixed;
    width: 100%;
    height: var(--titlebar-height, clamp(22px, 4vh, 40px));
    display: flex;
    flex-direction: row;
    z-index: var(--titlebar-z-index, 9999);
    background-color: var(--titlebar-bg, var(--surface-0));
  }
  .titlebar-content {
    display: contents;
    user-select: none;
  }

  .window-controls {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    column-gap: 0.75rem;
    --icon-size: 1rem;
  }
  .window-controls > :global(:first-child) {
    flex-grow: 1;
    
  }
</style>
