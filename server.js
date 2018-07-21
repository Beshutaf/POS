const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    const result = getUsers();
    res.json(result);
});

app.get('/products', (req, res) => {
    const result = getProducts(req.query.search);
    res.json(result);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

const getUsers = () => {
    return {
        1: 'גלי',
        2: 'דניאל',
        3: 'שי',
    };
};
 /**
  * Get products by query
  * @param {string} query Search query
  */
const getProducts = (query) => {
    const products =  {
        1: 'חלב',
        2: 'מים',
        3: 'לחם',
        4: 'אורז',
    };
    let results = {};
    for (const key in products) {
        if (products.hasOwnProperty(key)) {
            const product = products[key];
            if (product.includes(query))
                results[key] = product;
        }
    }
    return results;
};
