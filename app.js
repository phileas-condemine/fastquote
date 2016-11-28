"use strict";

let port = process.env.PORT || 3000;
//let bodyParser = require('body-parser');
let express=require("express");
let app=express();
let routes = require("./routes.js");

let mongo = require('mongodb');
let MongoClient = mongodb.MongoClient;
let monk = require('monk');
let db_url = "mongodb://pcondemine:200690@ds01316.mlab.com:1316/hotspot";
let db = monk(db_url);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(request,response,next){
    request.db = db;
    next();
});

app.get("/price/:age/:postCode",function(request,response){
  routes.priceMessage(request,response);
});

app.get("/hotspot/:increase",function(request,response){
  routes.adjustPrice(request,response);
})



app.listen(port,()=>console.log("example app listening on port "+port));
