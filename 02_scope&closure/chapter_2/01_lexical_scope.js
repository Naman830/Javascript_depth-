// Lexical scope means scope is determined by where you write your code, not where you run it. The JS engine locks in scope boundaries when it's lexing (reading) your code — before execution ever begins.

//BUBBLE 2 starts
function foo(a) {
  var b = a * 2;

  // BUBBLE 3 starts
  function bar(c) {
    console.log(a, b, c); // can access ALL: a(B2), b(B2), c(B3)
  } // ← BUBBLE 3 ends

  bar(b * 3);
} // ← BUBBLE 2 ends

// BUBBLE 1 = global: only 'foo' lives here

foo(2); // logs: 2, 4, 12

// The key rule: scope lookup stops at the first match
