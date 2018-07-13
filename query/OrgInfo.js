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
var executor_1 = require("./executor");
var OrgInfoAddress_1 = require("./inner/OrgInfoAddress");
/**
 * @class module:orgInfo.OrgInfoSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} type Тип организации (Юридическое лицо/Индивидуальный предприниматель/Иностранец (исключая таможенный союз)/Таможенный союз)
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} clientRegId Код организации
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} fullName Наименование организации полное (в верхнем регистре)
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} shortName Наименование организации краткое (в верхнем регистре)
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} inn ИНН
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} kpp КПП
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} unp УНП для респ.Беларусь
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} rnn РНН(БИН/ИИН) для респ.Казахстан
 * @property {module:orgInfo.OrgInfoAddressSortOrder<module:orgInfo.OrgInfoSortOrder>} address Фактический адрес
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} state Статус: действующая или удалена
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} waybillVersion Версия протокола для накладных: 1, 2 или 3
 */
var OrgInfoSortOrder = /** @class */ (function (_super) {
    __extends(OrgInfoSortOrder, _super);
    function OrgInfoSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.type = _this.addFieldSorter("TYPE");
        _this.clientRegId = _this.addFieldSorter("CLIENT_REG_ID");
        _this.fullName = _this.addFieldSorter("FULL_NAME_UPPER_CASE");
        _this.shortName = _this.addFieldSorter("SHORT_NAME_UPPER_CASE");
        _this.inn = _this.addFieldSorter("INN");
        _this.kpp = _this.addFieldSorter("KPP");
        _this.unp = _this.addFieldSorter("UNP");
        _this.rnn = _this.addFieldSorter("RNN");
        _this.address = _this.addInnerSortOrder(new OrgInfoAddress_1.OrgInfoAddressSortOrder());
        _this.state = _this.addFieldSorter("STATE");
        _this.waybillVersion = _this.addFieldSorter("VERSION_WB");
        return _this;
    }
    return OrgInfoSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.OrgInfoSortOrder = OrgInfoSortOrder;
/**
 * @class module:orgInfo.OrgInfoQuery
 * @classdesc Класс для формирования запроса на информацию об организациях.
 * @property {FieldFilter<module:orgInfo#OrgType, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} type Тип организации (Юридическое лицо/Индивидуальный предприниматель/Иностранец (исключая таможенный союз)/Таможенный союз)
 * @property {FieldFilter<string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} clientRegId Код организации
 * @property {FieldFilter<string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} fullName Наименование организации полное (в верхнем регистре)
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} shortName Наименование организации краткое (в верхнем регистре)
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} inn ИНН
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} kpp КПП
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} unp УНП для респ.Беларусь
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} rnn РНН(БИН/ИИН) для респ.Казахстан
 * @property {module:orgInfo.OrgInfoAddressFilter<module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} address Фактический адрес
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} state Статус: действующая или удалена
 * @property {FieldFilter<?module:orgInfo#WaybillTypeUsed, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} waybillVersion Версия протокола для накладных: 1, 2 или 3
 */
var OrgInfoQuery = /** @class */ (function (_super) {
    __extends(OrgInfoQuery, _super);
    function OrgInfoQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('OrgInfo', OrgInfo_1.default.prototype, { address: OrgInfo_1.OrgInfoAddress.prototype })) || this;
        _this.type = _this.addFieldFilter("TYPE");
        _this.clientRegId = _this.addFieldFilter("CLIENT_REG_ID");
        _this.fullName = _this.addFieldFilter("FULL_NAME_UPPER_CASE");
        _this.shortName = _this.addFieldFilter("SHORT_NAME_UPPER_CASE");
        _this.inn = _this.addFieldFilter("INN");
        _this.kpp = _this.addFieldFilter("KPP");
        _this.unp = _this.addFieldFilter("UNP");
        _this.rnn = _this.addFieldFilter("RNN");
        _this.address = _this.addInnerFilterBuilder(new OrgInfoAddress_1.OrgInfoAddressFilter());
        _this.state = _this.addFieldFilter("STATE");
        _this.waybillVersion = _this.addFieldFilter("VERSION_WB");
        return _this;
    }
    return OrgInfoQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.OrgInfoQuery = OrgInfoQuery;
