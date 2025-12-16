const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/logg-in', (req, res) => {
  res.render('logg-in');
});

router.post('/register', controller.registerUser);
router.post('/logg-in', controller.loginUser);

module.exports = router;
