module.exports = function add(a, b) {
  return a + b;
}

module.exports = function subtract(a, b) {
  return a - b;
}

// console.log(add(1, 2));

// exports.add = add;
// exports.subract = subtract;
// exports = add
// module.exports = {
//   add,
//   subtract
// };

console.log(module);
console.log('exports: ', exports)