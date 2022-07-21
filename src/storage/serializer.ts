export type TPseudoProtocolSerializer = {
	name : string;
	specificity : number;
	canSerialize(value : unknown) : boolean;
	serialize(value : unknown) : string;
	canDesserialize(value : string) : boolean;
	deserialize(value : string) : unknown;
}

export const Specificity = {
	Primitive : 0,
	PrimitiveSubtype : 10,
	Interface : 100,
	ClassInstance : 1000,
};

const BooleanSerializer : TPseudoProtocolSerializer = {
	name : 'boolean_serializer',
	specificity : Specificity.Primitive,
	canDesserialize: (v) => v.indexOf('boolean://') === 0,
	canSerialize: (v) => typeof v === 'boolean',
	deserialize : (v) => Boolean(v.substring('boolean://'.length -1)),
	serialize: (v) => `boolean://${String(v)}`
};

const StringSerializer : TPseudoProtocolSerializer = {
	name : 'string_serializer',
	specificity : Specificity.Primitive,
	canDesserialize: (v) => v.indexOf('string://') === 0,
	canSerialize: (v) => typeof v === 'string',
	deserialize : (v) => String(v.substring('boolean://'.length -1)),
	serialize: (v) => `string://${String(v)}`
};

const NumberSerializer: TPseudoProtocolSerializer = {
	name: 'number_serializer',
	specificity: Specificity.Primitive,
	canDesserialize: (v) => v.indexOf('number://') === 0,
	canSerialize: (v) => typeof v === 'number',
	deserialize: (v) => String(v.substring('number://'.length - 1)),
	serialize: (v) => `number://${String(v)}`
};

const ArraySerializer: TPseudoProtocolSerializer = {
	name: 'array_serializer',
	specificity: Specificity.PrimitiveSubtype,
	canDesserialize: (v) => v.indexOf('array://') === 0,
	canSerialize: (v) => typeof v === 'object' && v != null && Array.isArray(v),
	deserialize: (v) => (JSON.parse(v.substring('array://'.length - 1)) as Array<any>).map(vI => deserialize(vI)),
	serialize: (v) => `array://${JSON.stringify((v as Array<any>).map(vI => serialize(vI)))}`
};

// TODO: iterate through each object value and try to "serialize/deserealize" it, 
const ObjectSerializer: TPseudoProtocolSerializer = {
	name: 'object_serializer',
	specificity: Specificity.PrimitiveSubtype,
	canDesserialize: (v) => v.indexOf('object://') === 0,
	canSerialize: (v) => typeof v === 'object' && v != null && !Array.isArray(v),
	deserialize: (v) => JSON.parse(v.substring('object://'.length - 1)),
	serialize: (v) => `object://${JSON.stringify(v)}`
};

const DateSerializer: TPseudoProtocolSerializer = {
	name: 'date_serializer',
	specificity: Specificity.ClassInstance,
	canDesserialize: (v) => v.indexOf('date://') === 0,
	canSerialize: (v) => v instanceof Date,
	deserialize: (v) => new Date(Number(v.substring('date://'.length - 1))),
	serialize: (v) => `date://${(v as Date).getTime()}`
};

let Serializers : TPseudoProtocolSerializer[] =  [
	BooleanSerializer,
	StringSerializer,
	NumberSerializer,
	ArraySerializer,
	ObjectSerializer,
	DateSerializer
];

export function addFormatToSerializer(s : TPseudoProtocolSerializer) {
	Serializers.push(s);
}

export function removeFormatFromSerializer(name : string) {
	Serializers = Serializers.filter(s => s.name !== name);
}

export function orderBySpecificity<T extends {specificity : number}>(o : T[]) : T[] {
	o.sort((a, b) => a.specificity > b.specificity ? -1 : 1);
	return o;
}

export function serialize(v : unknown) : string {
	let orderedSerializers = orderBySpecificity(Serializers);
	
	for(let serializer of orderedSerializers) {
		if(serializer.canSerialize(v)) {
			return serializer.serialize(v);
		}
	}

	return JSON.stringify(v);

}

export function deserialize(v : string) : unknown {
	let orderedSerializers = orderBySpecificity(Serializers);
	
	for(let serializer of orderedSerializers) {
		if(serializer.canDesserialize(v)) {
			return serializer.deserialize(v);
		}
	}

	return JSON.parse(v);
}