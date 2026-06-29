// Function DECLARATIONS are fully hoisted (name AND body)
foo(); // "hello" — works even before the declaration!
function foo() {
  console.log("hello");
}

// Function EXPRESSIONS are NOT hoisted (only the var name is)
bar(); // TypeError: bar is not a function
// 'bar' is hoisted as undefined, then you try to call undefined()
var bar = function () {
  console.log("hi");
};

// Arrow functions are also expressions — same behavior as above
baz(); // TypeError: baz is not a function
var baz = () => console.log("hey");

// ============================================================================
// ============================================================================
// ============================================================================
// ============================================================================
// ============================================================================

// 1. function first

// FUNCTIONS are hoisted before VARIABLES
foo(); // 1 (not 2!) — function declaration wins over var

var foo; // ignored — function already claimed 'foo'
function foo() {
  console.log(1);
}
foo = function () {
  console.log(2);
};

// What engine actually does:
// function foo() { ... }  ← hoisted first
// var foo;                 ← duplicate, ignored
// foo(); → 1
// foo = function(){...}; → now foo is reassigned

// Duplicate FUNCTION declarations: last one wins
bar(); // 3 — the SECOND function declaration won
function bar() {
  console.log(1);
}
function bar() {
  console.log(3);
} // overrides previous
