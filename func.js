// function myFunc() {
//   return new Promise((resolve, reject) => {
//     // resolve("Success!...")
//     reject("Something went wrong!...")
//   })
// }

// myFunc()
// .then((kingKenny) => { console.log(kingKenny)})
// .catch((blah) => { console.log(blah)});

// function myFunc() {
//   return new Promise((resolve, reject) => {
//     // resolve("Success!...")
//     reject(new TypeError("Something went wrong!..."))
//   })
// }

// myFunc()
// .then((kingKenny) => { console.log(kingKenny)})
// .catch((blah) => { 
//   console.log('type of error:- ', blah.name);
//   console.log('error message:- ', blah.message);
// });

// let myPromise = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if( a == 2 ) {
//     resolve('Success');
//   } else {
//     reject('Failed');
//   }
// })

// myPromise
//   .then((message) => {console.log(`In the then - ${message}`)})
//   .catch((message) => {console.log(`In the catch - ${message}`)})





function serverRequest(query, callback) {
  setTimeout(() => {
    let response = query + "full!";
    let errorResponse = new Error ("im an error");
    callback(errorResponse, response);
  }, 2000);
}

function getResults(err, results){
  console.log("err :", err);
  if(err) {
    console.log('oops something went wrong');
  } else {
  console.log("Response from the server: " + results);
  }
}

serverRequest("The glass is half ", getResults);






