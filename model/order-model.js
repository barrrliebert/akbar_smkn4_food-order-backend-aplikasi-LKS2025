const mongoose = require('mongoose');
const config = require('../config/db.js')

const orderSchema = newSchema({
    productName: String,
    productId: Unique,
    status: String,
    
})