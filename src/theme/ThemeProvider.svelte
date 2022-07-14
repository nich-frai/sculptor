<script lang="ts">
  import {
    flattenToCSSVariables,
    printAsCSSVariables,
  } from "../utils/flatten_css_var";

  import { DefaultTheme, type TSculptorTheme } from "./theme";

  export let theme: TSculptorTheme = DefaultTheme;
</script>

<div
  class="theme-provider"
  aria-hidden="true"
  style={printAsCSSVariables(flattenToCSSVariables(theme))}
>
  <slot />
</div>

<style>
  .theme-provider {
    display: contents;
  }

  :global(:where(html)) {
    font-family: "Product Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: clamp(8pt, calc(8pt + 0.290625vw), 18pt);
  }
  :global(:where(div)) {
    box-sizing: border-box;
  }
</style>
