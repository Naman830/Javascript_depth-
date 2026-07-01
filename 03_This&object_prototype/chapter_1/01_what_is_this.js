// 👩‍🍳 Real-world analogy — the chef's 'this'
// Imagine a chef who says "I'll season this dish." The word "this" doesn't mean a specific dish permanently — it means whatever dish they're currently working on. If they move to a different dish, "this" now refers to that one. this in JavaScript works exactly like that: it refers to the context of the current call, not a fixed thing.

// Why does this exist at all?
// Consider you want one function to work with multiple objects. Without this, you'd need to pass the context explicitly every time:

// Without this — you must pass context manually every time
function identify(context) {
  return context.name.toUpperCase();
}

var me = { name: "Kyle" };
var you = { name: "Reader" };

console.log(identify(me)); // "KYLE"

// With this — cleaner, more reusable
function identify() {
  return this.name.toUpperCase(); // 'this' = whatever object calls me
}

console.log(identify(me)); // "KYLE"

// Same one function, works for any object!
// The point: this lets one function work across many objects without hard-coding any object name inside it. It's a reusability mechanism.

// ===============================================================
// ===============================================================
// ===============================================================

// this in global is work as a global object and in different urntime enviroment you see different global object in js it shows window
console.log(this);

// this keyword works different in strict and non-strict mode and value depends on it

// Function inside object called method
//let name = {
//  x: function () {
//    console.log("heelo");
//  },
//};
//
//name.x();
