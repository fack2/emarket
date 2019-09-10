const dbConnection = require('../db_connection')

const register = (name, password, phone, address) => {
  return dbConnection
    .query(
      'INSERT INTO "user" (name, password, phone, address) VALUES ($1, $2, $3, $4, $5)',
      [name, password, phone, address]
    )
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

module.exports = register
