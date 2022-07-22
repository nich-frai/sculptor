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
  class=" icon-button {style} {$$props.class ?? ''}"
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
    padding: var(--icon-button-padding, 0.25rem);
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

  button.filled {
		background-color: var(--color-primary);
		--icon-color: var(--text-color-on-primary);
		transition: background-color var(--transition-duration);
	}
	button.filled:hover {
		background-color: var(--color-primary-700);
		--icon-color: var(--text-color-on-primary-700);
	}
	button.filled:active {
		background-color: var(--color-primary-900);
		--icon-color: var(--text-color-on-primary-900);
	}
</style>
