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
