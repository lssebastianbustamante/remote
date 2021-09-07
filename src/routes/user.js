 const express = require('express');
 const router = express.Router();
 const path = require('path');

 const controllerUser = require('../controllers/controllerUser');

 router.get('/user/login', controllerUser.login);
 router.get('/user/register', controllerUser.register);


 module.exports = router;