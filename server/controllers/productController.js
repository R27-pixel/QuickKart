const Product = require('../models/Product');

// @desc    Get all products with filtering, sorting and pagination
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res, next) => {
  try {
    let query = {};

    // Copy req.query
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit', 'search'];

    // Remove excluded fields from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);

    // Handle category filter
    if (req.query.category) {
      query.category = req.query.category;
    }

    // Handle price filter
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) query.price.$gte = Number(req.query.minPrice);
      if (req.query.maxPrice) query.price.$lte = Number(req.query.maxPrice);
    }

    // Handle availability filter
    if (req.query.status) {
      query.status = req.query.status;
    }

    // Handle search
    if (req.query.search) {
      query.$text = { $search: req.query.search };
    }

    // Handle tag filter
    if (req.query.tag) {
      query.tags = { $in: [req.query.tag] };
    }

    // Find products with filters
    let results = Product.find(query);

    // Handle seller filter (if specified)
    if (req.query.seller) {
      results = results.where('seller').equals(req.query.seller);
    }

    // Select fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      results = results.select(fields);
    }

    // Sort fields
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      results = results.sort(sortBy);
    } else {
      results = results.sort('-createdAt');
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Product.countDocuments(query);

    results = results.skip(startIndex).limit(limit);

    // Populate with seller info
    results = results.populate({
      path: 'seller',
      select: 'name profilePicture'
    });

    // Execute query
    const products = await results;

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

    res.status(200).json({
      success: true,
      count: products.length,
      pagination,
      total,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate({
      path: 'seller',
      select: 'name profilePicture bio location'
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new product
// @route   POST /api/products
// @access  Private (Sellers only)
exports.createProduct = async (req, res, next) => {
  try {
    // Add user to req.body
    req.body.seller = req.user.id;

    // Check if user is seller
    if (req.user.role !== 'seller' && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Only sellers can create products'
      });
    }

    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private (Seller who owns the product or Admin)
exports.updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    // Make sure user is product owner or admin
    if (
      product.seller.toString() !== req.user.id &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this product'
      });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private (Seller who owns the product or Admin)
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    // Make sure user is product owner or admin
    if (
      product.seller.toString() !== req.user.id &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to delete this product'
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
exports.getFeaturedProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ featured: true })
      .populate({
        path: 'seller',
        select: 'name profilePicture'
      })
      .limit(6);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};