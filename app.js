const express=require("express");
const app= express();
var path = require('path');
var bodyParser = require('body-parser');
var firstString= __dirname +"\\images\\image";
var secondString= ".jpg";

app.use(function(req, res, next) {
  console.log("Inside Use");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  express.bodyParser();
  bodyParser.urlencoded({ extended: true });
  bodyParser.json();
  next();
});

app.get('/about/:id', function (req, res, next) {
  console.log("Inside get");
  console.log("Direc = "+ __dirname);
  var a=firstString+req.params.id+secondString;
  console.log("Printing param value" +a);
  res.send(a);
  //  res.send('world')
    console.log("After Inside get");
});



// app.get('/about/:id', function (req, res, next) {
//   console.log("Inside get");
//   var a=req.params.id;
//   console.log("Printing param value" +a);
//     res.send('world')
//     console.log("After Inside get");
// });

app.listen(3000, function(){
  console.log("server is running on port 3000");
});
//this is staring work for advance
module.exports = app;
