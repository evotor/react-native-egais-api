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
var OrgInfo_1 = require("../model/dictionary/OrgInfo");
var defaultExecutor_1 = require("./defaultExecutor");
var OrgInfoAddress_1 = require("./inner/OrgInfoAddress");
/**
 * Класс для сортировки элементов в результе запроса
 */
var OrgInfoSortOrder = /** @class */ (function (_super) {
    __extends(OrgInfoSortOrder, _super);
    function OrgInfoSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Тип организации (Юридическое лицо/Индивидуальный предприниматель/Иностранец (исключая таможенный союз)/Таможенный союз)
         */
        _this.type = _this.addFieldSorter("TYPE");
        /**
         * Код организации
         */
        _this.clientRegId = _this.addFieldSorter("CLIENT_REG_ID");
        /**
         * Наименование организации полное (в верхнем регистре)
         */
        _this.fullName = _this.addFieldSorter("FULL_NAME_UPPER_CASE");
        /**
         * Наименование организации краткое (в верхнем регистре)
         */
        _this.shortName = _this.addFieldSorter("SHORT_NAME_UPPER_CASE");
        /**
         * ИНН
         */
        _this.inn = _this.addFieldSorter("INN");
        /**
         * КПП
         */
        _this.kpp = _this.addFieldSorter("KPP");
        /**
         * УНП для респ.Беларусь
         */
        _this.unp = _this.addFieldSorter("UNP");
        /**
         * РНН(БИН/ИИН) для респ.Казахстан
         */
        _this.rnn = _this.addFieldSorter("RNN");
        /**
         * Фактический адрес
         */
        _this.address = _this.addInnerSortOrder(new OrgInfoAddress_1.OrgInfoAddressSortOrder());
        /**
         * Статус: действующая или удалена
         */
        _this.state = _this.addFieldSorter("STATE");
        /**
         * Версия протокола для накладных: 1, 2 или 3
         */
        _this.waybillVersion = _this.addFieldSorter("VERSION_WB");
        return _this;
    }
    return OrgInfoSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.OrgInfoSortOrder = OrgInfoSortOrder;
/**
 * Класс для формирования запроса на информацию об организациях
 */
var OrgInfoQuery = /** @class */ (function (_super) {
    __extends(OrgInfoQuery, _super);
    function OrgInfoQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('OrgInfo', OrgInfo_1.default.prototype, { address: OrgInfo_1.OrgInfoAddress.prototype })) || this;
        /**
         * Тип организации (Юридическое лицо/Индивидуальный предприниматель/Иностранец (исключая таможенный союз)/Таможенный союз)
         */
        _this.type = _this.addFieldFilter("TYPE");
        /**
         * Код организации
         */
        _this.clientRegId = _this.addFieldFilter("CLIENT_REG_ID");
        /**
         * Наименование организации полное (в верхнем регистре)
         */
        _this.fullName = _this.addFieldFilter("FULL_NAME_UPPER_CASE");
        /**
         * Наименование организации краткое (в верхнем регистре)
         */
        _this.shortName = _this.addFieldFilter("SHORT_NAME_UPPER_CASE");
        /**
         * ИНН
         */
        _this.inn = _this.addFieldFilter("INN");
        /**
         * КПП
         */
        _this.kpp = _this.addFieldFilter("KPP");
        /**
         * УНП для респ.Беларусь
         */
        _this.unp = _this.addFieldFilter("UNP");
        /**
         * РНН(БИН/ИИН) для респ.Казахстан
         */
        _this.rnn = _this.addFieldFilter("RNN");
        /**
         * Фактический адрес
         */
        _this.address = _this.addInnerFilterBuilder(new OrgInfoAddress_1.OrgInfoAddressFilter());
        /**
         * Статус: действующая или удалена
         */
        _this.state = _this.addFieldFilter("STATE");
        /**
         * Версия протокола для накладных: 1, 2 или 3
         */
        _this.waybillVersion = _this.addFieldFilter("VERSION_WB");
        return _this;
    }
    return OrgInfoQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.OrgInfoQuery = OrgInfoQuery;
