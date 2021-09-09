const express = require('express');
const router = express.Router();
const path = require('path');
const controllerProduct = require('../controllers/controllerProduct');

router.get('/', controllerProduct.index);

module.exports = router;