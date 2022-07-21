<script lang="ts">
  import { getContext } from "svelte";
  import type { RouteNavigator } from "./navigator";

  export let href: string;
  export let state: Record<string, unknown> = {};
	export let targetRoot : boolean = false;
	// export let target : string | undefined = undefined; - TODO: allow named router navigation

  const navigator = getContext<RouteNavigator>("navigator");
		const rootNavigator = getContext<RouteNavigator>("root-navigator");

  export function navigate() {
		if(targetRoot){
			rootNavigator.navigate(href, state);
		} else {
			navigator.navigate(href, state);
		}
  }
</script>

<a href="#/{href}" on:click|preventDefault={navigate}>
  <slot />
</a>
