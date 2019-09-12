const register = require('../database/queries/register')
const bcrypt = require('bcryptjs')

exports.post = (req, res, next) => {
  const { username, password, phone, address, email } = req.body

  bcrypt
    .hash(password, 8)
    .then(hashedPassword => {
      register(username, hashedPassword, phone, address, email)
        .then(result => {
          res.end()
        })
        .catch(err => {
          console.log(err, 'controler/register.js')
          next(err)
        })
    })
    .catch(err => {
      console.log('hash err')
      next(err)
    })
}
