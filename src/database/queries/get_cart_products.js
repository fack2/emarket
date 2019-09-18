const dbConnection = require('../db_connection')

const getCartProducts = (orderID) => {
  return dbConnection.query('SELECT name,price,sum(quantity) as quantity, img, sum(total) as total,product.id as productID FROM "orderItem" inner Join "product" on (productID = "product".id ) where orderID = $1 GROUP BY "product".id ', [orderID])
    .then(res => res.rows)
    .catch(err => err)
}
module.exports = getCartProducts
