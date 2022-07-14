
export type TFlattenAsCSSVar = {
	[name: string]: string | TFlattenAsCSSVar | string[];
};

export function flattenToCSSVariables(print: TFlattenAsCSSVar) {

	let printOut: Record<string, string> = {};

	for (let keyName in print) {
		const value = print[keyName];
		if (typeof value === 'string') {
			printOut[keyName] = value;
			continue;
		}

		if (Array.isArray(value)) {
			value.forEach((v, i) => {
				printOut[`${keyName}-${i}`] = v.replace(
					/\$\.([A-z0-9\-]+?)/g, `${keyName}-$.$1`
				);
			});
			continue;
		}

		let innerPrint = flattenToCSSVariables(value);
		for (let innerKey in innerPrint) {
			let innerValue = innerPrint[innerKey];
			if (innerKey === '') {
				printOut[keyName] = innerValue.replace(
					/\$\.([A-z0-9\-]+?)/g, `$.${keyName}-$1`
				);
			} else {
				printOut[`${keyName}-${innerKey}`] = innerValue.replace(
					/\$\.([A-z0-9\-]+?)/g, `$.${keyName}-$1`
				);
			}
		}
	}

	return printOut;
}

export function printAsCSSVariables(variables: Record<string, string>) {
	return Object.entries(variables).map(
		([key, value]) => `--${key}:${value.replace(/\$\.([A-z0-9\-]+)/g, `var(--$1)`)};`
	).join(' ');
}