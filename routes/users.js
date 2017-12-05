var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  console.log('Accessing the middle section ... Time: ', Date.now());
  console.log('__dirname:', __dirname)
  next() // pass control to the next handler
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userId(\\d+)/books/:bookId(\\d+)', function (req, res) {
  res.send(req.params)
});

module.exports = router;
