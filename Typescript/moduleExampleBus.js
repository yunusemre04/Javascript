"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bus = void 0;
var Bus = /** @class */ (function () {
    function Bus(_location) {
        this._location = _location;
    }
    Bus.prototype.travelTo = function (location) {
        console.log("The Bus is going to ".concat(this._location.x, " and ").concat(this._location.y));
    };
    Object.defineProperty(Bus.prototype, "Location", {
        get: function () {
            return this._location;
        },
        set: function (loca) {
            if (loca.x < 0 || loca.y < 0) {
                throw new Error("coordinate numbers cant be negative");
            }
            this._location = loca;
        },
        enumerable: false,
        configurable: true
    });
    return Bus;
}());
exports.Bus = Bus;
