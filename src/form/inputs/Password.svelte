<script lang="ts">
  export let label: string;
  export let value: string = "";
  export let placeholder: string = "";
  export let required: boolean = false;
  export let name: string = "";
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
  <span class="input-label">
    {label}
  </span>
  <div class="input-container">
    <input type="password" bind:value {name} {placeholder} {required} />
  </div>
  {#if $$slots.help}
    <span class="help-text">
      <slot name="help" />
    </span>
  {/if}
</label>

<style>
  .input-label {
    font-weight: var(--password-input-label-weight, var(--input-label-weight, 200));
    font-size: var(--password-input-label-size, var(--input-label-size, 0.9rem));
    margin-bottom: 0.25rem;
  }
  input {
    border: 0;
    padding: var(--password-input-padding, var(--text-input-padding, 0.5rem 1rem));
    border-radius: var(--radius-2);
    background-color: var(--surface-1);
    width: 100%;
    box-sizing: border-box;
    font-size: var(--password-input-size, var(--input-size, 0.9rem));
    outline-color: var(--color-primary);
  }
  .help-text {
    font-style: italic;
    font-weight: 200;
    font-size: 0.7rem;
    opacity: 0.8;
  }
</style>
