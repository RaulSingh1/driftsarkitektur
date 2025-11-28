const express = require('express');

const router = express.Router();

const homeController = require('../controllers/controllers');
router.get('/',homeController.indexrenderer)

module.exports = router;
