/// <reference types="svelte" />
/// <reference types="@tauri-apps/api" />

declare namespace svelte.JSX {
	interface HTMLProps<HTMLFormElement> {
		onrequestEnctype? : CompositionEventHandler<T>;
	}
	interface SvelteInputProps {
		type?: string;
		name?: string;
		placeholder?: string;
		checked?: boolean;
		onclick? : CompositionEvent<T>;
		onchange? : CompositionEvent<T>;
	}
}

declare module '*.svelte' {
	export { SvelteComponent as default } from 'svelte/internal';
}