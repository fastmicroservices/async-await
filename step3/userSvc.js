const users = require('../users')

function sleepSome() {
  return new Promise(resolve =>
    setTimeout(resolve, 400 + Math.random() * 3000))
}

function authenticate(name, password) {
  return sleepSome().then(() => {
    let candidate = users[name]
    if (candidate && candidate.password === password) {
      candidate.userName = name
      return candidate
    }
    throw 'User name or password are incorrect'
  })
}

function describe(user) {
  return sleepSome().then(() => 
    "@" + user.userName + " (" + user.name + ")")
}

module.exports = { authenticate, describe }