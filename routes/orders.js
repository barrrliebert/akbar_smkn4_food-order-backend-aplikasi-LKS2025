const express = require('express');
const router = express.Router();
const ordersController = require('../controller/ordersController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/api/orders', verifyToken, ordersController.create);
router.put('/api/orders/:id', verifyToken, ordersController.updateStatus);
router.delete('/api/orders/:id', verifyToken, ordersController.delete);
router.get('/api/orders', verifyToken, ordersController.getHistory);

module.exports = router; 