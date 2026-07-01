// bind() does NOT call the function immediately.
// It creates a NEW function with permanently fixed 'this'.

// First object
const student = {
  name: "Naman",

  printName: function (city) {
    console.log(this.name + " lives in " + city);
  },
};

// Second object
const student_2 = {
  name: "Kangna",
};

// bind() creates a NEW function.
// 'this' becomes student_2.
// We can also pre-store arguments.
const print = student.printName.bind(student_2, "Delhi");

// Function still hasn't executed.

// Execute whenever we want.
print();
