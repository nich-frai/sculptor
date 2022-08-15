<h1>
  <div class="title-decoration" />
  {#if $$slots.icon}
    <span class="icon-container">
      <slot name="icon" />
    </span>
  {/if}
  <div class="title">
    <slot />
		{#if $$slots.subtitle}
    <span class="subtitle">
      <slot name="subtitle" />
    </span>
  {/if}
  </div>
 
</h1>

<style>
  h1 {
		position: relative;
    margin: 1rem 0;
		display: flex	;
    padding: 0;
		column-gap: 0.75rem;
		font-size: var(--page-title-size, var(--text-size-5, 2rem));
		line-height: var(--page-title-size, 1.6rem);
		align-items: center;
		vertical-align: middle;
  }
	.icon-container{
		display: contents;
	}
	.title-decoration {
		position: relative;
		height: calc(var(--page-title-size, 1.6rem) * 1.6) ;
		width: 4pt;
		flex-basis: 4pt;
		border-radius: var(--radius-1);
		background-color: var(--color-primary);
	}
	.title {
		position: relative;
		width: auto;
		flex-grow: 1;
		white-space: nowrap;
	}
</style>
