var express = require('express');
var app = express();
var router = require('./routes/router');
var bodyParser = require('body-parser').json();
var port = process.env.port || 8000;

app.use(express.static('public'));
app.use(bodyParser);
app.use(router);

app.listen(port, () => console.log(`Listening on port: ${port}`));