var Router = require('express').Router;
var request = require('request');
var auth = `bearer ${process.env.ROUTIFIC_KEY}`;
var geo = process.env.MAP_GEO;

module.exports = function(routeData){
  var router = new Router();

  router.get('/optimized', function(req, res) {

    var fleet = new Promise(function(resolve, reject) {
      routeData.getFleet(function(err, docs) {
        if (!err) {
          resolve(docs[0]);
        } else {
          reject();
        }
        
      })
    });
    var visits = new Promise(function(resolve, reject) {
      routeData.getVisits(function(err, docs) {
        resolve(docs[0]);
      })
    });

    Promise.all([fleet, visits]).then(data => { 
      var visits = data[1];
      var fleet = data[0];
      var options = {
        url: 'https://api.routific.com/v1/vrp',
        json: {"visits": visits, "fleet": fleet},
        headers: {
          'Authorization': auth
        }
      }
      request.post(options, function(error, response, body) {
          if (!error && response.statusCode == 200) {
            res.send(body);
          } else {
            console.log(`${response.statusCode} : ${body.error}`);
        }
      });
    });
  });
  return router;
}