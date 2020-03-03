const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const userValidation = require('./utils/userValidation');

router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/register', userValidation, userController.register);

module.exports = router;
