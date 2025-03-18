const express = require('express')
const app = express()
const port = 3001
const db = require('./config/db.js');


app.get('/', (req, res) => {
  res.send('welcome to api food-order')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})