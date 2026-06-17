// ⚠️ Bad Practice — Never Use These
// Two mechanisms can modify lexical scope at runtime. The JS engine cannot optimize code that uses them — your code runs significantly slower. Kyle Simpson calls them "cheating" lexical scope.

// 1. eval()
// eval() treats a string as if it was written as real code
function foo(str, a) {
  eval(str); // "var b = 3;" is injected here at runtime
  console.log(a, b); // b = 3 (from eval), NOT b = 2 (from outer)
}
var b = 2;
foo("var b = 3;", 1); // logs: 1, 3
// eval modified foo's lexical scope at runtime!
// The engine can't pre-optimize because it doesn't know what eval will inject

// ==================================================================
// ==================================================================
// ==================================================================

// 2. with
// with creates a NEW lexical scope from an object at runtime
function foo(obj) {
  with (obj) {
    // obj's properties become "identifiers" in this scope
    a = 2; // if obj.a exists → sets it. If not...
  }
}
var o1 = { a: 3 };
var o2 = { b: 3 }; // no 'a' property!

foo(o1);
console.log(o1.a); // 2 — OK
foo(o2);
console.log(o2.a); // undefined — 'a' wasn't on o2!
console.log(a); // 2 — LEAKED TO GLOBAL! 😱

// Dangerous side effect
// When with can't find a property in the object, it falls through to normal scope lookup — and if not found anywhere, creates a global! This is extremely surprising behavior.
