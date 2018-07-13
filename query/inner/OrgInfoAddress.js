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
 * @class module:orgInfo.OrgInfoAddressSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @template S Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<S>} country Страна
 * @property {FieldSorter<S>} index Индекс
 * @property {FieldSorter<S>} regionCode Код региона
 * @property {FieldSorter<S>} area Область
 * @property {FieldSorter<S>} city Город
 * @property {FieldSorter<S>} place Район
 * @property {FieldSorter<S>} street Улица
 * @property {FieldSorter<S>} house Дом
 * @property {FieldSorter<S>} building Строение
 * @property {FieldSorter<S>} liter Литера
 * @property {FieldSorter<S>} description Описание
 */
var OrgInfoAddressSortOrder = /** @class */ (function (_super) {
    __extends(OrgInfoAddressSortOrder, _super);
    function OrgInfoAddressSortOrder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.country = _this.addFieldSorter("ADDRESS_COUNTRY");
        _this.index = _this.addFieldSorter("ADDRESS_INDEX");
        _this.regionCode = _this.addFieldSorter("ADDRESS_REGION_CODE");
        _this.area = _this.addFieldSorter("ADDRESS_AREA");
        _this.city = _this.addFieldSorter("ADDRESS_CITY");
        _this.place = _this.addFieldSorter("ADDRESS_PLACE");
        _this.street = _this.addFieldSorter("ADDRESS_STREET");
        _this.house = _this.addFieldSorter("ADDRESS_HOUSE");
        _this.building = _this.addFieldSorter("ADDRESS_BUILDING");
        _this.liter = _this.addFieldSorter("ADDRESS_LITER");
        _this.description = _this.addFieldSorter("ADDRESS_DESCRIPTION");
        return _this;
    }
    return OrgInfoAddressSortOrder;
}(abstract_query_builder_1.InnerSortOrder));
exports.OrgInfoAddressSortOrder = OrgInfoAddressSortOrder;
/**
 * @class module:orgInfo.OrgInfoAddressFilter
 * @classdesc Класс для фильтрации информации об адресе организации.
 * @template Q Класс для формирования запроса.
 * @template S Класс для сортировки элементов в результе запроса.
 * @template R Результат запроса.
 * @property {FieldFilter<?string, Q, S, R>} country Страна
 * @property {FieldFilter<?string, Q, S, R>} index Индекс
 * @property {FieldFilter<?string, Q, S, R>} regionCode Код региона
 * @property {FieldFilter<?string, Q, S, R>} area Область
 * @property {FieldFilter<?string, Q, S, R>} city Город
 * @property {FieldFilter<?string, Q, S, R>} place Район
 * @property {FieldFilter<?string, Q, S, R>} street Улица
 * @property {FieldFilter<?string, Q, S, R>} house Дом
 * @property {FieldFilter<?string, Q, S, R>} building Строение
 * @property {FieldFilter<?string, Q, S, R>} liter Литера
 * @property {FieldFilter<?string, Q, S, R>} description Описание
 */
var OrgInfoAddressFilter = /** @class */ (function (_super) {
    __extends(OrgInfoAddressFilter, _super);
    function OrgInfoAddressFilter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.country = _this.addFieldFilter("ADDRESS_COUNTRY");
        _this.index = _this.addFieldFilter("ADDRESS_INDEX");
        _this.regionCode = _this.addFieldFilter("ADDRESS_REGION_CODE");
        _this.area = _this.addFieldFilter("ADDRESS_AREA");
        _this.city = _this.addFieldFilter("ADDRESS_CITY");
        _this.place = _this.addFieldFilter("ADDRESS_PLACE");
        _this.street = _this.addFieldFilter("ADDRESS_STREET");
        _this.house = _this.addFieldFilter("ADDRESS_HOUSE");
        _this.building = _this.addFieldFilter("ADDRESS_BUILDING");
        _this.liter = _this.addFieldFilter("ADDRESS_LITER");
        _this.description = _this.addFieldFilter("ADDRESS_DESCRIPTION");
        return _this;
    }
    return OrgInfoAddressFilter;
}(abstract_query_builder_1.InnerFilterBuilder));
exports.OrgInfoAddressFilter = OrgInfoAddressFilter;
