<script lang="ts">
  import Icon from "./Icon.svelte";

  export let label: string;
	export let src : string;

</script>

<button aria-label={label}>
  <Icon {src} />
</button>
