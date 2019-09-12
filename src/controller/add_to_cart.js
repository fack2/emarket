const addToCart = require('../database/queries/add_to_cart')

exports.post = (req, res, next) => {
  const { productID, quantity, price } = req.body
  const userID = 1 // user id static we will get user id from cookies
  addToCart(userID, productID, quantity, price)
    .then(result => {
      res.send(JSON.stringify({ product: result }))
    })
    .catch(err => {
      console.log(err, 'controller/add_to_cart.js')
      next(err)
    })
}
