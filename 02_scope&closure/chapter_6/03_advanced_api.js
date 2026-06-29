// Module that can modify its own public API!
var foo = (function Module(id) {
  function change() {
    publicAPI.identify = identify2; // swap out a public method
  }
  function identify1() {
    console.log(id);
  }
  function identify2() {
    console.log(id.toUpperCase());
  }

  var publicAPI = {
    change: change,
    // this is main focus that first function call must start with our identity 1
    identify: identify1, // starts with identify1
  };
  return publicAPI;
})("foo module");

foo.identify(); // "foo module"
foo.change(); // swap identify1 for identify2
foo.identify(); // "FOO MODULE" — same method name, different behavior!
