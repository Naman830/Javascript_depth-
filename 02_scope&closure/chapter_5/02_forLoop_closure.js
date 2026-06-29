// This is one of the most common JavaScript interview questions. Understanding WHY this fails (and how to fix it) shows you truly understand closures.

// 1. It is Broken due to using var

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i); // What do you expect?
//   }, i * 1000);
// }

// Expected: 1, 2, 3, 4, 5 (one per second)
// Actual:   6, 6, 6, 6, 6
//
// WHY? All 5 timer functions close over the SAME 'i' variable.
// 'var i' is function-scoped — there's only ONE 'i' in the whole loop.
// By the time timers run, the loop is done and i=6.

// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================

// 2. Fix: IIFE

// for (var i = 1; i <= 5; i++) {
//   (function (j) {
//     // IIFE creates a NEW scope per iteration, captures 'i' as 'j'
//     setTimeout(function timer() {
//       console.log(j); // j is a fresh copy in EACH iteration's scope
//     }, j * 1000);
//   })(i); // pass current i as argument
// }

// Now logs: 1, 2, 3, 4, 5 ✅
// Why? Each IIFE creates its own scope with its own 'j'.
// Each timer closes over a different 'j'.

// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================

for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i); // logs: 1, 2, 3, 4, 5 ✅
  }, i * 1000);
}

// Why does let fix it? ES6 spec says: let in a for-loop head
// creates a NEW binding of 'i' for EACH iteration.
// It's as if a new 'let i' is declared every loop cycle.
// Each timer closes over its OWN 'i' — different ones!
// This is the modern, clean solution. Prefer this always.
