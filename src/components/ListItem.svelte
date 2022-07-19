<script lang="ts">
	export let compact: boolean = false;
	export let hideIcon: boolean = false;
	export let subtitleFirst: boolean = false;
</script>

<div
	class="list-item {$$props.class}"
	class:hidden-icon={hideIcon}
	class:compact
	class:inverted-subtitle={subtitleFirst}
>
	<div class="icon">
		<slot name="icon">
			<div class="icon-placeholder" />
		</slot>
	</div>
	<div class="text">
		<div class="title">
			<slot />
		</div>
		{#if $$slots.subtitle}
			<div class="subtitle">
				<slot name="subtitle" />
			</div>
		{/if}
	</div>
</div>

<style>
	.list-item {
		display: grid;
		width: 100%;
		height: var(--item-height, 3rem);
		--list-item-height: var(--item-height, 3rem);
		border-radius: var(--radius-1);
		background-color: var(--list-item-bg, --surface-1);
		transition: background-color var(--transition-duration, 250ms);
		grid-template-columns: var(--list-item-height, 3rem) 1fr;
		grid-template-rows: var(--item-height, 3rem);
		column-gap: 0.5rem;
	}

	.list-item.compact {
		height: calc(var(--item-height, 3rem) / 2);
		font-size: 1rem;
		font-weight: 200;
		--list-item-height: calc(var(--item-height, 3rem) / 2);
	}

	.list-item:hover {
		background-color: var(--list-item-hover-bg, --surface-2);
	}

	.icon,
	.icon-placeholder {
		aspect-ratio: 1;
		height: var(--list-item-height, 3rem);
		border-radius: var(--radius-1);
		overflow: hidden;
	}
	.icon-placeholder {
		background-color: var(--surface-1);
	}

	.text {
		display: flex;
		height: var(--list-item-height, 3rem);
		flex-direction: column;
		justify-content: center;
	}

	.inverted-subtitle .text {
		flex-flow: column-reverse;
	}
	.subtitle {
		font-size: var(--list-item-subtitle-size, 0.8em);
		font-weight: var(--list-item-subtitle-weight, 100);
		opacity: 0.95;
		color: var(--list-item-subtitle-color, var(--text-color-on-surface-1));
	}
</style>
