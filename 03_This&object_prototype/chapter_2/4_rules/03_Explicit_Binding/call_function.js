// Using call(), apply(), or bind() to directly specify what 'this' will be.

// This is my first obj
const student = {
  name: "Naman",
  printName: function () {
    console.log(this.name);
  },
};

// This is my second Obj
const student_2 = {
  name: "Kangna",
};

// call() — Now I want to use that printName (student) into student_2 without creating a function in it
student.printName();
// LOOK WE use call() and now we use that fun in it [This is overriding the this value]
student.printName.call(student_2); // value of this = student_2
