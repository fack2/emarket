const getProductByID = require('../database/queries/get_product_by_id')
exports.get = (req, res) => {
  getProductByID(req.params.id)
    .then(result => {
      res.send(JSON.stringify({ product: result }))
    })
    .catch(err => console.log(err))
}
