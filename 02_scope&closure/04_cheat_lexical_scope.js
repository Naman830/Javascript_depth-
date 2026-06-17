// SUMMARY;
// Two mechanisms in JavaScript can "cheat" lexical scope: eval(..) and with . The former can modify existing lexical scope (at runtime) by evaluating a string of "code" which has one or more declarations in it. The latter essentially creates a whole new lexical scope (again, at runtime) by treating an object reference as a "scope" and that object's properties as scoped identifiers. The downside to these mechanisms is that it defeats the Engine's ability to perform compile- time optimizations regarding scope look-up, because the Engine has to assume pessimistically that such optimizations will be invalid. Code will run slower as a result of using either feature. Don't use them.

// =========================================================
// =========================================================
// =========================================================
function foo(str, a) {
  eval(str);
  console.log(a, b);
}

var b = 2;

foo("var b = 3;", 1); // 1, 3

/*
eval() takes a string and treats it like real JavaScript code.

In simple terms, it is like writing new code while the program is already running.

Normally lexical scope is fixed when we write the code, but eval() cheats. It can add new variables or functions into the current scope at runtime.

Here eval() runs "var b = 3;" inside foo().

So a new variable b is created inside foo() scope. This local b shadows the global b.

When console.log() looks for b, it finds the local b first (3) and does not check the global b (2).

That is why the output is 1, 3 instead of 1, 2.

Note:
In strict mode, eval() gets its own scope. Variables created inside eval() do not affect the outer function scope.

Because eval() changes scope at runtime, JavaScript engines cannot optimize the code properly, so it is slow and should generally be avoided.
*/

// =========================================================
// =========================================================
// =========================================================

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
