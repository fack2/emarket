const getProduct = require('../database/queries/getAllProduct.js')

exports.getAllProduct = (request, response) => {
    getProduct().then(result => response.json(result)).catch(err => response.json(err))
}