var express = require('express'),
app = express(),
port = process.env.PORT || 4200,
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routers/TestRouter');

app.use(function (req,res, next) {
  res.header("Access-Control-Allow-Origin", "");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with,Content-Type,Accept");
  res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE");
  next();
   
}); 
routes(app);
app.listen(port);
console.log("server started at port 4200");