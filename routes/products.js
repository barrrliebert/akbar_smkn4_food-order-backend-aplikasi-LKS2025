const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');
const verifyToken = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  }
});

const upload = multer({ storage: storage });

// Apply the middleware to the routes that require authentication
router.post('/api/products', verifyToken, upload.single('image'), productsController.create);
router.put('/api/products/:id', verifyToken, upload.single('image'), productsController.edit);
router.delete('/api/products/:id', verifyToken, productsController.delete);
router.get('/api/products', productsController.getAll);

module.exports = router;