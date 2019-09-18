const deleteItem = require('../database/queries/delete_item')
exports.delete = (req, res, next) => {
  const orderID = 1 //
  deleteItem(req.params.id, orderID)
    .then(result => {
      res.send(JSON.stringify({ product: result }))
    })
    .catch(err => {
      console.log(err, 'controller/deleteItem.js')
      next(err)
    })
}
