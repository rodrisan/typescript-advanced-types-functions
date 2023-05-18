// Rod => ['R', 'o', 'd'];
// ['R', 'o', 'd'] => Rod;
// Overload works with regular functions.

// This is the overload
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // array
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}


const rtaArray = parseStr('Rod');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('Rod', rtaArray);

const rtaString = parseStr(['R', 'o', 'd']);
rtaString.toLowerCase();
// if (typeof rtaString === 'string') {
//   rtaString.toLowerCase();
// }
console.log("['R', 'o', 'd']", rtaString);

const rtaNumber = parseStr(12); // bool
