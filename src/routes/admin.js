const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const controllerAdmin = require('../controllers/controllerAdmin');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
      cb(null, 'product-'+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({ storage })

router.get('/', controllerAdmin.index);
router.get('/create', controllerAdmin.create);
router.post('/create', upload.single('imagen'), controllerAdmin.save);
router.get('/detail/:id', controllerAdmin.show);
router.get('/edit/:id', controllerAdmin.edit);
router.get('/delete/:id', controllerAdmin.destroy);

module.exports = router;


