var APPLICATION_NAME = "buy-it"
require('nodefly').profile(
    '8f7287bb-f406-4d1e-b3b9-0c2923d46615',
    [APPLICATION_NAME,'Heroku']
);
var express = require('express');
var app = express();

app.use(express.logger());
app.use(express.static(__dirname));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});