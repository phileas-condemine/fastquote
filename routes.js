"use strict";

let priceHandler=require("./handlers/price.js");
exports.priceMessage = function priceMessage(request,response){


  request.db.get('hotspot').find({},{},(error,results)=>{
    if (error){
      response.status(500).json(error);
    }
    let hotspot = results[results.length-1].increase;
    let postCode = request.params.postCode;
    let age = request.params.age;
    console.log({age,hotspot,postCode});
    priceHandler.getPrice(postCode,age,hotspot,(price)=>{
     response.status(200).json({
        "status":"OK",
        "postCode":postCode,
        "age":age,
        "hotspot":hotspot,
        "price":price
      });
    });
  });
};

exports.adjustPrice=function adjustPrice(request,response){
  let hotspot=parseInt(request.params.increase);
  let collection = request.db.get('hotspot');
  collection.insert({
      "increase" : hotspot
  }, function (error, results) {
    if (error) {
      response.status(501).json(error);
    }
    response.status(201).json({
     "status":"OK",
     "increase":hotspot,
     "message":hotspot+"% increase with success!"
    });
  });
};
