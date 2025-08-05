const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Public
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Protected
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
