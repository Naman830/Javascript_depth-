// [with] statement actually creates a whole new lexical scope out of thin air, from the object you pass to it.

function foo(obj) {
  with (obj) {
    a = 2;
  }
}

var o1 = {
  a: 3,
};

var o2 = {
  b: 3,
};

foo(o1);
console.log(o1.a); // 2

foo(o2);
console.log(o2.a); // undefined

console.log(a); // 2 -- Oops, leaked global!

// In addition to being a bad idea to use, both eval(..) and with are affected (restricted) by Strict Mode. with is outright disallowed, whereas various forms of indirect or unsafe eval(..) are disallowed while retaining the core functionality.

// =========================================================
// =========================================================
// =========================================================
// SHOULD WE USE EVAL OR WITH IN OUR CODE ANSWER IS--- NO here's why

// Your code will almost certainly tend to run slower simply by the fact that you include an eval(..) or with anywhere in the code. No matter how smart the Engine may be about trying to limit the side-effects of these pessimistic assumptions, there's no getting around the fact that without the optimizations, code runs slower.
