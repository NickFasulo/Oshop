const express = require('express');
const router = express.Router();

// render home page
router.get('/', (req, res) => {
  res.render('main/home');
});

module.exports = router;
