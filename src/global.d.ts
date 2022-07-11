/// <reference types="svelte" />

declare namespace svelte.JSX {
	interface HTMLProps<HTMLFormElement> {
		onrequestEnctype? : CompositionEventHandler<T>;
	}
}