"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_query_builder_1 = require("abstract-query-builder");
var ProductRest_1 = require("../model/dictionary/ProductRest");
var ProductInfo_1 = require("./inner/ProductInfo");
var ProductInfo_2 = require("./inner/ProductInfo");
var defaultExecutor_1 = require("./defaultExecutor");
/**
 * Класс для сортировки элементов в результе запроса
 */
var ProductRestSortOrder = /** @class */ (function (_super) {
    __extends(ProductRestSortOrder, _super);
    function ProductRestSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_2.ProductInfoInnerSortOrder());
        /**
         * Количество продукции на складе
         */
        _this.stockQuantity = _this.addFieldSorter("STOCK_QUANTITY");
        /**
         * Количество продукции в торговом зале
         */
        _this.shopQuantity = _this.addFieldSorter("SHOP_QUANTITY");
        /**
         * Общее количество продукции
         */
        _this.totalQuantity = _this.addFieldSorter("TOTAL_QUANTITY");
        return _this;
    }
    return ProductRestSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ProductRestSortOrder = ProductRestSortOrder;
/**
 * Класс для формирования запроса на получение остатков продукции
 */
var ProductRestQuery = /** @class */ (function (_super) {
    __extends(ProductRestQuery, _super);
    function ProductRestQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ProductRest', ProductRest_1.default.prototype)) || this;
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        /**
         * Количество продукции на складе
         */
        _this.stockQuantity = _this.addFieldFilter("STOCK_QUANTITY", function (v) { return v * 1000; });
        /**
         * Количество продукции в торговом зале
         */
        _this.shopQuantity = _this.addFieldFilter("SHOP_QUANTITY", function (v) { return v * 1000; });
        /**
         * Общее количество продукции
         */
        _this.totalQuantity = _this.addFieldFilter("TOTAL_QUANTITY", function (v) { return v * 1000; });
        return _this;
    }
    return ProductRestQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ProductRestQuery = ProductRestQuery;
