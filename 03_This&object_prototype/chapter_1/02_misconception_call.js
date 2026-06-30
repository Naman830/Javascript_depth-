// Misconception #1: this refers to the function itself
// People often think "inside a function, this means me (the function)." This is wrong. Let's see why:

// WRONG assumption: this.count++ tracks how many times foo was called
function foo(num) {
  console.log("foo: " + num);
  this.count++; // people think 'this' is 'foo' here — it's NOT
}

foo.count = 0; // we add a .count property to the foo function object

for (var i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i); // called 4 times (i=6,7,8,9)
  }
}

console.log(foo.count); // 0 -- WTF?!

// this.count++ was incrementing a GLOBAL variable called count, not foo.count!
// foo.count is still 0 because 'this' inside foo() never pointed at foo

// CORRECT approach: use call() to force this to point at foo itself
for (var i = 0; i < 10; i++) {
  if (i > 5) {
    foo.call(foo, i); // now 'this' IS foo
  }
}
console.log(foo.count); // 4 ✓

// 📌 Note: When foo() is called normally, this inside it points to the global object (or undefined in strict mode) — not to foo itself. The function and its this binding are two completely separate things.
