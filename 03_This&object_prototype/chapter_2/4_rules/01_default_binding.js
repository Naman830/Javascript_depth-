// Plain function call with no decoration. this = global object (or undefined in strict mode).

function foo() {
  console.log(this.a);
}
var a = 2; // global variable
foo(); // 2 — 'this' is the global object

// In strict mode:
function bar() {
  "use strict";
  console.log(this.a);
}
bar(); // TypeError: this is undefined
