<script lang="ts">
  import {} from "@tauri-apps/api";

  function toggleMaximize() {}
</script>

<div class="titlebar" data-tauri-drag-region>
  <slot />
  <div class="window-controls" on:dblclick={toggleMaximize} />
</div>

<style>
  .titlebar {
    position: fixed;
    width: 100%;
    height: var(--titlebar-height, 6vh);
    display: flex;
    flex-direction: row;
    z-index: var(--titlebar-z-index, 9999);
  }
</style>
