<script lang="ts">
  import Icon from "./Icon.svelte";

  export let style: "ghost" | "subtle" | "filled" | "subtle-filled" |"outline" | "text" =
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
  style="{size != null ? `height:${size};--icon-size:85%;` : ''}
"
>
  <Icon {src} />
</button>

<style>
  button {
    position: relative;
    border: 0;
    border-radius: var(--icon-button-radius, var(--button-radius, var(--radius-1, 4px)));
    display: flex;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    background-color: var(--icon-button-bg, var(--surface-1));
    transition: background-color var(--transition-duration, 250ms);
    box-sizing: border-box;
    padding: var(--icon-button-padding, 0.25rem);
    cursor: pointer;
    --icon-color: var(--icon-button-color);
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

  button.subtle-filled {
		background-color: var(--color-primary-200);
		--icon-color: var(--text-color-on-primary-200);
		transition: background-color var(--transition-duration);
	}
	button.subtle-filled:hover {
		background-color: var(--color-primary);
		--icon-color: var(--text-color-on-primary);
	}
	button.subtle-filled:active {
		background-color: var(--color-primary-700);
		--icon-color: var(--text-color-on-primary-700);
	}

  button.text {
		background-color: transparent;
		--icon-color: var(--text-color-on-surface);
		transition: background-color var(--transition-duration);
	}
	button.text:hover {
		background-color: var(--surface-1);
		--icon-color: var(--text-color-on-surface);
	}
	button.text:active {
		background-color: var(--surface-2);
		--icon-color: var(--text-color-on-surface);
	}
</style>
