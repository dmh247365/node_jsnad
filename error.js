// const dns = require('dns');

// try {
//   dns.lookup('.....juniordevelopercentracom2', (err, value) => {
//     if(err) {
//       console.log("an error has occurred!..");
//       return;
//     }
//     console.log(value);
//   });
// } catch(err) {
//   console.log("Im spartacus Error!...")
// }
// console.log('here at the end!..');

const dns = require('dns');

try {
dns.lookup('.....juniordevelopercentracom2', (err, value) => {
    console.log(value);
  });
} catch(err) {
  console.log("Im spartacus Error!...")
}