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
var ProductInfo_1 = require("../model/dictionary/ProductInfo");
var executor_1 = require("./executor");
/**
 * @class module:productInfo.ProductInfoSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} type Тип продукции (АП | ССП | ССНП | Спирт)
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} fullName Наименование продукции полное (в верхнем регистре)
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} shortName Наименование продукции краткое (в верхнем регистре)
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} alcCode Код продукции согласно ЕГАИС
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} capacity Емкость упаковки продукции согласно ЕГАИС
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} alcVolume Содержание этилового спирта, %
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} producerId Производитель
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} importerId Импортер
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} productVCode Код вида продукции
 */
var ProductInfoSortOrder = /** @class */ (function (_super) {
    __extends(ProductInfoSortOrder, _super);
    function ProductInfoSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.type = _this.addFieldSorter("TYPE");
        _this.fullName = _this.addFieldSorter("FULL_NAME_UPPER_CASE");
        _this.shortName = _this.addFieldSorter("SHORT_NAME_UPPER_CASE");
        _this.alcCode = _this.addFieldSorter("ALC_CODE");
        _this.capacity = _this.addFieldSorter("CAPACITY");
        _this.alcVolume = _this.addFieldSorter("ALC_VOLUME");
        _this.producerId = _this.addFieldSorter("PRODUCER_CLIENT_REG_ID");
        _this.importerId = _this.addFieldSorter("IMPORTER_CLIENT_REG_ID");
        _this.productVCode = _this.addFieldSorter("PRODUCT_V_CODE");
        return _this;
    }
    return ProductInfoSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ProductInfoSortOrder = ProductInfoSortOrder;
/**
 * @class module:productInfo.ProductInfoQuery
 * @classdesc Класс для формирования запроса на получение информации о продукции.
 * @property {FieldFilter<module:productInfo#ProductType, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} type Тип продукции (АП | ССП | ССНП | Спирт)
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} fullName Наименование продукции полное (в верхнем регистре)
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} shortName Наименование продукции краткое (в верхнем регистре)
 * @property {FieldFilter<string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} alcCode Код продукции согласно ЕГАИС
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} capacity Емкость упаковки продукции согласно ЕГАИС
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} alcVolume Содержание этилового спирта, %
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} producerId Производитель
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} importerId Импортер
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} productVCode Код вида продукции
 */
var ProductInfoQuery = /** @class */ (function (_super) {
    __extends(ProductInfoQuery, _super);
    function ProductInfoQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ProductInfo', ProductInfo_1.default.prototype)) || this;
        _this.type = _this.addFieldFilter("TYPE");
        _this.fullName = _this.addFieldFilter("FULL_NAME_UPPER_CASE");
        _this.shortName = _this.addFieldFilter("SHORT_NAME_UPPER_CASE");
        _this.alcCode = _this.addFieldFilter("ALC_CODE");
        _this.capacity = _this.addFieldFilter("CAPACITY");
        _this.alcVolume = _this.addFieldFilter("ALC_VOLUME");
        _this.producerId = _this.addFieldFilter("PRODUCER_CLIENT_REG_ID");
        _this.importerId = _this.addFieldFilter("IMPORTER_CLIENT_REG_ID");
        _this.productVCode = _this.addFieldFilter("PRODUCT_V_CODE");
        return _this;
    }
    return ProductInfoQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ProductInfoQuery = ProductInfoQuery;
