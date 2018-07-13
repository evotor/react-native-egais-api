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
var converters_1 = require("./converters");
var executor_1 = require("./executor");
/**
 * @class module:productRest.ProductRestSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:productRest.ProductRestSortOrder>} productInfo Информация о продукции
 * @property {FieldSorter<module:productRest.ProductRestSortOrder>} stockQuantity Количество продукции на складе
 * @property {FieldSorter<module:productRest.ProductRestSortOrder>} shopQuantity Количество продукции в торговом зале
 * @property {FieldSorter<module:productRest.ProductRestSortOrder>} totalQuantity Общее количество продукции
 */
var ProductRestSortOrder = /** @class */ (function (_super) {
    __extends(ProductRestSortOrder, _super);
    function ProductRestSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        _this.stockQuantity = _this.addFieldSorter("STOCK_QUANTITY");
        _this.shopQuantity = _this.addFieldSorter("SHOP_QUANTITY");
        _this.totalQuantity = _this.addFieldSorter("TOTAL_QUANTITY");
        return _this;
    }
    return ProductRestSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ProductRestSortOrder = ProductRestSortOrder;
/**
 * @class module:productRest.ProductRestQuery
 * @classdesc Класс для формирования запроса на получение остатков продукции.
 * @property {module:productInfo.ProductInfoFilter<module:productRest.ProductRestQuery, module:productRest.ProductRestSortOrder, module:productRest.ProductRest>} productInfo Информация о продукции
 * @property {FieldFilter<number, module:productRest.ProductRestQuery, module:productRest.ProductRestSortOrder, module:productRest.ProductRest>} stockQuantity Количество продукции на складе
 * @property {FieldFilter<number, module:productRest.ProductRestQuery, module:productRest.ProductRestSortOrder, module:productRest.ProductRest>} shopQuantity Количество продукции в торговом зале
 * @property {FieldFilter<number, module:productRest.ProductRestQuery, module:productRest.ProductRestSortOrder, module:productRest.ProductRest>} totalQuantity Общее количество продукции
 */
var ProductRestQuery = /** @class */ (function (_super) {
    __extends(ProductRestQuery, _super);
    function ProductRestQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ProductRest', ProductRest_1.default.prototype)) || this;
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        _this.stockQuantity = _this.addFieldFilter("STOCK_QUANTITY", converters_1.quantityConverter);
        _this.shopQuantity = _this.addFieldFilter("SHOP_QUANTITY", converters_1.quantityConverter);
        _this.totalQuantity = _this.addFieldFilter("TOTAL_QUANTITY", converters_1.quantityConverter);
        return _this;
    }
    return ProductRestQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ProductRestQuery = ProductRestQuery;
/**
 * @class module:productRest.ShopCommoditySortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:productRest.ShopCommoditySortOrder>} quantity Количество
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:productRest.ShopCommoditySortOrder>} productInfo Информация о продукции
 */
var ShopCommoditySortOrder = /** @class */ (function (_super) {
    __extends(ShopCommoditySortOrder, _super);
    function ShopCommoditySortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.quantity = _this.addFieldSorter("QUANTITY");
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        return _this;
    }
    return ShopCommoditySortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ShopCommoditySortOrder = ShopCommoditySortOrder;
/**
 * @class module:productRest.ShopCommodityQuery
 * @classdesc Класс для формирования запроса на получение информации о магазинных товарах.
 * @property {FieldFilter<number, module:productRest.ShopCommodityQuery, module:productRest.ShopCommoditySortOrder, module:productRest.ShopCommodity>} quantity Количество
 * @property {module:productInfo.ProductInfoFilter<module:productRest.ShopCommodityQuery, module:productRest.ShopCommoditySortOrder, module:productRest.ShopCommodity>} productInfo Информация о продукции
 */
var ShopCommodityQuery = /** @class */ (function (_super) {
    __extends(ShopCommodityQuery, _super);
    function ShopCommodityQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ShopCommodity', ProductRest_1.ShopCommodity.prototype)) || this;
        _this.quantity = _this.addFieldFilter("QUANTITY", converters_1.quantityConverter);
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        return _this;
    }
    return ShopCommodityQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ShopCommodityQuery = ShopCommodityQuery;
/**
 * @class module:productRest.StockCommoditySortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:productRest.StockCommoditySortOrder>} informF1RegId Регистрационный номер раздела справки 1
 * @property {FieldSorter<module:productRest.StockCommoditySortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldSorter<module:productRest.StockCommoditySortOrder>} quantity Количество
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:productRest.StockCommoditySortOrder>} productInfo Информация о продукции
 */
var StockCommoditySortOrder = /** @class */ (function (_super) {
    __extends(StockCommoditySortOrder, _super);
    function StockCommoditySortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.informF1RegId = _this.addFieldSorter("INFORM_F1_REG_ID");
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        _this.quantity = _this.addFieldSorter("QUANTITY");
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        return _this;
    }
    return StockCommoditySortOrder;
}(abstract_query_builder_1.SortOrder));
exports.StockCommoditySortOrder = StockCommoditySortOrder;
/**
 * @class module:productRest.StockCommodityQuery
 * @classdesc Класс для формирования запроса на получение информации о биржевых товарах.
 * @property {FieldFilter<string, module:productRest.StockCommodityQuery, module:productRest.StockCommoditySortOrder, module:productRest.StockCommodity>} informF1RegId Регистрационный номер раздела справки 1
 * @property {FieldFilter<string, module:productRest.StockCommodityQuery, module:productRest.StockCommoditySortOrder, module:productRest.StockCommodity>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldFilter<number, module:productRest.StockCommodityQuery, module:productRest.StockCommoditySortOrder, module:productRest.StockCommodity>} quantity Количество
 * @property {module:productInfo.ProductInfoFilter<module:productRest.StockCommodityQuery, module:productRest.StockCommoditySortOrder, module:productRest.StockCommodity>} productInfo Информация о продукции
 */
var StockCommodityQuery = /** @class */ (function (_super) {
    __extends(StockCommodityQuery, _super);
    function StockCommodityQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('StockCommodity', ProductRest_1.StockCommodity.prototype)) || this;
        _this.informF1RegId = _this.addFieldFilter("INFORM_F1_REG_ID");
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        _this.quantity = _this.addFieldFilter("QUANTITY", converters_1.quantityConverter);
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        return _this;
    }
    return StockCommodityQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.StockCommodityQuery = StockCommodityQuery;
