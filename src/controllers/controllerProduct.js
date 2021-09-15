const path = require('path');
const fs = require('fs');

let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));

module.exports = {
    detail: (req,res) => {
        let detailProduct;
        products.forEach(product => {
            if (product.id == req.params.id) {
                detailProduct = product;
            }
        });

        res.render(path.resolve(__dirname, '../views/product/product-detail'), {
            title: 'Detalle',
            detailProduct,
            products
        })
    },

    search: (req,res) => {
        let productSearch = req.query.productSearch;
        let productResult;
        products.forEach(product => {
            if (product.nombre.find(req.query.productSearch)) {
                res.render(path.resolve(__dirname, '../views/product/product-search'),{
                    title: 'Resultado',
                    
                    
                })
            }
        });

    }
}