<script lang="ts">
	export let style : 'ghost' | 'subtle' | 'filled' | 'outline' | 'text' = 'subtle';
	export let size : 'small' | 'medium' | 'large' = 'medium';

</script>
<button on:click on:contextmenu on:dblclick class="{style} {size}-sized {$$props.class}">
	<slot></slot>
</button>
<style>
	button {
		text-align: var(--button-text-align, start);
		border: 0;
		margin: 0;
		padding: 0;
		width: 100%;
		border-radius: var(--radius-1);
	}

	button.small-sized {
		padding: 0.1rem 0.25rem;
	}
	button.medium-sized {
		padding: 0.25rem 0.5rem;
	}
	button.large-sized {
		padding: 0.5rem 1rem;
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
</style>