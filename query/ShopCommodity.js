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
var defaultExecutor_1 = require("./defaultExecutor");
var ProductInfo_1 = require("./inner/ProductInfo");
/**
 * Класс для сортировки элементов в результе запроса
 */
var ShopCommoditySortOrder = /** @class */ (function (_super) {
    __extends(ShopCommoditySortOrder, _super);
    function ShopCommoditySortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Количество
         */
        _this.quantity = _this.addFieldSorter("QUANTITY");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        return _this;
    }
    return ShopCommoditySortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ShopCommoditySortOrder = ShopCommoditySortOrder;
/**
 * Класс для формирования запроса на получение информации о магазинных товарах
 */
var ShopCommodityQuery = /** @class */ (function (_super) {
    __extends(ShopCommodityQuery, _super);
    function ShopCommodityQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ShopCommodity', ProductRest_1.ShopCommodity.prototype)) || this;
        /**
         * Количество
         */
        _this.quantity = _this.addFieldFilter("QUANTITY", function (v) { return v * 1000; });
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        return _this;
    }
    return ShopCommodityQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ShopCommodityQuery = ShopCommodityQuery;
