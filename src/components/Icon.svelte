<script lang="ts">
	export let src : string;
	
	export let color : string | undefined = undefined;
	export let size : string | undefined = undefined;
	export let padding: string | undefined = undefined;

	$: {
		// check if it is a svg image, else append ".svg" and preppend "icons/"
		if(src.match(/\.(svg|png|webp)$/) == null) {
			src = `./icons/${src}.svg`;
		}
	}
</script>

<div class="icon" aria-hidden="true" style="
{ color != null ? `--icon-color: ${color};`: ''}
{ size != null ? `--icon-size: ${size};`: ''}
{ padding != null ? `--icon-padding: ${padding};`: ''}
--icon-source: url({src});
">
	<div class="icon-mask"></div>
</div>

<style>
	.icon {
		display: inline-flex;
		aspect-ratio: 1;
		width: var(--icon-size, 1em);
		padding: var(--icon-padding, 0);
		align-content: center;
		justify-content: center;
	}

	.icon-mask {
		position: relative;
		width: var(--icon-size, 1em);
		flex-basis: var(--icon-size);
		aspect-ratio: 1;
		mask-size: 100%;
		-webkit-mask-size: 100%;
		mask-position: center;
		-webkit-mask-position: center;
		mask-repeat: no-repeat;
		-webkit-mask-repeat: no-repeat;
		mask-image: var(--icon-source);
		-webkit-mask-image: var(--icon-source);

		background-color:  var(--icon-color, #000);
	}

	.icon:hover .icon-mask {
		background-color: var(--icon-hover-color, var(--icon-color, #000));
	}
</style>