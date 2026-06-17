// Garbage collection benefit of block scope
// Block scope isn't just about hiding variables — it also helps the JS engine free memory sooner:

function process(data) {
  /* work with data */
}

// BAD: someReallyBigData can't be collected while click handler exists
var someReallyBigData = {
  /* huge object */
};

process(someReallyBigData);
document.getElementById("btn").addEventListener("click", function () {
  console.log("clicked"); // this closure may keep big data alive!
});

// GOOD: block scope signals to engine that bigData can be collected
{
  let someReallyBigData = {
    /* huge object */
  };
  process(someReallyBigData);
} // ← engine knows bigData is done here
