const { checkUserEmail, checkUserPassword } = require('../database/queries/checkUserInfo.js')
const bcrypt = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const secret = process.env.SECRET
const alert = require('alert-node')

const { checkIfLogin } = require('./checkIfLogin.js')

exports.getLoginInfo = (request, response, next) => {
  const { email } = request.body
  const { password } = request.body
  console.log('email', email)
  console.log('password', password)
  checkUserEmail(email).then(result => {
    if (!checkIfLogin) {
      // eslint-disable-next-line no-lone-blocks
      { if (result.length) {
        bcrypt.compare(
          password,
          result[0].password,
          (hashErr, passwordsMatch) => {
            if (hashErr) {
              next(hashErr)
            } else if (passwordsMatch) {
              const userInformation = { login: true, name: result[0].name }

              const token = sign(userInformation, secret)
              response.writeHead(302, {
                Location: '/',
                'Set-Cookie': 'token=' + token + `;Max-Age=${110000}`
              })
              response.end()
            } else {
              alert('incorrect password')
              response.writeHead(302, {
                location: '/login'
              })
              response.end()
            }
          }).catch(err => response.json(err))
        checkUserPassword(password).then(result => response.json(result)).catch(err => response.json(err))
      } }
    }
  })

  const serverError = (err, response) => {
    response.writeHead(500, 'Content-Type:text/html')
    response.end('<h1>Sorry, there was a problem loading the homepage</h1>')
  }
}
