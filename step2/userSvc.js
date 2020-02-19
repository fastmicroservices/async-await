const users = require('../users')

function sleepSome(andThen) {
  setTimeout(andThen, 400 + Math.random() * 3000)
}

function authenticate(name, password, andThen, onError) {
  sleepSome(() => {
    let candidate = users[name]
    if (candidate && candidate.password === password) {
      candidate.userName = name
      return andThen(candidate)
    }
    onError('User name or password are incorrect')
  })
}

function describe(user, andThen) {
  sleepSome(() =>
    andThen("@" + user.userName + " (" + user.name + ")"))
}

module.exports = { authenticate, describe }