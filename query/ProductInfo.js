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
var defaultExecutor_1 = require("./defaultExecutor");
/**
 * Класс для сортировки элементов в результе запроса
 */
var ProductInfoSortOrder = /** @class */ (function (_super) {
    __extends(ProductInfoSortOrder, _super);
    function ProductInfoSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Тип продукции (АП | ССП | ССНП | Спирт).
         */
        _this.type = _this.addFieldSorter("TYPE");
        /**
         * Наименование продукции полное (в верхнем регистре).
         */
        _this.fullName = _this.addFieldSorter("FULL_NAME_UPPER_CASE");
        /**
         * Наименование продукции краткое (в верхнем регистре).
         */
        _this.shortName = _this.addFieldSorter("SHORT_NAME_UPPER_CASE");
        /**
         * Код продукции согласно ЕГАИС.
         */
        _this.alcCode = _this.addFieldSorter("ALC_CODE");
        /**
         * Емкость упаковки продукции согласно ЕГАИС.
         */
        _this.capacity = _this.addFieldSorter("CAPACITY");
        /**
         * Содержание этилового спирта, %.
         */
        _this.alcVolume = _this.addFieldSorter("ALC_VOLUME");
        /**
         * Производитель.
         */
        _this.producerId = _this.addFieldSorter("PRODUCER_CLIENT_REG_ID");
        /**
         * Импортер.
         */
        _this.importerId = _this.addFieldSorter("IMPORTER_CLIENT_REG_ID");
        /**
         * Код вида продукции.
         */
        _this.productVCode = _this.addFieldSorter("PRODUCT_V_CODE");
        return _this;
    }
    return ProductInfoSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ProductInfoSortOrder = ProductInfoSortOrder;
/**
 * Класс для формирования запроса на информацию о товарах
 */
var ProductInfoQuery = /** @class */ (function (_super) {
    __extends(ProductInfoQuery, _super);
    function ProductInfoQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ProductInfo', ProductInfo_1.default.prototype)) || this;
        /**
         * Тип продукции (АП | ССП | ССНП | Спирт).
         */
        _this.type = _this.addFieldFilter("TYPE");
        /**
         * Наименование продукции полное (в верхнем регистре).
         */
        _this.fullName = _this.addFieldFilter("FULL_NAME_UPPER_CASE");
        /**
         * Наименование продукции краткое (в верхнем регистре).
         */
        _this.shortName = _this.addFieldFilter("SHORT_NAME_UPPER_CASE");
        /**
         * Код продукции согласно ЕГАИС.
         */
        _this.alcCode = _this.addFieldFilter("ALC_CODE");
        /**
         * Емкость упаковки продукции согласно ЕГАИС.
         */
        _this.capacity = _this.addFieldFilter("CAPACITY");
        /**
         * Содержание этилового спирта, %.
         */
        _this.alcVolume = _this.addFieldFilter("ALC_VOLUME");
        /**
         * Производитель.
         */
        _this.producerId = _this.addFieldFilter("PRODUCER_CLIENT_REG_ID");
        /**
         * Импортер.
         */
        _this.importerId = _this.addFieldFilter("IMPORTER_CLIENT_REG_ID");
        /**
         * Код вида продукции.
         */
        _this.productVCode = _this.addFieldFilter("PRODUCT_V_CODE");
        return _this;
    }
    return ProductInfoQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ProductInfoQuery = ProductInfoQuery;
