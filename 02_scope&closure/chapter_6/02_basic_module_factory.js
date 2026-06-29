function CoolModule() {
  // PRIVATE — not accessible from outside
  var something = "cool";
  var another = [1, 2, 3];

  // These functions close over the private variables
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(" ! "));
  }

  // PUBLIC API — only expose what's needed
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}

var foo = CoolModule(); // creates a module instance
foo.doSomething(); // "cool"
foo.doAnother(); // "1 ! 2 ! 3"
console.log(foo.something); // undefined — private! 🔒
