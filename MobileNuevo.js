"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobileLibrary_1 = require("./mobileLibrary");
var Xiaomi = new mobile_1.Mobile("Xiaomi", "plusA", "Xiaomi", "164GB", "Amarillo", true, 4, 200);
var LG = new mobile_1.Mobile("LG", "Wind", "LG", "128GB", "Azul", true, 4, 600);
var Sony = new mobile_1.Mobile("Sony", "Xperia 25", "Sony", "160GB", "rojo", true, 3, 150);
var Iphone = new mobile_1.Mobile("Iphone", "12", "Apple", "125GB", "negro", true, 8, 900);
var allMobiles = [Xiaomi, LG, Sony, Iphone];
var objetcLibraryNew = new mobileLibrary_1.MobileLibrary("Blackberry", "USA", allMobiles);
var nuevoMetodo = new mobileLibrary_1.MobileLibrary("Sony", "class2", allMobiles);
console.log("totalPriceCalculation");
console.log(objetcLibraryNew.totalPriceCalculation());
///
console.log("getName");
console.log(objetcLibraryNew.getName());
////
console.log("setName");
console.log(objetcLibraryNew.setName("Aaa"));
////
console.log("getLocation");
console.log(objetcLibraryNew.getLocation());
///
console.log("setLocation");
console.log(objetcLibraryNew.setLocation("Abcs"));
////
console.log("getMobiles");
console.log(objetcLibraryNew.getMobiles());
////
console.log("setMobiles");
console.log(objetcLibraryNew.setMobiles([]));
////
console.log("getTotalPrice");
console.log(objetcLibraryNew.getTotalprice());
/////
console.log("setTotalPrice");
console.log(objetcLibraryNew.setTotalprice(500));
console.log("printLibrary");
console.log(nuevoMetodo.printLibrary());
console.log("Priceoverall:  " + nuevoMetodo.totalPriceCalculation());
