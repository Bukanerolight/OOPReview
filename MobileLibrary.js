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
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
