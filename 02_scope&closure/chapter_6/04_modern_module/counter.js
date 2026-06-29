// ES6 modules use import/export syntax
// Each file has its own private module scope automatically

// counter.js
var count = 0; // private to this module
export function increment() {
  count++;
}
export function getCount() {
  return count;
}
