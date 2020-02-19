const users = require('../users')

function sleepSome() {
  return new Promise(resolve =>
    setTimeout(resolve, 400 + Math.random() * 3000))
}

async function authenticate(name, password) {
  await sleepSome()
  let candidate = users[name]
  if (candidate && candidate.password === password) {
    candidate.userName = name
    return candidate
  }
  throw 'User name or password are incorrect'
}

async function describe(user) {
  await sleepSome()
  return "@" + user.userName + " (" + user.name + ")"
}

module.exports = { authenticate, describe }