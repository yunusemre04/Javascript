"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Product_1 = require("./Product");
var Data = /** @class */ (function () {
    function Data() {
        this.productsData = new Array(new Product_1.Product(1, "Laptop", 600), new Product_1.Product(2, "Phone", 360), new Product_1.Product(3, "TV", 500));
    }
    Data.prototype.getProductData = function () {
        return this.productsData;
    };
    return Data;
}());
exports.Data = Data;
