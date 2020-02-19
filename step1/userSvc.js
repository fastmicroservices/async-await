const users = require('../users')

function sleepSomeBusy() {
  while (Math.random() < 0.99999997) { ; }
}

function authenticate(name, password) {
  let candidate = users[name]
  sleepSomeBusy()
  if (candidate && candidate.password === password) {
    candidate.userName = name
    return candidate
  }
  throw 'User name or password are incorrect'
}

function describe(user) {
  sleepSomeBusy()
  return "@" + user.userName + " (" + user.name + ")"
}

module.exports = { authenticate, describe }