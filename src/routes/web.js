const express = require('express');
const router = express.Router();
const path = require('path');
const controllerWeb = require('../controllers/controllerWeb');

router.get('/', controllerWeb.index);


module.exports = router;
    

