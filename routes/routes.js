const express = require('express');
const router = express.Router();

const homeController = require('../controllers/controllers');

router.get('/', homeController.indexrenderer);
router.get('/logg-in', homeController.vislogginsidee);
router.post('/logg-in', homeController.logginnBruker);

module.exports = router;
