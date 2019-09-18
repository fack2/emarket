const getcategoryProducts = require('../database/queries/get_category_products')

exports.getAllcategoryProduct = (request, response) => {
  getcategoryProducts(request.params.category_id)
    .then(result => response.json(result))
    .catch(err => response.json(err))
}
