const model = require('../model/product-model.js')
const config = require('../config/db.js')
const route = require('../route/products.js')


App.use((req, res, next) => {
    res.send('products');
})