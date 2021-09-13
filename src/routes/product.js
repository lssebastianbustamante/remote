const express = require('express');
const router = express.Router();
const path = require('path');
const controllerProduct = require('../controllers/controllerProduct');

router.get('/detail/:id', controllerProduct.detail);
router.get('/search', controllerProduct.search);

module.exports = router;