<script lang="ts">
	export let label : string;
	export let labelPosition: 'left' | 'right' = 'right';

	export let name : string;
	export let checked : boolean = false;
	export let value : string = "true";

</script>
<!-- svelte-ignore a11y-label-has-associated-control -->
 <label class="label-{labelPosition}" title={label}>
	<div class="checkbox-container">
		<input type="checkbox" {name} {checked} {value} />
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
	<div class="label">{label}</div>
</label>

<style>
	.checkbox-container {
    position: relative;
    width: var(--checkbox-input-size, 14pt);
    height: var(--checkbox-input-size,14pt);
  }

  label {
		display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    margin: 1.5rem 0;
  }

	label.label-left {
		flex-direction: row-reverse;
	}

  input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    appearance: none;
    border: 2px solid var(--surface-4);
    border-radius: 50%;
    background-color: var(--surface-0);
    color: var(--surface-contrast-1);
    width: var(--checkbox-input-size,14pt);
    height: var(--checkbox-input-size,14pt);
    padding: 0;
    margin: 0;
    outline-color: var(--color-primary);
    transition: border var(--transition-duration);
  }
  input[type="checkbox"]:checked {
    border: 2px solid var(--color-primary);
  }
	div.label {
		flex-grow: 1;
		font-weight: var(--checkbox-input-label-weight, var(--input-label-weight, 200));
    font-size: var(--checkbox-input-label-size, var(--input-label-size, 0.9rem));
	}
  .checkmark {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -5pt;
    width: 10pt;
    height: 10pt;
    transform-origin: center center;
    transform: rotate(-45deg) scale(10%);
    transition: transform var(--transition-duration) var(--transition-duration-fast);
  }
  .checkmark svg {
    position: absolute;
    width: 10pt;
    height: 10pt;
    aspect-ratio: 1;
  }
  .checkmark svg polyline {
    stroke: var(--color-primary);
  }
  input[type="checkbox"]:checked ~ .checkmark {
    opacity:1;
    transform: rotate(0deg) scale(100%);

  }
</style>