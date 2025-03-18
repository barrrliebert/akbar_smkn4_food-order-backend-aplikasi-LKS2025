const express = require('express');
const router = express.Router();
const authController = require('../controller/authcontroller');

router.post('/api/users/register', authController.register);
router.post('/api/users/login', authController.login);
router.get('/api/users/profile', authController.getProfile);

module.exports = router;