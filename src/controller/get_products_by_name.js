const getSearchedProducts = require('../database/queries/get_searched_product.js')

exports.searchForAllProduct = (request, response) => {
    console.log('params', request.params)
    const { searchInput } = request.params
    const id = searchInput.split('id')[1]
    const input = searchInput.split('id')[0]
    getSearchedProducts(id, input).then(result => response.json(result)).catch(err => response.json(err))
}