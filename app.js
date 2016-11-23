"use strict";
let express=require("express");
let app=express();

app.get("/",function(request,response){
  response.send("hello World");
});


app.listen(3000,()=>console.log("example app listening on port 3000"));
