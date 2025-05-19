const multer = require('multer');
const path = require('path');

// In-memory storage to handle base64 later
const storage = multer.memoryStorage();

// Define file filter
const fileFilter = (req, file, cb) => {
  // Allow images only
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb({ message: 'Unsupported file format' }, false);
  }
};

// Upload middleware
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max file size
});

// Single file upload
exports.uploadSingleImage = upload.single('image');

// Multiple file upload
exports.uploadMultipleImages = upload.array('images', 5); // Allow up to 5 images

// Format file data for saving to DB
exports.formatImageData = (req, res, next) => {
  // If no file is uploaded, continue
  if (!req.file && !req.files) {
    return next();
  }

  // For single file upload
  if (req.file) {
    // Convert Buffer to Base64 string
    req.body.image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
  }

  // For multiple file upload
  if (req.files) {
    req.body.images = req.files.map(file => 
      `data:${file.mimetype};base64,${file.buffer.toString('base64')}`
    );
  }

  next();
};