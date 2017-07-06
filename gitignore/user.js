const users = [
  {username: 'oresti', email: 'oresti@gmal.com'},
  {username: 'britt', email: 'britt@gmal.com'}
]

function getUser(username) {
  return users.find(function (user){
    return user.username == username
  });
}
module.exports = {
  find: getUser,
  all: users
}
