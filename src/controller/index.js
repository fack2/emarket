const express = require('express')
const router = express.Router()
const getCategories = require('./get_category')
router.get('/category', getCategories)

module.exports = router
