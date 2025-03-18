const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/lks-food', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

module.exports = {
    mongoURI: 'mongodb://127.0.0.1:27017/lks-food',
    secret: 'sadassaaascasaxxsaxax'
};