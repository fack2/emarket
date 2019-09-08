const addToCart = require('../database/queries/add_to_cart')

exports.post = (req, res) => {
  const { productID, quantity, userID, price } = req.body
  console.log('78987898789878987898789', req.body)
  addToCart(userID, productID, quantity, price)
    .then(result => {
      console.log('78987898789878987898789')

      res.send(JSON.stringify({ product: result }))
    })
    .catch(err => console.log(err, 'eeeeeeeeeeeeeeeeee'))
}
