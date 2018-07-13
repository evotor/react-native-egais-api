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
/**
 * @class module:productInfo.ProductInfoInnerSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @template S Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<S>} type Тип продукции (АП | ССП | ССНП | Спирт)
 * @property {FieldSorter<S>} fullName Наименование продукции полное (в верхнем регистре)
 * @property {FieldSorter<S>} shortName Наименование продукции краткое (в верхнем регистре)
 * @property {FieldSorter<S>} alcCode Код продукции согласно ЕГАИС
 * @property {FieldSorter<S>} capacity Емкость упаковки продукции согласно ЕГАИС
 * @property {FieldSorter<S>} alcVolume Содержание этилового спирта, %
 * @property {FieldSorter<S>} producerId Производитель
 * @property {FieldSorter<S>} importerId Импортер
 * @property {FieldSorter<S>} productVCode Код вида продукции
 */
var ProductInfoInnerSortOrder = /** @class */ (function (_super) {
    __extends(ProductInfoInnerSortOrder, _super);
    function ProductInfoInnerSortOrder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
    return ProductInfoInnerSortOrder;
}(abstract_query_builder_1.InnerSortOrder));
exports.ProductInfoInnerSortOrder = ProductInfoInnerSortOrder;
/**
 * @class module:productInfo.ProductInfoFilter
 * @classdesc Класс для фильтрации информации о продукции.
 * @template Q Класс для формирования запроса.
 * @template S Класс для сортировки элементов в результе запроса.
 * @template R Результат запроса.
 * @property {FieldFilter<module:productInfo#ProductType, Q, S, R>} type Тип продукции (АП | ССП | ССНП | Спирт)
 * @property {FieldFilter<?string, Q, S, R>} fullName Наименование продукции полное (в верхнем регистре)
 * @property {FieldFilter<?string, Q, S, R>} shortName Наименование продукции краткое (в верхнем регистре)
 * @property {FieldFilter<string, Q, S, R>} alcCode Код продукции согласно ЕГАИС
 * @property {FieldFilter<?string, Q, S, R>} capacity Емкость упаковки продукции согласно ЕГАИС
 * @property {FieldFilter<?string, Q, S, R>} alcVolume Содержание этилового спирта, %
 * @property {FieldFilter<?string, Q, S, R>} producerId Производитель
 * @property {FieldFilter<?string, Q, S, R>} importerId Импортер
 * @property {FieldFilter<?string, Q, S, R>} productVCode Код вида продукции
 */
var ProductInfoFilter = /** @class */ (function (_super) {
    __extends(ProductInfoFilter, _super);
    function ProductInfoFilter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
    return ProductInfoFilter;
}(abstract_query_builder_1.InnerFilterBuilder));
exports.ProductInfoFilter = ProductInfoFilter;
