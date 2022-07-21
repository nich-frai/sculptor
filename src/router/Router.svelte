<script lang="ts">
  import { match } from "path-to-regexp";
  import { setContext, getContext, onMount } from "svelte";
  import { writable, Writable } from "svelte/store";
  import { RouteNavigator } from "./navigator";
  import type { TRouterState, TRouterStateStorage } from "./use_router";

  /**
   * Router's name
   * -------------
   * This router identifier, useful to targeting which router should navigate
   * or to inspect/debug current router state
   */
  export let name: string | undefined = undefined;
  export let root: boolean = false;
  export let path: string = "";
  export let stateStorage : TRouterStateStorage | undefined = undefined;

  const pathMatcher = match(
    path.charAt(path.length - 1) === "/"
      ? path + ":subroute*"
      : path + "/:subroute*"
  );

  let currentState: Writable<TRouterState> = writable({
    path: "/",
    state: {},
  });
  const parentRouter = getContext<RouteNavigator>("navigator");
  const navigator = new RouteNavigator(currentState);
  setContext("navigator", navigator);
  let isRouterVisible: boolean = true;

  if (root === true) {
    setContext("root-navigator", navigator);
  }

  onMount(() => {
    // state storage != null, update current state and sync changes to the state!
    if(stateStorage != null) {
      let currentStateFromStorage = stateStorage.get();
      currentState.set(currentStateFromStorage);

      currentState.subscribe((v) => {
        stateStorage?.set(v.path, v.state);
      });
    }

    // if this is not the root router check visibility by asking the current navigation state to the parent router and seeing if the path matches
    if (!root) {
      parentRouter.state.subscribe((s) => {
        let matches = pathMatcher(s.path) !== false;
        isRouterVisible = matches !== false;
        console.log("Subroute matches", matches, path, s.path);
      });
    }
  });
</script>

{#if root || isRouterVisible}
  <div class="router" class:root data-name={name}>
    <slot />
  </div>
{/if}

<style>
  .router {
    display: contents;
  }
</style>
