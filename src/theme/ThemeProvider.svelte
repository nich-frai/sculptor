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
  style={printAsCSSVariables(flattenToCSSVariables(theme))}
>
  <slot />
</div>

<style>
  .theme-provider {
    display: contents;
    color: var(--text-color-on-surface);
  }

  :global(:where(html)) {
    font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: clamp(7pt, calc(7pt + 0.290825vw), 18pt);
    accent-color: var(--color-primary);
    color: var(--text-color-on-surface);
  }
  :global(:where(div)) {
    box-sizing: border-box;
  }
</style>
