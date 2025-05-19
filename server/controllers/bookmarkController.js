const Bookmark = require('../models/Bookmark');
const Product = require('../models/Product');

// @desc    Get user bookmarks
// @route   GET /api/bookmarks
// @access  Private
exports.getBookmarks = async (req, res, next) => {
  try {
    const bookmarks = await Bookmark.find({ user: req.user.id })
      .populate({
        path: 'product',
        populate: {
          path: 'seller',
          select: 'name profilePicture'
        }
      });

    res.status(200).json({
      success: true,
      count: bookmarks.length,
      data: bookmarks
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Add bookmark
// @route   POST /api/bookmarks
// @access  Private
exports.addBookmark = async (req, res, next) => {
  try {
    req.body.user = req.user.id;
    
    // Check if product exists
    const product = await Product.findById(req.body.product);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    // Check if bookmark already exists
    const existingBookmark = await Bookmark.findOne({
      user: req.user.id,
      product: req.body.product
    });
    
    if (existingBookmark) {
      return res.status(400).json({
        success: false,
        error: 'Product already bookmarked'
      });
    }
    
    const bookmark = await Bookmark.create(req.body);
    
    res.status(201).json({
      success: true,
      data: bookmark
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Remove bookmark
// @route   DELETE /api/bookmarks/:id
// @access  Private
exports.removeBookmark = async (req, res, next) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    
    if (!bookmark) {
      return res.status(404).json({
        success: false,
        error: 'Bookmark not found'
      });
    }
    
    // Make sure user owns bookmark
    if (bookmark.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to remove this bookmark'
      });
    }
    
    await bookmark.deleteOne();
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Check if product is bookmarked by user
// @route   GET /api/bookmarks/check/:productId
// @access  Private
exports.checkBookmark = async (req, res, next) => {
  try {
    const bookmark = await Bookmark.findOne({
      user: req.user.id,
      product: req.params.productId
    });
    
    res.status(200).json({
      success: true,
      isBookmarked: !!bookmark,
      data: bookmark
    });
  } catch (error) {
    next(error);
  }
};