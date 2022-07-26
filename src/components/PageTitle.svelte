<h1>
  <div class="title-decoration" />
  {#if $$slots.icon}
    <span class="icon-container">
      <slot name="icon" />
    </span>
  {/if}
  <span class="title">
    <slot />
		{#if $$slots.subtitle}
    <span class="subtitle">
      <slot name="subtitle" />
    </span>
  {/if}
  </span>
 
</h1>

<style>
  h1 {
    margin: 1rem 0;
    padding: 0;
		display: flex;
		column-gap: 0.5rem;
		font-size: 1.6rem;
		line-height: 1.6rem;
		align-items: center;
		vertical-align: middle;
  }
	.icon-container{
		display: contents;
	}
	.title-decoration {
		height: 1.4rem;
		width: 4pt;
		border-top-left-radius: var(--radius-1);
		border-bottom-left-radius: var(--radius-1);
		background-color: var(--color-primary);
	}
</style>
