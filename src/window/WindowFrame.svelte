<script lang="ts">
  import { DefaultTheme, TSculptorTheme } from "../theme/theme";
  import ThemeProvider from "../theme/ThemeProvider.svelte";
  import TitleBar from "./TitleBar.svelte";

  export let theme: TSculptorTheme = DefaultTheme;
</script>

<ThemeProvider {theme}>
  <main>
    <TitleBar --titlebar-bg="transparent">
      <slot name="titlebar" />
      <div class="window-controls" slot="window-controls">
        <slot name="window-controls" />
      </div>
    </TitleBar>
    <section class="window-content" >
      <slot />
    </section>
  </main>
</ThemeProvider>

<style>
  main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    min-width: 430px;
    overflow: hidden;
    background-color: var(--surface-0);
  }

  .window-content {
    position: absolute;
    top: var(--titlebar-height);
    height: calc(100% - var(--titlebar-height));
    left: 0;
    width: 100%;
    min-height: 480px;
    overflow: hidden;
    z-index: 1;
  }
  .window-controls > :global(*:first-child) {
    flex-grow: 1;
  }
</style>
