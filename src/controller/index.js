const express = require('express')
const router = express.Router()
const { getAllProduct } = require('./getProducts.js')
const { getAllcategoryProduct } = require('./get_category_products')
const { searchForAllProduct } = require('./get_products_by_name')
const getCategories = require('./get_category')
const getProduct = require('./get_product')
const addToCart = require('./add_to_cart')
const register = require('./register')
const add_order = require('./add_order')

const login = false
router.get('/category', getCategories)
router.get('/shop/:category_id', getAllcategoryProduct)
router.get('/search/:searchInput', searchForAllProduct)
router.get('/shop', getAllProduct)
router.get('/product/:id', getProduct.get)
router.post('/register', register.post)
if (login) {
  router.post('/shipping_info', add_order)
  router.post('/add-to-cart', addToCart.post)
} else {
  router.post('/shipping_info', (req, res, next) => {
    next(new Error('go to register'))
  })
  router.post('/shipping_info', (req, res, next) => {
    next(new Error('go to register'))
  })
  // router.post('/add-to-cart', addToCart.post)
  // router.use(function (req, res, next) {
  //   // res.send('<h1>page not foud</h1>')
  //   // res.end()
  // })
}

module.exports = router
