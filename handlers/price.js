"use strict";

let ageCoeff=require(".././coefficients/coeff_age.js");
let postCode_inseeCode=require(".././coefficients/codePostal_codeINSEE.js");
let inseeCode_zone=require(".././coefficients/INSEE_ZONIER.js");
let zoneCoeff=require(".././coefficients/coeff_ZONIER.js");
exports.getPrice=function getPrice(postCode,age,hotspot,callback){
  let price = 100;
  let ageRiskCoeff=ageCoeff.getCoeff_age(age);
  let inseeCode=postCode_inseeCode.codePostal2codeINSEE(postCode);
  let zoneCode=inseeCode_zone.INSEE2ZONIER(inseeCode);
  let postCodeRiskCoeff=zoneCoeff.getCoeff_ZONIER(zoneCode);
  price*=ageRiskCoeff;
  price*=postCodeRiskCoeff["RC"];
  price*=(1+hotspot/100);
  callback(price+"euros/month");
};
