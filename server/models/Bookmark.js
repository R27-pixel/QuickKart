const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Make the combination of user and product unique to prevent duplicate bookmarks
BookmarkSchema.index({ user: 1, product: 1 }, { unique: true });

module.exports = mongoose.model('Bookmark', BookmarkSchema);