// When a function is created, it picks up a backpack — it fills it with references to all the variables in its surrounding scope. When the function travels to a different place and executes, it brings its backpack. No matter where it runs, it can always reach into the backpack and find those variables. That backpack is a closure.

// Kyle Simpson's definition: "Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope."

// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================

// The closure that powers the counter above:
function makeCounter() {
  var count = 0; // private — lives in makeCounter's scope

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log(count);
    },
  };
}

var counter = makeCounter();
// makeCounter() has RETURNED — its scope "should" be gone...
// But closures keep it alive!
counter.increment(); // 1 — count is still accessible!
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.count); // undefined — count is private! 🔒

// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
