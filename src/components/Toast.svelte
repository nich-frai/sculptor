<div class="toast">
	<slot></slot>
</div>

<style>
	.toast {
		display: flex;
		align-items: center;
		padding: var(--toast-padding, 0.25rem 0.5rem);
		border: 2px solid var(--color-primary);
		background-color: transparent;
		font-size: var(--toast-text-size, 0.9em);
		border-radius: var(--radius-1);
		white-space: nowrap;
	}
</style>