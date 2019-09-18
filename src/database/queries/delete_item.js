const dbConnection = require('../db_connection')

const deleteItem = (id, orderID) => {
  return dbConnection
    .query('delete from "orderItem" where productID = $1 and orderID = $2', [id, orderID])
    .then(res => res.rows)
    .catch(err => err)
}

module.exports = deleteItem
