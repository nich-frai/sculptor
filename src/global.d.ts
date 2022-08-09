/// <reference types="svelte" />
/// <reference types="@tauri-apps/api" />

declare namespace svelte.JSX {
	interface HTMLProps<HTMLFormElement> {
		onrequestEnctype? : CompositionEventHandler<T>;
	}
	interface SvelteInputProps {
		type?: string;
		name?: string;
		value? : string;
		placeholder?: string;
		checked?: boolean;
		required? : boolean;
		onclick? : CompositionEvent<T>;
		onchange? : CompositionEvent<T>;
		tabindex? : number;
	}
}

declare module '*.svelte' {
	export { SvelteComponent as default } from 'svelte/internal';
}