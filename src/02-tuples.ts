const prices: (number | string)[] = [1,1,3,2,3,4,4, 'd'];

// Tuples

let user: [string, number, boolean];
// user = ['rod', 19];
// user = [18, 23];
// user = [];
// user = ['text'];
// user = ['text', 19];
// user = ['text', 0, 19];
user = ['text', 18, true];

// Destructuring of a Tuple
const [username, age] = user
console.log(username);
console.log(age);
