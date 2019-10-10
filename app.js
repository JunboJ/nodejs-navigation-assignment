const exp = require('express');
const path = require('path');

const app = exp();

app.use(exp.static(path.join(__dirname, 'public')));

app.use('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, './', 'html', 'users.html'));
});

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './', 'html', 'home.html'));
});

app.listen(3000);