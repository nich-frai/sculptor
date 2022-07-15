<script lang="ts">
  import { match } from "path-to-regexp";
  import { getContext } from "svelte";
  import type { RouteNavigator } from "./navigator";

  export let path: string;
  const pathMatcher = match(path);
  const navigator = getContext<RouteNavigator>("navigator");

  let urlParams: Record<string, string> = {};
  let state: Record<string, unknown> = {};

  navigator.state.subscribe((current) => {
    let matches = pathMatcher(current.path);
    if (matches !== false) {
      urlParams = matches.params as Record<string, string>;
      state = current.state;
      isActive = true;
    } else {
      urlParams = {};
      state = {};
      isActive = false;
    }
  });

  let isActive: boolean = false;
</script>

{#if isActive}
  <slot {urlParams} {state} />
{/if}
