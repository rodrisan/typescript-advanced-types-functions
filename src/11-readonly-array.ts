// ReadonlyArray

// const numbers: number[] = [1,3,4,423,44];
const numbers: ReadonlyArray<number>= [1,3,4,423,44];

// numbers.push(1); // It can't be possible, it is readonly.
// numbers.pop(); // It can't be possible, it is readonly.
// numbers.unshift(3); // It can't be possible, it is readonly.
numbers.filter(() => {});
numbers.reduce(() => 0);
numbers.map(() => 0);
