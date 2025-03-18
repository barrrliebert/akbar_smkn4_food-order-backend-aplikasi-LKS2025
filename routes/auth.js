const authcontroller = require('./controller/authcontroller');

app.post('/api/users/register', authcontroller.register);
app.post('/api/users/login', authcontroller.login);
app.put('/api/users/profile', authcontroller.update);

console.log("respon succes")