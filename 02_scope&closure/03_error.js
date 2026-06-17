// RHS: CODE Component
// LHS: Memory Compoents

//1. ReferenceError: RHS lookup fails — variable never declared anywhere in any scope.
//2. TypeError: RHS lookup succeeds, but you do something illegal with the value (e.g. call a non-function).
// 3. Auto-global (non-strict) LHS lookup fails in non-strict mode — JS silently creates a global variable!
// 4. ReferenceError (strict) LHS lookup fails in strict mode — throws an error. Always use strict mode!

// ===============================================================
// ===============================================================
// ===============================================================

// Non-strict mode: LHS failure creates accidental global
function foo() {
  x = 5; // LHS for 'x' — x not declared ANYWHERE!
  // Without strict mode: JS creates window.x = 5 silently 😱
}
foo();
console.log(x); // 5 — polluted the global scope!

// RHS failure: ReferenceError
console.log(y); // ReferenceError: y is not defined
