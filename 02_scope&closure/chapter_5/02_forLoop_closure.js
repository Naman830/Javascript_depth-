// This is one of the most common JavaScript interview questions. Understanding WHY this fails (and how to fix it) shows you truly understand closures.

// 1. It is Broken due to using var

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i); // What do you expect?
  }, i * 1000);
}
// Expected: 1, 2, 3, 4, 5 (one per second)
// Actual:   6, 6, 6, 6, 6
//
// WHY? All 5 timer functions close over the SAME 'i' variable.
// 'var i' is function-scoped — there's only ONE 'i' in the whole loop.
// By the time timers run, the loop is done and i=6.
