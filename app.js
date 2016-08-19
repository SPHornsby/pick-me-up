var express = require('express');
var app = express();
var router = require('./routes/router');
var routesData = require('./routes/router-data');
var bodyParser = require('body-parser').json();
var MongoClient = require('mongodb').MongoClient;
var user = process.env.MDB;
var pw = process.env.MDBPW;
var url = 'mongodb://' + user + ':' + pw + '@ds029745.mlab.com:29745/heroku_8xrhcd53';

var port = process.env.port || 8000;


MongoClient.connect(url, function(err, db) {
  if(err) {
    console.error(err);
    process.exit(1);
  }

  express()
    .use(bodyParser)
    .use(express.static('public'))
    .use(router(routesData(db)))
    .listen(port, () => console.log(`Listening on port: ${port}`));
});
