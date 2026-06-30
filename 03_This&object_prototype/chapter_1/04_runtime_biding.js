// this is not an author-time binding (set when you write the code). It is a runtime binding — determined entirely by how and where the function is called, not where it was defined.

// IN SHORT
// WRONG mental model: this is fixed when the function is defined
// CORRECT mental model: this is determined at the moment of calling

function greet() {
  console.log("Hello, " + this.name);
}

var alice = { name: "Alice" };
var bob = { name: "Bob" };

greet.call(alice); // "Hello, Alice" — this = alice AT CALL TIME
greet.call(bob); // "Hello, Bob"   — this = bob AT CALL TIME

// Same function, different 'this' each time depending on how it's called
