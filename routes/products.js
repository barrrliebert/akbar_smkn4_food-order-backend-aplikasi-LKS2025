const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');
const verifyToken = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
}); 

const upload = multer({ storage: storage });

router.post('/api/products', verifyToken, upload.single('image'), productsController.create);
router.put('/api/products/:id', verifyToken, upload.single('image'), productsController.edit);
router.delete('/api/products/:id', verifyToken, productsController.delete);
router.get('/api/products', productsController.getAll);

module.exports = router;