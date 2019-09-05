const express = require('express')
const router = express.Router()
const { getAllProduct } = require('./getProducts.js')
const { getAllcategoryProduct } = require('./get_category_products')
const getCategories = require('./get_category')
router.get('/shop/:category_id', getAllcategoryProduct)
router.get('/shop', getAllProduct)

router.get('/category', getCategories)

module.exports = router