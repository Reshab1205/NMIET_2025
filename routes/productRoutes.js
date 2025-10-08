const express = require('express')
const productController = require('../controllers/productController')
const { verifyToken } = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/add-product', verifyToken, productController.createProduct)
router.get('/get-products', productController.getAllProducts)
// update
// soft delete
// hard delete
// searching and sorting, filters


module.exports = router 
