// JavaScript only had function scope. Variables declared with var inside an if-block or for-loop leaked out to the enclosing function! ES6 fixed this with let and const.

// 1.Var leaks

/*
for (var i = 0; i < 3; i++) {
  // 'i' is NOT block-scoped — it belongs to the outer function!
}
console.log(i); // 3 — 'i' leaked out of the loop! 😱

if (true) {
  var secret = "not so secret";
}
console.log(secret); // "not so secret" — leaked!
*/

// ================================================================
// ================================================================
// ================================================================

// 2. let- block scope

/*
for (let i = 0; i < 3; i++) {
  // 'i' IS block-scoped — it dies when the loop ends
}
console.log(i); // → ReferenceError: i is not defined ✅

if (true) {
  let secret = "actually secret";
  console.log(secret); // "actually secret" ✅
}
console.log(secret); //→ ReferenceError ✅

// BONUS: let in for-loop creates a NEW binding each iteration
// This is CRUCIAL for closures (see Chapter 5!)

*/
