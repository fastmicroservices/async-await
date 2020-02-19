const UserSvc = require('./userSvc')

const inputData = [
  { user: 'john', password: '123' },
  { user: 'angelina', password: 'pass2' },
  { user: 'sean', password: 'pass4' },
  { user: 'nicole', password: 'pass1' },
  { user: 'nicole', password: 'pass3' }
]

inputData.forEach((input, index) => {
  UserSvc.authenticate(
    input.user,
    input.password,
    u => {
      UserSvc.describe(u,
        description => console.log(index + "> " + description))
    },
    e => console.log(index + "> !" + e))
})
