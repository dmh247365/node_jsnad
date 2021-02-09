function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}


// module.exports = function add(a, b) {
//   return a + b;
// }

// module.exports = function subtract(a, b) {
//   return a - b;
// }


// console.log(add(1, 2));

module.exports = add;
// module.exports = subtract;

// exports.add = add;
// exports.subract = subtract;
// exports = add
// module.exports = {
//   add,
//   subtract
// };

console.log(module);
console.log('exports: ', exports)