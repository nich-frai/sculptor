<script lang="ts">
	import { setContext } from "svelte";

	import { writable } from "svelte/store";

	export let value: unknown | undefined = undefined;

	let radioContext = writable(value);

	setContext("radio-group", radioContext);
	
	radioContext.subscribe((v) => {
		value = v;
	});

</script>

<div class="radio-group">
	<slot />
</div>

<style>
	.radio-group {
		display: contents;
	}
</style>
