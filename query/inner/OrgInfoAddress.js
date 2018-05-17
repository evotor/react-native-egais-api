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
 * Класс для сортировки элементов в результе запроса
 */
var OrgInfoAddressSortOrder = /** @class */ (function (_super) {
    __extends(OrgInfoAddressSortOrder, _super);
    function OrgInfoAddressSortOrder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Страна
         */
        _this.country = _this.addFieldSorter("ADDRESS_COUNTRY");
        /**
         * Индекс
         */
        _this.index = _this.addFieldSorter("ADDRESS_INDEX");
        /**
         * Код региона
         */
        _this.regionCode = _this.addFieldSorter("ADDRESS_REGION_CODE");
        /**
         * Область
         */
        _this.area = _this.addFieldSorter("ADDRESS_AREA");
        /**
         * Город
         */
        _this.city = _this.addFieldSorter("ADDRESS_CITY");
        /**
         * Район
         */
        _this.place = _this.addFieldSorter("ADDRESS_PLACE");
        /**
         * Улица
         */
        _this.street = _this.addFieldSorter("ADDRESS_STREET");
        /**
         * Дом
         */
        _this.house = _this.addFieldSorter("ADDRESS_HOUSE");
        /**
         * Строение
         */
        _this.building = _this.addFieldSorter("ADDRESS_BUILDING");
        /**
         * Литера
         */
        _this.liter = _this.addFieldSorter("ADDRESS_LITER");
        /**
         * Описание
         */
        _this.description = _this.addFieldSorter("ADDRESS_DESCRIPTION");
        return _this;
    }
    return OrgInfoAddressSortOrder;
}(abstract_query_builder_1.InnerSortOrder));
exports.OrgInfoAddressSortOrder = OrgInfoAddressSortOrder;
/**
 * Класс для фильтрации информации о товаре
 */
var OrgInfoAddressFilter = /** @class */ (function (_super) {
    __extends(OrgInfoAddressFilter, _super);
    function OrgInfoAddressFilter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Страна
         */
        _this.country = _this.addFieldFilter("ADDRESS_COUNTRY");
        /**
         * Индекс
         */
        _this.index = _this.addFieldFilter("ADDRESS_INDEX");
        /**
         * Код региона
         */
        _this.regionCode = _this.addFieldFilter("ADDRESS_REGION_CODE");
        /**
         * Область
         */
        _this.area = _this.addFieldFilter("ADDRESS_AREA");
        /**
         * Город
         */
        _this.city = _this.addFieldFilter("ADDRESS_CITY");
        /**
         * Район
         */
        _this.place = _this.addFieldFilter("ADDRESS_PLACE");
        /**
         * Улица
         */
        _this.street = _this.addFieldFilter("ADDRESS_STREET");
        /**
         * Дом
         */
        _this.house = _this.addFieldFilter("ADDRESS_HOUSE");
        /**
         * Строение
         */
        _this.building = _this.addFieldFilter("ADDRESS_BUILDING");
        /**
         * Литера
         */
        _this.liter = _this.addFieldFilter("ADDRESS_LITER");
        /**
         * Описание
         */
        _this.description = _this.addFieldFilter("ADDRESS_DESCRIPTION");
        return _this;
    }
    return OrgInfoAddressFilter;
}(abstract_query_builder_1.InnerFilterBuilder));
exports.OrgInfoAddressFilter = OrgInfoAddressFilter;
