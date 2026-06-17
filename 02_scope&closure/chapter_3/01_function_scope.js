// A function scope is like a private room — only people in that room can see what's inside. Block scope (with let / const) is like a smaller box inside the room — even more private. Before ES6, JavaScript only had rooms, not boxes.

// Functions create scope (Hiding in Plain Scope) [It is like oops concept data hiding]
// The Principle of Least Privilege says: expose only what is minimally necessary, hide everything else. Functions are the tool for this.

// BAD: doSomethingElse and b are exposed globally — dangerous!
function doSomething(a) {
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}
function doSomethingElse(a) {
  return a - 1;
}
var b;

// GOOD: hide private details inside the function
function doSomethingBetter(a) {
  function doSomethingElse(a) {
    return a - 1;
  } // private!
  var b; // private!
  b = a + doSomethingElse(a * 2);
  console.log(b * 3); // 15 for a=2
}
doSomethingBetter(2);
