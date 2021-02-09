const add = require('./add.js');

console.log('add: ', add);

function greet(name) {
  console.log("Hello there, " + name + "!");
}

greet("dave");

console.log(add(10,20));
