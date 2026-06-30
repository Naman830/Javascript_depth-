// Function called as a method of an object. this = that object.

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo, // foo is a reference — obj doesn't 'own' foo, it just references it
};

obj.foo(); // 2 — 'this' is obj because obj 'owns' this call

// Only the last object in a chain matters:
var obj1 = {
  a: 2,
  obj2: {
    a: 42,
    foo: foo,
  },
};

obj1.obj2.foo(); // 42 — 'this' is obj2, not obj1

// Simple without refrence of this keyword shows undefined

// ⚠️ IMPLICIT LOSS — the most common bug:
var bar = obj.foo; // bar is now just a reference to foo itself
var a = "oops, global";
bar(); // "oops, global" — bar() is a plain call, default binding applies!

// Also happens with callbacks:
setTimeout(obj.foo, 100); // "oops, global" — setTimeout calls it as plain function
