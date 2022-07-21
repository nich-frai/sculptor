export function router(el : HTMLElement) {

}

export type TRouterState = {
	path : string;
	state: Record<string, unknown>;
}

export type TRouterStateStorage = {
	set(path : string, state : Record<string, unknown>) : void;
	get() : TRouterState;
}