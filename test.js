// function toUppercase(string) {
//   if (typeof string !== "string") {
//     throw TypeError("Wrong type given, should be a string");
//   }
//   return string.toUpperCase();
// }

// toUppercase(4);


function toUppercase(string) {
  if (typeof string !== "string") {
    throw TypeError("Wrong type given, should be a string");
  }
  return string.toUpperCase();
}

function trycatch(string) {
  try {
    toUppercase(string)
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("thats it folks...");
  }
}

trycatch(4);