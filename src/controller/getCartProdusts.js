const getCartProducts = require('../database/queries/getCartProducts')

exports.getProducts = (request, response) => {
  const orderID = 1
  getCartProducts(orderID)
    .then(result => response.json(result))
    .catch(err => response.json(err))
}
