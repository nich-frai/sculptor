<script lang="ts">
  import Button from "../../components/Button.svelte";

  export let name: string = "";
  export let label: string;
  export let checked: boolean = false;
</script>

<Button
  style={checked ? "filled" : "subtle"}
  on:click={() => {
    checked = !checked;
  }}
>
  <label on:click|stopPropagation>
    <input type="checkbox" {name} bind:checked on:click|stopPropagation />
    {label}
  </label>
</Button>

<style>
  label {
    display: flex;
    column-gap: 0.5em;
		align-items: center;
  }
  input[type="checkbox"] {
    appearance: none;
    border: 1px solid var(--surface-2);
    border-radius: var(--radius-1);
    background-color: var(--surface-1);
    color: var(--surface-contrast-1);
    width: 1.6em;
    height: 1.6em;
		display: flex;
		align-items: center;
		justify-content: center;
  }
  input[type="checkbox"]::before {
    content: "\2713";
		font-size: 1.4em;
		transition: color var(--transition-duration-fast), font-size var(--transition-duration-fast);
  }
  input[type="checkbox"]:checked::before {
		color: var(--color-primary);
		font-size: 1.8em;

  }
	input[type="checkbox"]:checked {
		background-color: var(--text-color-on-primary);
    border: 1px solid var(--text-color-on-primary);

  }
</style>
