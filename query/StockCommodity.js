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
var StockCommoditySortOrder = /** @class */ (function (_super) {
    __extends(StockCommoditySortOrder, _super);
    function StockCommoditySortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Регистрационный номер раздела справки 1
         */
        _this.informF1RegId = _this.addFieldSorter("INFORM_F1_REG_ID");
        /**
         * Регистрационный номер раздела справки 2
         */
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
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
    return StockCommoditySortOrder;
}(abstract_query_builder_1.SortOrder));
exports.StockCommoditySortOrder = StockCommoditySortOrder;
/**
 * Класс для формирования запроса на получение информации о биржевых товарах
 */
var StockCommodityQuery = /** @class */ (function (_super) {
    __extends(StockCommodityQuery, _super);
    function StockCommodityQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('StockCommodity', ProductRest_1.StockCommodity.prototype)) || this;
        /**
         * Регистрационный номер раздела справки 1
         */
        _this.informF1RegId = _this.addFieldFilter("INFORM_F1_REG_ID");
        /**
         * Регистрационный номер раздела справки 2
         */
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
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
    return StockCommodityQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.StockCommodityQuery = StockCommodityQuery;
