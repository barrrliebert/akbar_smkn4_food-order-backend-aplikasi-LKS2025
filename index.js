const express = require('express')
const app = express()
const port = 3000
const authcontroller = require('./controller/authcontroller');
const usercontroller = require('./controller/usercontroller');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})