<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "../../components/Button.svelte";

  export let name: string = "";
  export let label: string;
  export let checked: boolean = false;
  const dispatcher = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
  <Button
    class={checked ? "checked" : ""}
    style="outline"
    on:click={() => {
      checked = !checked;
      dispatcher("changed", checked);
    }}
    on:click
  >
    <div class="input-container">
      <input
        type="checkbox"
        tabindex="-1"
        {name}
        bind:checked
        on:change={() => {
          dispatcher("changed", checked);
        }}
      />
      <span class="checkmark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          ><polyline
            points="416 128 192 384 96 288"
            style="fill:none;stroke-linecap:square;stroke-miterlimit:10;stroke-width:60px"
          /></svg
        >
      </span>
    </div>

    <span class="text-label">
      {label}
    </span>
    {#if checked}
      <slot />
    {/if}
  </Button>
</label>

<style>
  label {
    position: relative;
    display: flex;
    column-gap: 0.5em;
    align-items: center;
  }
  .input-container {
    --checkbox-size: 12pt;
    position: relative;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
  }
  input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    appearance: none;
    border: 1px solid var(--surface-4);
    border-radius: 50%;
    background-color: var(--surface-1);
    color: var(--surface-contrast-1);
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    margin: 0;
  }
 
  input[type="checkbox"]:checked {
    border: 1px solid var(--color-primary);
  }
  .checkmark {
    --checkmark-size: 8pt;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: calc(-1/2 * var(--checkmark-size));
    width: var(--checkmark-size);
    height: var(--checkmark-size);
    transform-origin: center center;
    transform: rotate(-45deg) scale(10%);
    transition: transform var(--transition-duration),
      opacity var(--transition-duration);
  }
  .checkmark svg {
    position: absolute;
    width: var(--checkmark-size);
    height: var(--checkmark-size);
    aspect-ratio: 1;
  }
  .checkmark svg polyline {
    stroke: var(--color-primary);
  }
  input[type="checkbox"]:checked ~ .checkmark {
    display: block;
  }
  label :global(button) {
    --button-outline-border-color: var(--surface-4);
  }
  label :global(button.checked) {
    --button-outline-border-color: var(--color-primary);
  }
  input[type="checkbox"]:checked ~ .checkmark {
    opacity: 1;
    transform: rotate(0deg) scale(100%);
  }
</style>
