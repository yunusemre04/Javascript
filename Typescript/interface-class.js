"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moduleExampleBus_1 = require("./moduleExampleBus");
var Car = /** @class */ (function () {
    function Car(location, color) {
        this.currentLocation = location;
    }
    Car.prototype.travelTo = function (location) {
        console.log("The Car is going to ".concat(location.x, " and ").concat(location.y));
    };
    return Car;
}());
var car1 = new Car({ x: 1, y: 2 });
car1.travelTo({ x: 3, y: 4 });
var bus1 = new moduleExampleBus_1.Bus({ x: 4, y: 6 });
bus1.travelTo({ x: 4, y: 6 });
console.log(bus1.Location);
bus1.Location = { x: 1, y: 4 };
console.log("new coordinates is ".concat(bus1.Location.x, " : ").concat(bus1.Location.y));
