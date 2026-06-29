// Wrap in IIFE when you only need ONE instance (singleton)
var myModule = (function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(" ! "));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
})(); // ← immediately invoked: only ONE instance ever created

myModule.doSomething(); // "cool"
myModule.doSomething(); // "cool"
myModule.doSomething(); // "cool"
myModule.doSomething(); // "cool"

// Compare: factory creates multiple instances
var m1 = CoolModule(); // separate instance
var m2 = CoolModule(); // another separate instance
// m1 and m2 have completely independent private data
