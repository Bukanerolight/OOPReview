"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var nokia3210 = new Mobile_1.Mobile("nokia", "3210", "nokia", "512GB", "Rosa", false, 1, 100);
var iphone3G = new Mobile_1.Mobile("Iphone", "7", "apple", "124GB", "Blanco", true, 3, 400);
var samsungGalaxy10 = new Mobile_1.Mobile("Samsung", "Galaxy 10", "Samsung", "128GB", "Negro", true, 2, 300);
console.log("The atributes of the Nokia are");
console.log(nokia3210);
console.log("The atributes of the Iphone are");
console.log(iphone3G);
console.log("The atributes of the Samsung are");
console.log(samsungGalaxy10);
//console.log("Nokia Modificated");
//nokia3210.cameraNumber = 4;
//nokia3210.is5G = true
//console.log(nokia3210);
console.log("The atributes of the Nokia are");
console.log(nokia3210);
console.log("The atributes of the Iphone are");
console.log(iphone3G);
console.log("The atributes of the Samsung are");
console.log(samsungGalaxy10);
console.log("The characteristics of the Nokia are");
console.log(nokia3210.atributos());
console.log("The characteristics of the Iphone are");
console.log(iphone3G.atributos());
console.log("The characteristics of the Samsung are");
console.log(samsungGalaxy10.atributos());