const OrderController = require('../controller/ordercontroller.js')

app.post('/api/orders', OrderController.create);
app.put('api/orders:id', OrderController.Status);
app.delete('api/:id', OrderController.delete);
app.get('api/orders', OrderController.getAll);
