// apply() works exactly like call().
// The only difference is that arguments are passed inside an array.

// First object
const student = {
  name: "Naman",

  printName: function (city, country) {
    console.log(this.name + " " + city + " " + country);
  },
};

// Second object
const student_2 = {
  name: "Kangna",
};

// Normal function call
student.printName("Panipat", "India");

// apply() -> Use student's function inside student_2
// We are changing the value of 'this' to student_2.
// Extra arguments are passed as an ARRAY.
student.printName.apply(student_2, ["Delhi", "India"]);
