<script lang="ts">
  import Icon from "./Icon.svelte";

  export let style: "ghost" | "subtle" | "filled" | "outline" | "text" =
    "subtle";

  export let label: string;
  export let src: string;

  export let size: string | undefined = undefined;
</script>

<button
  title={label}
  aria-label={label}
  on:click
  on:dblclick
  on:contextmenu
  class=" icon-button style-{style} {$$props.class ?? ''}"
  style="{size != null ? 'height: ' + size : ''}
"
>
  <Icon {src} />
</button>

<style>
  button {
    position: relative;
    border: 0;
    border-radius: var(--radius-1);
    display: flex;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    background-color: var(--icon-button-bg, var(--surface-1));
    transition: background-color var(--transition-duration, 250ms);
    box-sizing: border-box;
    padding: var(--icon-button-padding, 0.25em);
  }

  button:focus {
    outline: 1px solid var(--icon-button-hover-color);
    outline-offset: 1px;
    background-color: var(
      --icon-button-hover-bg,
      var(--icon-button-bg, var(--surface-1))
    );
    --icon-color: var(--icon-button-hover-color);
  }

  button:hover {
    background-color: var(
      --icon-button-hover-bg,
      var(--icon-button-bg, var(--surface-1))
    );
    --icon-color: var(--icon-button-hover-color);
  }

  button:active {
    background-color: var(
      --icon-button-active-bg,
      var(--icon-button-bg, var(--surface-1))
    );
    --icon-color: var(--icon-button-active-color);
  }
</style>
