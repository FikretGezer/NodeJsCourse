const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./styles'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(5000, () => {
    console.log('server is listening...');
});