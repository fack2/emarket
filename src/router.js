const express = require('express')
const router = express.Router()
const getProduct = require('./controllers/get_product')
const addToCart = require('./controllers/add_to_cart')
router.get('/product/:id', getProduct.get)
router.post('/add-to-cart', addToCart.post)

module.exports = router
