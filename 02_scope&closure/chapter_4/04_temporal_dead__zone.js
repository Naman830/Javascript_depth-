// Function declarations inside if blocks behave inconsistently across environments. Avoid it entirely. Use function expressions inside blocks instead.

// let and const — no hoisting (technically)
// var: hoisted and initialized as undefined
console.log(x); // undefined (not an error)
var x = 10;

// let/const: hoisted but NOT initialized — "Temporal Dead Zone" (TDZ)
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20; // ← y exists in scope from the start of block,
//   but accessing it before this line throws TDZ error
