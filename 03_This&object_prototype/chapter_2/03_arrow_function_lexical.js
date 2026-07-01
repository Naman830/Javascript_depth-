/*
SHORT SUMMARY 

Normal Function
-> Has its own 'this'.
-> 'this' depends on HOW the function is called.

Arrow Function
-> Does NOT have its own 'this'.
-> It copies 'this' from where it is CREATED.
-> call(), apply(), bind(), and new cannot change it.
*/

// ============================================================
// ============================================================
// ============================================================
// ============================================================

// This arrow function is created inside the global scope.

// So it takes the global object's 'this'
// (window in browsers).

const student = {
  name: "Naman",

  printName: () => {
    console.log(this);
  },
};

// Calling through student DOES NOT matter.
// Arrow functions don't care who called them.
student.printName();
