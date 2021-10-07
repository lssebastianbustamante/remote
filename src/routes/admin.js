const express = require('express');
const router = express.Router();
const path = require('path');

const controllerAdmin = require('../controllers/controllerAdmin');

//Middlewares
const uploadFile = require('../middlewares/multerMiddlewares');


router.get('/', controllerAdmin.index);
router.get('/create', controllerAdmin.create);
router.post('/create', uploadFile.single('imagen'), controllerAdmin.save);
router.get('/detail/:id', controllerAdmin.show);
router.get('/edit/:id', controllerAdmin.edit);
router.put('/edit/:id', uploadFile.single('imagen'), controllerAdmin.update);
router.get('/delete/:id', controllerAdmin.destroy);

module.exports = router;


