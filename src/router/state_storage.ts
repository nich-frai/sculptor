import { serialize } from "../storage/serializer";
import type { TRouterStateStorage } from "./use_router";

export function persistRouterStateInLocalStorage(
	name: string,
	storage?: ILocalStorage
): TRouterStateStorage {
	if (storage == null) {
		storage = window.localStorage;
	}

	let storageKey = `router_state::${name}@current_state`;

	return {
		set(path, state) {
			let urlParams = new URLSearchParams();

			for (let stateKey in state) {
				const value = state[stateKey];
				let serialized = serialize(value);
				urlParams.set(stateKey, serialized);
			}

			let stateURL = `${path}${urlParams.toString() === '' ? '' : '?' + urlParams.toString()}`;
			storage?.setItem(storageKey, stateURL);
		},
		get() {
			let stateURL = storage?.getItem(storageKey);
			if (stateURL == null) {
				return { path: '', state: {} };
			} else {

				const hasUrlParams = stateURL.indexOf('?') >= 0;

				let path = hasUrlParams ? stateURL.substring(0, stateURL.indexOf('?')) : stateURL;
				let state: Record<string, unknown> = {};
				if (hasUrlParams) {
					let urlParams = new URLSearchParams(stateURL.substring(1));
					urlParams.forEach((v, k) => {
						state[k] = v;
					});
				}
				return { path, state };
			}
		},
	}
}

interface ILocalStorage {
	clear(): void;
	getItem(key: string): string | null;
	removeItem(key: string): void;
	setItem(key: string, value: string): void;
}

export function persistRouterStateInUrl(): TRouterStateStorage {

	return {
		set(path, state) {
			let urlParams = new URLSearchParams();

			for (let stateKey in state) {
				const value = state[stateKey];
				let serialized = serialize(value);
				urlParams.set(stateKey, serialized);
			}

			let stateURL = `${path}${urlParams.toString() === '' ? '' : '?' + urlParams.toString()}`;
			console.log(stateURL);
			window.location.hash = '#/' + stateURL;
		},
		get() {
			let stateURL = window.location.hash;
			if (stateURL == '') {
				return { path: '', state: {} };
			} else {
				// remove "#/"
				stateURL = stateURL.substring(2);
				const hasUrlParams = stateURL.indexOf('?') >= 0;

				let path = hasUrlParams ? stateURL.substring(0, stateURL.indexOf('?')) : stateURL;
				let state: Record<string, unknown> = {};

				if (hasUrlParams) {
					let urlParams = new URLSearchParams(stateURL.substring(1));
					urlParams.forEach((v, k) => {
						state[k] = v;
					});
				}
				return { path, state };
			}
		},
	}
}