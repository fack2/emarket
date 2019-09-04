const express = require('express')
const router = express.Router()
const { getAllProduct } = require('./getProducts.js')
const getCategories = require('./get_category')

router.get('/shop', getAllProduct)
router.get('/category', getCategories)

module.exports = router