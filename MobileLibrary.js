"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    ;
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    ;
    MobileLibrary.prototype.setName = function (newName) {
        return this.name = newName;
    };
    ;
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    ;
    MobileLibrary.prototype.setLocation = function (newLocation) {
        return this.location = newLocation;
    };
    ;
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    ;
    MobileLibrary.prototype.setMobiles = function (newMobiles) {
        return this.mobiles = newMobiles;
    };
    ;
    MobileLibrary.prototype.getTotalprice = function () {
        return this.totalPrice;
    };
    ;
    MobileLibrary.prototype.setTotalprice = function (newTotalPrice) {
        return this.totalPrice = newTotalPrice;
    };
    ;
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var sumAllPrices = 0;
        for (var key in this.mobiles) {
            sumAllPrices += this.mobiles[key].getPrice();
        }
        ;
        return sumAllPrices;
    };
    ;
    MobileLibrary.prototype.printLibrary = function () {
        var printAtribute = "";
        console.log("This is all my mobiles: ");
        for (var key in this.mobiles) {
            printAtribute += " The characteristics of the mobile name are:  " +
                "\n" + " Name: " + this.mobiles[key].getName() +
                "\n" + " Model: " + this.mobiles[key].getModel() +
                "\n" + " Trademark: " + this.mobiles[key].getTradeMark() +
                "\n" + " SD Size: " + this.mobiles[key].getSdSize() +
                "\n" + " Color: " + this.mobiles[key].getColor() +
                "\n" + " Is 5G?: " + this.mobiles[key].getIs5G() +
                "\n" + " Number of Cameras: " + this.mobiles[key].getCameraNumber() + "\n";
        }
        ;
        return printAtribute;
    };
    ;
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
