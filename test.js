// console.log('Starting');

// try {
//   setTimeout(() => {
//     throw new Error("yo I'm broken, handle with care")
//   }, 2000);  
// } catch(error) {
//   console.log(error.message)
// }

// console.log('Stopping');


// console.log('Starting');

//   setTimeout(() => {
//     throw new Error("yo I'm broken, handle with care")
//   }, 2000);

// console.log('Stopping');

try{
  console.log("hello");
  throw "Javelin";
} catch (err) {
  console.log(err)
}
console.log("goodbye");
