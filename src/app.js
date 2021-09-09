const express = require('express');
const path = require('path');
const app = express();
const favicon = require('express-favicon');
const methodOverride = require('method-override');

// Session y cookies
const session = require('express-session');
const cookieParser = require('cookie-parser');


// Carpeta Public
app.use(express.static('public'));

// Motor de Plantillas EJS
app.set('view engine', 'ejs');

//URL Encode
app.use(express.urlencoded({ extended: false }));

// Method Override
app.use(methodOverride('_method'));

app.use(session({
    secret : 'topSecret',
    resave : true,
    saveUninitialized : true,
}))




// Requerir Rutas
const webRoutes = require('./routes/web');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

// Rutas
app.use('/', webRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// Favicon 
app.use(favicon(__dirname + '/public/images/icons/favicon.png')); //Favicon

// Servidor
app.listen(3033, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3001'));

