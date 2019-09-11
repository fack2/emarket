const express = require('express')
const router = express.Router()
const { getAllProduct } = require('./getProducts.js')
const { getAllcategoryProduct } = require('./get_category_products')
const { searchForAllProduct } = require('./get_products_by_name')
const getCategories = require('./get_category')
const add_order = require('./add_order')
router.get('/shop/:category_id', getAllcategoryProduct)
router.get('/search/:searchInput', searchForAllProduct)
router.get('/shop', getAllProduct)
router.post('/shipping_info', add_order)
router.get('/category', getCategories)

module.exports = router
