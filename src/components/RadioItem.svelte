<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	export let value: unknown;
	const ctx = getContext<Writable<unknown>>("radio-group");

</script>

<div
	class="radio-item"
	class:selected={$ctx === value}
	on:click
	on:click={() => {
		console.log("Value!");
		ctx.set(value);
	}}
>
	<slot selected={$ctx === value}  />
</div>

<style>
	.radio-item {
		display: contents;
	}
</style>
