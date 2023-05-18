const withoutEnd = () => {
  while (true) {
    console.log('never stops');
  }
}

const fail = (message: string) => {
  throw message;
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'this is a string';
  } else if (Array.isArray(input)){
    return 'this is an array';
  }
  return fail('not match');
}

console.log(example('hi'));
console.log(example([1,2,4,4,5]));
console.log(example(123123)); // this statement stops the execution
console.log(example('hi again after fail'));
