/*
The key insight: compilation happens first

When you write var a = 2;, the JS engine sees it as TWO separate things: 
var a; (declaration — done at compile time) 
a = 2; (assignment — done at execution time).
*/

// What you WRITE:
a = 2;
var a;
console.log(a); // What do you expect? undefined or 2?

// What the ENGINE sees (after hoisting):
var a; // ← declaration hoisted to top
a = 2; // ← assignment stays in place
console.log(a); // 2 — because a was declared before assignment ran

// Another example:
console.log(b); // undefined (NOT ReferenceError!) — var b is hoisted
var b = 5;
console.log(b); // 5
