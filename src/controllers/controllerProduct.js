const path = require('path');
const fs = require('fs');

let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));

module.exports = {
    detail: (req,res) => {
        let product = req.params.id;
        res.render(path.resolve(__dirname, '../views/product/product-detail'), { 
            title: "Product",
            products
        });
    }
}