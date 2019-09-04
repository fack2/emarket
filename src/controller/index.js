const express = require('express')
const router = express.Router()
const { getAllProduct } = require('./getProducts.js')

router.get('/shop', getAllProduct)

module.exports = router