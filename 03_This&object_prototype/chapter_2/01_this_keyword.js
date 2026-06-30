// this in global is work as a global object and in different urntime enviroment you see different global object in js it shows window
console.log(this);

// this keyword works different in strict and non-strict mode and value depends on it
// inside function
// this object in function is different
function x() {
  //"use strict";
  console.log(this);
}
x();
