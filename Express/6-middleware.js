const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

// app.use('/about', [authorize, logger]);
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    console.log(res.user);
    res.send('About');
});

app.listen(5000, () => {
    console.log('server is listening...');
});