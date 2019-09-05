const dbConnection = require('../db_connection')

const addToCart = (userID, productID, quantity, price) => {
  return dbConnection
    .query('Select id from cart where userID = $1 and orderID is null', [
      userID
    ])
    .then(res => {
      return dbConnection
        .query(
          'INSERT INTO "cartItem" (cartID, quantity, productID, total) VALUES ($1, $3, $2, $4 )',
          [res.rows[0].id, productID, quantity, price * quantity]
        )
        .then(res => {
          return res.rows
        })
        .catch(err => {
          return err
        })
    })
}

module.exports = addToCart
