// Rod => ['R', 'o', 'd'];
// ['R', 'o', 'd'] => Rod;
// Overload works with regular functions.

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseStr('Rod');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('Rod', rtaArray);

const rtaString = parseStr(['R', 'o', 'd']);
if (typeof rtaString === 'string') {
  rtaString.toLowerCase();
}
console.log("['R', 'o', 'd']", rtaString);
