var router = require('express').Router();

router.post('/vehicle', function(req, res) {
  console.log('vehicle post');
  res.send();
});

router.post('/stop', function(req, res) {
  console.log('stop post');
  res.send();
});

router.get('/optimized', function(req, res) {
  console.log('get optimized');
  res.send();
});

module.exports = router;