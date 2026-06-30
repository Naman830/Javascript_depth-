// Every single time you see this in JavaScript, ask yourself: what is the call-site? [Then apply one of these 4 rules in order.]

// 🕵️ Think like a detective
// Finding what this refers to is detective work. Your evidence is the call-site — the exact line where the function is called (not defined). Look at how the

// The call-stack and call-site
// The call-site is WHERE a function is called, not where it's written.
// Use the call STACK to find it.

function baz() {
  // call-stack: baz
  // call-site of baz: global scope
  bar(); // <-- call-site OF bar
}
function bar() {
  // call-stack: baz → bar
  // call-site of bar: inside baz
  foo(); // <-- call-site OF foo
}
function foo() {
  // call-stack: baz → bar → foo
  // call-site of foo: inside bar
  debugger; // pause here in browser devtools to see the call stack!
}
baz(); // <-- call-site OF bazfunction is being invoked, then match it to one of the four rules below.
