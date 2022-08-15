<script lang="ts">
  import { onMount } from "svelte";

  import {
    flattenToCSSVariables,
    printAsCSSVariables,
  } from "../utils/flatten_css_var";

  import { DefaultTheme, type TSculptorTheme } from "./theme";

  export let theme: TSculptorTheme = DefaultTheme;

  let themeStyleAttr: HTMLStyleElement;

  onMount(() => {
    themeStyleAttr = document.createElement("style");
    themeStyleAttr.textContent = `
    :root {
      ${printAsCSSVariables(flattenToCSSVariables(theme))}
    }
    `;

    document.body.prepend(themeStyleAttr);
    return () => {
      themeStyleAttr.remove();
    };
  });
</script>

<slot />

<style>
  :global(:where(html)) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 11px;
    accent-color: var(--color-primary);
    color: var(--text-color-on-surface);
    background-color: var(--surface-0);
  }

  :global(:where(div, section, main)) {
    box-sizing: border-box;
  }
</style>
