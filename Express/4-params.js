const express = require('express');
const app = express();

const {products, people} = require('./data.js');


app.get('/', (req, res) => {
    // res.json(people);
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">products</a>
    `);
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    });
    res.json(newProducts);
});

// app.get('/api/products/1', (req, res) => {
//     const prod = products.find((product) => product.id === 1);
//     res.json(prod);
// });

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    const prod = products.find((product) => product.id === Number(productID));
    if(!prod)
        return res.status(404).send('Product not found');
    res.json(prod);
});

app.listen(5000, () => {
    console.log(`Server is listening at port 5000`);
});
