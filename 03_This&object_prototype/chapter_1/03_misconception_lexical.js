// Misconception #2: this refers to the function's lexical scope
// Another wrong idea: that this is a bridge between a function's scope and another function's scope. It is not.

function foo() {
  var a = 2;
  this.bar(); // Attempting to call bar() via this — works by accident in loos mode
}

function bar() {
  console.log(this.a); // Hoping to see foo's variable 'a' via 'this'
}

foo(); // undefined — there is NO bridge between lexical scopes via this
// 'this' and lexical scope are completely separate worlds
