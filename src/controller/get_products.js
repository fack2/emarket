const getProduct = require('../database/queries/get_all_product.js')

exports.getAllProduct = (request, response) => {
  getProduct()
    .then(result => response.json(result))
    .catch(err => response.json(err))
}
