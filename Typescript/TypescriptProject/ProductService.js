"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var Data_1 = require("./Data");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSrc = new Data_1.Data();
        this.products = new Array();
        this.dataSrc.getProductData().forEach(function (element) {
            _this.products.push(element);
        });
    }
    ProductService.prototype.getByID = function (id) {
        return this.products.filter(function (e) { return e.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.createID();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id == product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.createID = function () {
        var id = 1;
        while (this.getByID(id) != null) {
            id++;
        }
        return id;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
