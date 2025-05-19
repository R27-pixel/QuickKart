const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a product title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: [0, 'Price must be a positive number']
  },
  images: [
    {
      type: String,
      required: [true, 'Please provide at least one image']
    }
  ],
  category: {
    type: String,
    required: [true, 'Please select a category'],
    enum: [
      'Electronics',
      'Clothing',
      'Food',
      'Furniture',
      'Books',
      'Toys',
      'Handmade',
      'Services',
      'Other'
    ]
  },
  tags: [
    {
      type: String,
      trim: true
    }
  ],
  quantity: {
    type: Number,
    required: [true, 'Please specify quantity available'],
    min: [0, 'Quantity cannot be negative']
  },
  status: {
    type: String,
    enum: ['available', 'out_of_stock', 'discontinued'],
    default: 'available'
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  numReviews: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Index for searching
ProductSchema.index({ title: 'text', description: 'text', tags: 'text' });

// Update the updatedAt field on save
ProductSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Product', ProductSchema);