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
    style={checked ? "filled" : "subtle"}
    on:click={() => {
      checked = !checked;
      dispatcher("changed", checked);
    }}
    on:click
  >
    <div class="input-container">
      <input
        type="checkbox"
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
            style="fill:none;stroke-linecap:square;stroke-miterlimit:10;stroke-width:80px"
          /></svg
        >
      </span>
    </div>

    {label}
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
    position: relative;
    width: 2rem;
    height: 2rem;
  }
  input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    appearance: none;
    border: 2px solid var(--surface-4);
    border-radius: 50%;
    background-color: var(--surface-1);
    color: var(--surface-contrast-1);
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input[type="checkbox"]::before {
    content: "";
    font-size: 1.4em;
    transition: color var(--transition-duration-fast),
      font-size var(--transition-duration-fast);
  }
  input[type="checkbox"]:checked::before {
    color: var(--text-color-on-primary);
    font-size: 1.2em;
    font-weight: bold;
  }
  input[type="checkbox"]:checked {
    background-color: var(--color-primary);
    border: 2px solid var(--text-color-on-primary);
  }
  .checkmark {
    display: none;
    position: absolute;
    top: 0.4rem;
    left: 0.6rem;
    width: 1rem;
    height: 1rem;
  }
  .checkmark svg {
    width: 1rem;
    height: 1rem;
    aspect-ratio: 1;
  }
  .checkmark svg polyline {
    stroke: var(--text-color-on-primary);
  }
  input[type="checkbox"]:checked ~ .checkmark {
    display: block;
  }
</style>
