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
