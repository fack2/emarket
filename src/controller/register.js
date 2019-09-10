const register = require('../database/queries/register')

exports.post = (req, res) => {
  console.log('00000000000000000000000')
  const { username, password, phone, address } = req.body
  register(username, password, phone, address)
    .then(result => {
      console.log('1111111111111111')
      res.redirect('/')
    })
    .catch(err => console.log(err, 'controler/register.js'))
}
