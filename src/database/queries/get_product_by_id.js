const dbConnection = require('../db_connection')

const getProductByID = id => {
  return dbConnection
    .query('Select * from product where id = $1', [id])
    .then(res => res.rows)
    .catch(err => err)
}

module.exports = getProductByID
