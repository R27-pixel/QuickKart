const express = require('express');
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserProducts
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');
const { uploadSingleImage, formatImageData } = require('../middleware/upload');

const router = express.Router();

// Admin only routes
router.get('/', protect, authorize('admin'), getUsers);

// Mixed auth routes
router.get('/:id', protect, getUser);
router.put('/:id', protect, uploadSingleImage, formatImageData, updateUser);
router.delete('/:id', protect, deleteUser);
router.get('/:id/products', protect, getUserProducts);

module.exports = router;