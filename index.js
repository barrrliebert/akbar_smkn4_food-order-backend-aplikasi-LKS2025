const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const db = require('./config/db.js');
var cors = require('cors')

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/products')
const orderRoutes = require('./routes/orders')

// Use routes
app.use(cors())
app.use(authRoutes)
app.use(productRoutes)
app.use(orderRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to food-order API')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})