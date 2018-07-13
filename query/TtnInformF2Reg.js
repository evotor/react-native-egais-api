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
var TtnInformF2Reg_1 = require("../model/document/TtnInformF2Reg");
var executor_1 = require("./executor");
/**
 * @class module:waybill.TtnInformF2RegSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} uuid Уникальный идентификатор справки 2 информации о предыдущих отгрузках
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} owner Кто подает документы
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} identity Идентификатор документа (клиентский)
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} wbRegId ИД накладной в системе (присвоенный)
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} egaisFixNumber Номер фиксации накладной(отгрузки) в ЕГАИС
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} egaisFixDate Дата составления накладной(отгрузки) в ЕГАИС
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} wbNumber Номер накладной
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} wbDate Дата составления накладной
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} shipperId Грузоотправитель
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} consigneeId Грузоотправитель
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} supplierId Поставщик
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} waybillId Уникальный идентификатор ТТН
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} status Текущий статус справки 2
 */
var TtnInformF2RegSortOrder = /** @class */ (function (_super) {
    __extends(TtnInformF2RegSortOrder, _super);
    function TtnInformF2RegSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.owner = _this.addFieldSorter("OWNER");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.wbRegId = _this.addFieldSorter("WB_REG_ID");
        _this.egaisFixNumber = _this.addFieldSorter("EGAIS_FIX_NUMBER");
        _this.egaisFixDate = _this.addFieldSorter("EGAIS_FIX_DATE");
        _this.wbNumber = _this.addFieldSorter("WB_NUMBER");
        _this.wbDate = _this.addFieldSorter("WB_DATE");
        _this.shipperId = _this.addFieldSorter("SHIPPER_ID");
        _this.consigneeId = _this.addFieldSorter("CONSIGNEE_ID");
        _this.supplierId = _this.addFieldSorter("SUPPLIER_ID");
        _this.waybillId = _this.addFieldSorter("WAY_BILL_ID");
        _this.status = _this.addFieldSorter("STATUS");
        return _this;
    }
    return TtnInformF2RegSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TtnInformF2RegSortOrder = TtnInformF2RegSortOrder;
/**
 * @class module:waybill.TtnInformF2RegQuery
 * @classdesc Класс для формирования запроса на получение справок 2 к ТТН.
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} uuid Уникальный идентификатор справки 2 информации о предыдущих отгрузках
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} owner Кто подает документы
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} identity Идентификатор документа (клиентский)
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} wbRegId ИД накладной в системе (присвоенный)
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} egaisFixNumber Номер фиксации накладной(отгрузки) в ЕГАИС
 * @property {FieldFilter<Date, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} egaisFixDate Дата составления накладной(отгрузки) в ЕГАИС
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} wbNumber Номер накладной
 * @property {FieldFilter<Date, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} wbDate Дата составления накладной
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} shipperId Грузоотправитель
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} consigneeId Грузоотправитель
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} supplierId Поставщик
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} waybillId Уникальный идентификатор ТТН
 * @property {FieldFilter<module:waybill#TtnInformF2RegStatus, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} status Текущий статус справки 2
 */
var TtnInformF2RegQuery = /** @class */ (function (_super) {
    __extends(TtnInformF2RegQuery, _super);
    function TtnInformF2RegQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('TtnInformF2Reg', TtnInformF2Reg_1.default.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.owner = _this.addFieldFilter("OWNER");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.wbRegId = _this.addFieldFilter("WB_REG_ID");
        _this.egaisFixNumber = _this.addFieldFilter("EGAIS_FIX_NUMBER");
        _this.egaisFixDate = _this.addFieldFilter("EGAIS_FIX_DATE");
        _this.wbNumber = _this.addFieldFilter("WB_NUMBER");
        _this.wbDate = _this.addFieldFilter("WB_DATE");
        _this.shipperId = _this.addFieldFilter("SHIPPER_ID");
        _this.consigneeId = _this.addFieldFilter("CONSIGNEE_ID");
        _this.supplierId = _this.addFieldFilter("SUPPLIER_ID");
        _this.waybillId = _this.addFieldFilter("WAY_BILL_ID");
        _this.status = _this.addFieldFilter("STATUS");
        return _this;
    }
    return TtnInformF2RegQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = TtnInformF2RegQuery;
/**
 * @class module:waybill.TtnInformF2RegPositionSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybill.TtnInformF2RegPositionSortOrder>} uuid Уникальный идентификатор позиции
 * @property {FieldSorter<module:waybill.TtnInformF2RegPositionSortOrder>} ttnInformF2RegUuid Уникальный идентификатор справки 2
 * @property {FieldSorter<module:waybill.TtnInformF2RegPositionSortOrder>} identity Идентификатор позиции внутри накладной
 * @property {FieldSorter<module:waybill.TtnInformF2RegPositionSortOrder>} informF2RegId Регистрационный номер записи справки 2
 */
var TtnInformF2RegPositionSortOrder = /** @class */ (function (_super) {
    __extends(TtnInformF2RegPositionSortOrder, _super);
    function TtnInformF2RegPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.ttnInformF2RegUuid = _this.addFieldSorter("TTN_INFORM_F2_REG_ID");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        return _this;
    }
    return TtnInformF2RegPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TtnInformF2RegPositionSortOrder = TtnInformF2RegPositionSortOrder;
/**
 * @class module:waybill.TtnInformF2RegPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций акта списания из магазина.
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegPositionQuery, module:waybill.TtnInformF2RegPositionSortOrder, module:waybill.TtnInformF2RegPosition>} uuid Уникальный идентификатор позиции
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegPositionQuery, module:waybill.TtnInformF2RegPositionSortOrder, module:waybill.TtnInformF2RegPosition>} ttnInformF2RegUuid Уникальный идентификатор справки 2
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegPositionQuery, module:waybill.TtnInformF2RegPositionSortOrder, module:waybill.TtnInformF2RegPosition>} identity Идентификатор позиции внутри накладной
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegPositionQuery, module:waybill.TtnInformF2RegPositionSortOrder, module:waybill.TtnInformF2RegPosition>} informF2RegId Регистрационный номер записи справки 2
 */
var TtnInformF2RegPositionQuery = /** @class */ (function (_super) {
    __extends(TtnInformF2RegPositionQuery, _super);
    function TtnInformF2RegPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('TtnInformF2RegPosition', TtnInformF2Reg_1.TtnInformF2RegPosition.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.ttnInformF2RegUuid = _this.addFieldFilter("TTN_INFORM_F2_REG_ID");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        return _this;
    }
    return TtnInformF2RegPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.TtnInformF2RegPositionQuery = TtnInformF2RegPositionQuery;
