/// <reference types="svelte" />
/// <reference types="@tauri-apps/api" />

declare namespace svelte.JSX {
	interface HTMLProps<HTMLFormElement> {
		onrequestEnctype? : CompositionEventHandler<T>;
	}
}

declare module '*.svelte' {
	export { SvelteComponent as default } from 'svelte/internal';
}