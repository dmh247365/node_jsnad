function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(add(1, 2));

// module.exports = add;
// module.exports = subtract;

module.exports = {
  add,
  subtract
};

console.log(module);