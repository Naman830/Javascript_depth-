// IIFEs — Immediately Invoked Function Expressions

// Sometimes you want a scope bubble, but don't want to pollute the enclosing scope with a function name. The IIFE pattern solves this:

var a = 2;

// Named function pollutes outer scope:
function foo() {
  var a = 3;
  console.log(a);
}
foo(); // 3
console.log(a); // 2 — ok, but 'foo' still exists in outer scope

// IIFE: function expression executed immediately — NO name pollution!
(function IIFE() {
  var a = 3;
  console.log(a); // 3
})(); // ← immediately invoked

console.log(a); // 2 — outer 'a' untouched, 'IIFE' name doesn't exist here
