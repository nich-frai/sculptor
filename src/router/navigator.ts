import type { Writable } from "svelte/store";
import type { TRouterState } from "./use_router";

export class RouteNavigator {

	get state() {
		return { subscribe : this.store.subscribe };
	}

	constructor(
		private store : Writable<TRouterState>
	) {}

	go(to : string, state? : Record<string, unknown>) {
		this.store.set({
			path : to,
			state : state ?? {}
		});
	}
}