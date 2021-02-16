function myFunc() {
  return new Promise((resolve, reject) => {
    // resolve("Success!...")
    reject("Something went wrong!...")
  })
}

myFunc()
.then((kingKenny) => { console.log(kingKenny)})
.catch((blah) => { console.log(blah)});

// function myFunc() {
//   return new Promise((resolve, reject) => {
//     // resolve("Success!...")
//     reject(new TypeError("Something went wrong!..."))
//   })
// }

// myFunc()
// .then((kingKenny) => { console.log(kingKenny)})
// .catch((blah) => { console.log(blah.name)});

