console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) {
  setTimeout(() => {
    return { id: id, name: 'Elvis'};
  },2000)
}