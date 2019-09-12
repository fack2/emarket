const dbConnection = require('../db_connection')

const register = (name, password, phone, address, email) => {
  return dbConnection
    .query(
      'INSERT INTO "user" (name, password, phone, address, email) VALUES ($1, $2, $3, $4, $5)',
      [name, password, phone, address, email]
    )
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err, 'queries/register.js')
      return err
    })
}

module.exports = register
