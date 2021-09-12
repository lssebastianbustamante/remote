const path = require('path');
const fs = require('fs');

let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));

module.exports = {
    index: (req,res) => {
        res.render(path.resolve(__dirname, '../views/admin/admin'), {
            title: "Administrar",
            products
        })
    },
    create: (req,res) => {
        res.render(path.resolve(__dirname,'../views/admin/create'), {
            title : 'Crear Producto',
            products
        })
    },
    save: (req,res) => {
        let lastProduct = products.pop();
        products.push(lastProduct);
        let newProduct = {
           id: lastProduct.id + 1,
           nombre: req.body.nombre,
           descripcion: req.body.descripcion,
           precio: req.body.precio,
           descuento: req.body.descuento,
           imagen: req.file.filename
       } 

       products.push(newProduct);
       let newProductSave = JSON.stringify(products, null, 2);
       fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), newProductSave);
       res.redirect('/admin');
    },
    show: (req,res) => {
        let myProduct;
        products.forEach(product => {
            if (product.id == req.params.id) {
                myProduct = product;
            }
        });

        res.render(path.resolve(__dirname, '../views/admin/detail'),{
            title: 'Detalle',
            myProduct
        })
    }
}