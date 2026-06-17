function foo(a) {
  console.log(a + b);
}
var b = 2;
foo(2); // 4

/*
Kyle Simpson uses a brilliant metaphor: imagine a tall building. Each floor is a scope. When you look for a variable, you start on your current floor. If not found, take the elevator up one floor. Keep going until you reach the top (global scope) or find it.

Code answers 4 because of lexical scope.

It means a function can access variables from its outer scope. In simple terms, if a variable is not found inside the function, it checks its parent scope. If the parent scope does not have it, then it checks the global scope.

Here, b is not inside foo(), so JavaScript finds it in the global scope and uses its value (2).
*/
