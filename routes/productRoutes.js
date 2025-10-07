const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.post('/add-product', productController.createProduct)
router.get('/get-products', productController.getAllProducts)
// update
// soft delete
// hard delete
// searching and sorting, filters


module.exports = router 