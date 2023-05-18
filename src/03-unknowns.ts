let anyVar: any;
anyVar = true;
anyVar = '';
anyVar = 9;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;
anyVar.doSth(); // no types validation.

let unknownVar: unknown;
unknownVar = true;
unknownVar = '';
unknownVar = 9;
unknownVar = [];
unknownVar = {};

// Using unknown type if forces me to verify it.
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNew2: boolean = unknownVar;
}

// It can be used as function return type.
const parse = (str: string): unknown => {
  return JSON.parse(str);
}
