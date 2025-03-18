const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db.config');


const token = jwt.sign({ id: user.id }, process.env.SECRET, {
    expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });

console.log(token);
const User = db.user;