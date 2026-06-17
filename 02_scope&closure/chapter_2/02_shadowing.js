// When an inner scope has a variable with the same name as an outer scope, the inner one shadows the outer one. The lookup stops at the inner one — the outer is invisible (but still exists).

var name = "Global";

function outer() {
  var name = "Outer"; // shadows global 'name'

  function inner() {
    var name = "Inner"; // shadows outer 'name'
    console.log(name); // "Inner" — lookup stops here
  }

  inner();
  console.log(name); // "Outer" — inner's shadow not seen here
}

outer();
console.log(name); // "Global"
