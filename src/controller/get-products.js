const getProduct = require('../database/queries/get-all-product.js')

exports.getAllProduct = (request, response) => {
  getProduct()
    .then(result => response.json(result))
    .catch(err => response.json(err))
}
