// console.log('Before');
// const user = getUser(1);
// console.log(user);
// console.log('After');

// function getUser(id) {
//   setTimeout(() => {
//     return { id: id, name: 'Elvis'};
//   },2000)
// }


console.log('Before');
getUser(1, (err, user) => {
  if (err) {
    console.log('oops something amiss');
  } else {
  console.log('User ', user);
    getRepo(user.name, (repo) => {
      console.log(`${user.name}`, repo);
    })
  }
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    callback(undefined,{ id: id, name: 'Elvis'});
  }, 2000)
}

function getRepo(username, callback) {
  setTimeout(() => {
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000)
}
