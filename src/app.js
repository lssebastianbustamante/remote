const express = require('express');
const path = require('path');
const favicon = require('express-favicon');

const app = express();


// Carpeta Public
app.use(express.static('public'));

// Motor de Plantillas EJS
app.set('view engine', 'ejs');



// Requerir Rutas
const webRoutes = require('./routes/web');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

// Rutas
app.use(webRoutes);
app.use(productRoutes);
app.use(userRoutes);

// Favicon 
app.use(favicon(__dirname + '/public/images/icons/favicon.png')); //Favicon

// Servidor
app.listen(3033, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3001'));

