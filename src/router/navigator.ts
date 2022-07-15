import type { Writable } from "svelte/store";
import type { TRouterState } from "./use_router";

export class RouteNavigator {

	get state() {
		return { subscribe : this.store.subscribe };
	}

	constructor(
		private store : Writable<TRouterState>
	) {}

	navigate(to : string, state? : Record<string, unknown>) {
		let normalize;
	}
}