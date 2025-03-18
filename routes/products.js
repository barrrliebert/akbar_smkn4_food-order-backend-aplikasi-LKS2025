const ProductsController = require('./controller/productcontroller.js')

app.post('/api/products', ProductsController.create);
app.put('/api/products/:id', ProductsController.update);
app.delete('/api/products/:id', ProductsController.delete);
app.get('/api/products', ProductsController.getAll);