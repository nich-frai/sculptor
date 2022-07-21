<script lang="ts">
	export let color : string | undefined = undefined;
</script>
<div class="vertical-separator" style="
{color != null ? `--vertical-separator-color:${color};` : ''}
"/>
<style>
	.vertical-separator {
		height: var(--vertical-separator-height, 100%);
		border-radius: var(--radius-2);
		width: var(--vertical-separator-width, 1px);
		background-color: var(--vertical-separator-color, var(--surface-2));
		border-radius: var(--radius-2);
	}
</style>
