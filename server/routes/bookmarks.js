const express = require('express');
const {
  getBookmarks,
  addBookmark,
  removeBookmark,
  checkBookmark
} = require('../controllers/bookmarkController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(protect);

router.get('/', getBookmarks);
router.post('/', addBookmark);
router.delete('/:id', removeBookmark);
router.get('/check/:productId', checkBookmark);

module.exports = router;