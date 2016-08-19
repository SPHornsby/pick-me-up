var router = require('express').Router();
var request = require('request');
var data = require('../data/data.json');
var auth = `bearer ${process.env.ROUTIFIC_KEY}`;
var options = {
  url: 'https://api.routific.com/v1/vrp',
  json: data,
  headers: {
    'Authorization': auth
  }
};

router.post('/vehicle', function(req, res) {
  res.send();
});

router.post('/stop', function(req, res) {
  res.send();
});

router.get('/optimized', function(req, res) {
  request.post(options, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(body);
      } else {
        console.log(`${response.statusCode} : ${body.error}`);
  }
  });

  
});


module.exports = router;