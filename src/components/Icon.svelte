<script lang="ts">
	export let src : string;
	
	export let color : string = '';
	export let size : string = '1em';
	export let padding: string = '0';
</script>

<div class="icon" aria-hidden="true" style="
--icon-color: {color};
--icon-source: url({src});
--icon-size: {size};
--icon-padding: {padding};
">
	<div class="icon-mask"></div>
</div>

<style>
	.icon {
		display: inline-block;
		aspect-ratio: 1;
		size: var(--icon-size, 1em);
		padding: var(--icon-padding, 0);
	}
</style>