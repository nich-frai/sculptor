<script lang="ts">
	export let style : 'ghost' | 'subtle' | 'filled' | 'outline' | 'text' = 'subtle';
	export let size : 'small' | 'medium' | 'large' | undefined = undefined;

</script>
<button on:click on:contextmenu on:dblclick class="{style} {size != null ? `${size}-size` : ''} {$$props.class ?? ''}">
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
</style>