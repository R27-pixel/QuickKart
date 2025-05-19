const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getFeaturedProducts
} = require('../controllers/productController');
const { protect, authorize } = require('../middleware/auth');
const { uploadMultipleImages, formatImageData } = require('../middleware/upload');

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:id', getProduct);

// Protected routes for sellers and admins
router.post('/', protect, authorize('seller', 'admin'), uploadMultipleImages, formatImageData, createProduct);
router.put('/:id', protect, authorize('seller', 'admin'), uploadMultipleImages, formatImageData, updateProduct);
router.delete('/:id', protect, authorize('seller', 'admin'), deleteProduct);

module.exports = router;