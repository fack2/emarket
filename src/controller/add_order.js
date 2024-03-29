const postOrder = require('../database/queries/post_order')

const addOrder = (req, res) => {
  const { username, phone, Address, Extra_Note, orderID = 3 } = req.body
  // The orderID will be token from the cookie after making the login page

  postOrder(username, phone, Address, Extra_Note, orderID)
    .then(() => res.status(200).json({ res: 'success true' }))
    .catch(err => err.status(500).json({ err: 'error for post shipping info' }))
}
module.exports = addOrder
