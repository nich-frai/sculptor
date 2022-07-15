<script lang="ts">
import { setContext } from "svelte";

  import { writable,Writable } from "svelte/store";
  import { RouteNavigator } from "./navigator";
  import type { TRouterState } from "./use_router";

  export let name: string | undefined = undefined;
  export let root: boolean = false;

  let currentState: Writable<TRouterState> = writable({
    path: "/",
    state: {},
  });

	const navigator = new RouteNavigator(currentState);

	setContext('navigator', navigator);
	
	if(root === true){
		setContext('root-navigator', navigator);
	}
</script>

<div class="router" data-name={name}>
  <slot />
</div>
