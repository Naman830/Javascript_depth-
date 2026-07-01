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

const student_1 = {
  name: "Naman",
  x: function () {
    const printName = () => {
      console.log(this.name);
    };
    printName();
  },
};

// This student_1 will show the name Naman because now this is lexical scope of student_1
student_1.x();
