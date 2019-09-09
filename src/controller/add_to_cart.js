const addToCart = require('../database/queries/add_to_cart')

exports.post = (req, res) => {
  const { productID, quantity, userID, price } = req.body
  addToCart(userID, productID, quantity, price)
    .then(result => {
      res.send(JSON.stringify({ product: result }))
    })
    .catch(err => console.log(err, 'add_to_cart.js'))
}
