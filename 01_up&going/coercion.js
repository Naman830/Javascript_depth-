// Coercion comes in two forms in JavaScript: explicit and implicit.

//1. Explicit coercion is simply that you can see obviously from the code that a conversion from one type to another will occur

var a = "42";
var b = Number(a);
console.log(a); // "42"
console.log(b); // 42 -- the number!

// 2. implicit coercion is when the type conversion can happen as more of a non- obvious side effect of some other operation.

var a = "42";
var b = a * 5; // "42" implicitly coerced to 42 here
console.log(a); // "42"
console.log(b); // 42 -> 210 -- the number!
