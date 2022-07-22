<script lang="ts">
	export let style : 'ghost' | 'subtle' | 'filled' | 'outline' | 'text' = 'subtle';
	export let size : 'small' | 'medium' | 'large' | undefined = undefined;
	export let align: 'left' | 'start' | 'end' | 'center' | 'right' | undefined = undefined;
</script>
<button on:click on:contextmenu on:dblclick class="{style} {size != null ? `${size}-size` : ''} {$$props.class ?? ''}" style="{
align != null ? `text-align: ${align}` : ''
}">
	<slot></slot>
</button>
<style>
	button {
		font-size: inherit;
		text-align: var(--button-text-align, start);
		border: 0;
		margin: 0;
		padding: var(--button-padding, 0);
		width: 100%;
		border-radius: var(--radius-1);
		display: flex;
		column-gap: 0.5em;
		align-items: center;

	}

	button.small-size {
		--button-padding: 0.1rem 0.25rem;
	}
	button.medium-size {
		--button-padding: 0.25rem 0.5rem;
	}
	button.large-size {
		--button-padding: 0.5rem 1rem;
	}

	button.ghost {
		background-color: transparent;
		transition: background-color var(--transition-duration);
	}
	button.ghost:hover {
		background-color: var(--surface-1);
	}
	button.ghost:active {
		background-color: var(--surface-2);
	}

	button.subtle {
		background-color: var(--surface-1);
		transition: background-color var(--transition-duration);
	}
	button.subtle:hover {
		background-color: var(--surface-2);
	}
	button.subtle:active {
		background-color: var(--surface-3);
	}

	button.filled {
		background-color: var(--color-primary);
		color: var(--text-color-on-primary);
		transition: background-color var(--transition-duration);
	}
	button.filled:hover {
		background-color: var(--color-primary-700);
		color: var(--text-color-on-primary-700);
	}
	button.filled:active {
		background-color: var(--color-primary-900);
		color: var(--text-color-on-primary-900);
	}

	button.outline {
		background-color: var(--button-outline-bg, var(--surface-1));
		border: 2px solid var(--button-outline-border-color, var(--color-primary));
		color: var(--button-outline-color, var(--text-color-on-surface));
		transition: border var(--transition-duration), background-color var(--transition-duration), color var(--transition-duration);
	}
	button.outline:hover {
		background-color: var(--button-outline-hover-bg, var(--surface-2));
		border: 2px solid var(--button-outline-hover-border-color, var(--color-primary-600));
		color: var(--button-outline-hover-color, var(--text-color-on-surface-2));
	}
	button.outline:active {
		background-color: var(--button-outline-active-bg, var(--surface-3));
		border: 2px solid var(--button-outline-active-border-color, var(--color-primary-800));
		color: var(--button-outline-active-color, var(--text-color-on-surface-3));
	}
</style>