const express = require('express');
const router = express.Router();
const path = require('path');


// Controlador
const controllerUser = require('../controllers/controllerUser');



//Middlewares
const validatorRegister = require('../middlewares/validatorRegister')
const uploadFile = require('../middlewares/multerMiddlewares')



router.get('/login', controllerUser.login);
router.get('/register', controllerUser.register);

router.post('/register', uploadFile.single('avatar'), validatorRegister, controllerUser.create)


module.exports = router;