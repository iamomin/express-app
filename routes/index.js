var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Check with URL: http://localhost:3000/iamomin@gmail.com
router.get('/:username@:domain.:top', function(req, res, next) {
  res.send(req.params)
});

module.exports = router;
