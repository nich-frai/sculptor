<script lang="ts">
  import Icon from "./Icon.svelte";

  export let label: string;
	export let src : string;

</script>

<button aria-label={label} on:click on:dblclick on:contextmenu >
  <Icon {src} />
</button>

<style>
  button {
    border: 0;
    border-radius: var(--radius-1);
    display: flex;
    aspect-ratio: 1;
    align-items: center;
    background-color: var(--icon-button-bg, var(--surface-1));
    transition: background-color var(--transition-duration, 250ms);
  }

  button:focus {
    outline: 1px solid var(--icon-button-hover-color);
    outline-offset: 1px;
    background-color: var(--icon-button-hover-bg, var(--icon-button-bg, var(--surface-1)));
    --icon-color: var(--icon-button-hover-color);
  }

  button:hover {
    background-color: var(--icon-button-hover-bg, var(--icon-button-bg, var(--surface-1)));
    --icon-color: var(--icon-button-hover-color);
  }

  button:active {
    background-color: var(--icon-button-active-bg, var(--icon-button-bg, var(--surface-1)));
    --icon-color: var(--icon-button-active-color);
  }
</style>