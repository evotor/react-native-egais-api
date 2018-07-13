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
var WaybillAct_1 = require("../model/document/WaybillAct");
var converters_1 = require("./converters");
var executor_1 = require("./executor");
/**
 * @class module:waybillAct.WaybillActSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} uuid Уникальный идентификатор акта
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} docOwner Кто подает документы
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} identity Идентификатор акта (клиентский)
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} acceptType Тип подтверждения: Принимаем/есть расхождения/отказываем
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} number Номер акта
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} creationDate Дата составления акта
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} wbRegId Идентификатор накладной в системе
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} note Заметки
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} type Тип приемки: Полная/частичная
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} version Версия протокола ЕГАИС
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} status Статус накладной
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} rejectComment Комментарий для отказа
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var WaybillActSortOrder = /** @class */ (function (_super) {
    __extends(WaybillActSortOrder, _super);
    function WaybillActSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.docOwner = _this.addFieldSorter("OWNER");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.acceptType = _this.addFieldSorter("ACCEPT_TYPE");
        _this.number = _this.addFieldSorter("NUMBER");
        _this.creationDate = _this.addFieldSorter("CREATION_DATE");
        _this.wbRegId = _this.addFieldSorter("WB_REG_ID");
        _this.note = _this.addFieldSorter("NOTE");
        _this.type = _this.addFieldSorter("TYPE");
        _this.version = _this.addFieldSorter("VERSION");
        _this.status = _this.addFieldSorter("STATUS");
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        _this.replyId = _this.addFieldSorter("REPLY_ID");
        return _this;
    }
    return WaybillActSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillActSortOrder = WaybillActSortOrder;
/**
 * @class module:waybillAct.WaybillActQuery
 * @classdesc Класс для формирования запроса на получение актов ТТН.
 * @property {FieldFilter<string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} uuid Уникальный идентификатор акта
 * @property {FieldFilter<string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} docOwner Кто подает документы
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} identity Идентификатор акта (клиентский)
 * @property {FieldFilter<module:waybillAct#AcceptType, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} acceptType Тип подтверждения: Принимаем/есть расхождения/отказываем
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} number Номер акта
 * @property {FieldFilter<Date, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} creationDate Дата составления акта
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} wbRegId Идентификатор накладной в системе
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} note Заметки
 * @property {FieldFilter<?module:waybillAct#WaybillActType, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} type Тип акта расхождения к ТТН: Полный/Частичный
 * @property {FieldFilter<?Version, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} version Версия протокола ЕГАИС
 * @property {FieldFilter<module:waybillAct#WaybillActStatus, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} status Статус акта разногласия для ТТН
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} rejectComment Комментарий для отказа
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var WaybillActQuery = /** @class */ (function (_super) {
    __extends(WaybillActQuery, _super);
    function WaybillActQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('WayBillAct', WaybillAct_1.default.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.docOwner = _this.addFieldFilter("OWNER");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.acceptType = _this.addFieldFilter("ACCEPT_TYPE");
        _this.number = _this.addFieldFilter("NUMBER");
        _this.creationDate = _this.addFieldFilter("CREATION_DATE");
        _this.wbRegId = _this.addFieldFilter("WB_REG_ID");
        _this.note = _this.addFieldFilter("NOTE");
        _this.type = _this.addFieldFilter("TYPE");
        _this.version = _this.addFieldFilter("VERSION");
        _this.status = _this.addFieldFilter("STATUS");
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return WaybillActQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = WaybillActQuery;
/**
 * @class module:waybillAct.WaybillActPositionSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} uuid Уникальный идентификатор позиции акта
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} waybillActUuid Уникальный идентификатор акта, содержащего позицию
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} identity Идентификатор позиции внутри накладной
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} realQuantity Количество
 */
var WaybillActPositionSortOrder = /** @class */ (function (_super) {
    __extends(WaybillActPositionSortOrder, _super);
    function WaybillActPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.waybillActUuid = _this.addFieldSorter("WAY_BILL_ACT_UUID");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        _this.realQuantity = _this.addFieldSorter("REAL_QUANTITY");
        return _this;
    }
    return WaybillActPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillActPositionSortOrder = WaybillActPositionSortOrder;
/**
 * @class module:waybillAct.WaybillActPositionQuery
 * @classdesc Класс для формирования запроса на получение позиицй акта ТТН.
 * @property {FieldFilter<string, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} uuid Уникальный идентификатор позиции акта
 * @property {FieldFilter<string, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} waybillActUuid Уникальный идентификатор акта, содержащего позицию
 * @property {FieldFilter<string, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} identity Идентификатор позиции внутри накладной
 * @property {FieldFilter<?string, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldFilter<number, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} realQuantity Количество
 */
var WaybillActPositionQuery = /** @class */ (function (_super) {
    __extends(WaybillActPositionQuery, _super);
    function WaybillActPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('WayBillActPosition', WaybillAct_1.WaybillActPosition.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.waybillActUuid = _this.addFieldFilter("WAY_BILL_ACT_UUID");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        _this.realQuantity = _this.addFieldFilter("REAL_QUANTITY", converters_1.quantityConverter);
        return _this;
    }
    return WaybillActPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.WaybillActPositionQuery = WaybillActPositionQuery;
/**
 * @class module:waybillAct.WaybillActPositionMarkSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybillAct.WaybillActPositionMarkSortOrder>} waybillActPositionUuid Уникальный идентификатор позиции акта ТТН
 * @property {FieldSorter<module:waybillAct.WaybillActPositionMarkSortOrder>} mark Марка
 */
var WaybillActPositionMarkSortOrder = /** @class */ (function (_super) {
    __extends(WaybillActPositionMarkSortOrder, _super);
    function WaybillActPositionMarkSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.waybillActPositionUuid = _this.addFieldSorter("WAY_BILL_ACT_POSITION_UUID");
        _this.mark = _this.addFieldSorter("MARK");
        return _this;
    }
    return WaybillActPositionMarkSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillActPositionMarkSortOrder = WaybillActPositionMarkSortOrder;
/**
 * @class module:waybillAct.WaybillActPositionMarkQuery
 * @classdesc Класс для формирования запроса на получение марок позиций акта ТТН.
 * @property {FieldFilter<?string, module:waybillAct.WaybillActPositionMarkQuery, module:waybillAct.WaybillActPositionMarkSortOrder, module:waybillAct.WaybillActPositionMark>} waybillActPositionUuid Уникальный идентификатор позиции акта ТТН
 * @property {FieldFilter<string, module:waybillAct.WaybillActPositionMarkQuery, module:waybillAct.WaybillActPositionMarkSortOrder, module:waybillAct.WaybillActPositionMark>} mark Марка
 */
var WaybillActPositionMarkQuery = /** @class */ (function (_super) {
    __extends(WaybillActPositionMarkQuery, _super);
    function WaybillActPositionMarkQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('WayBillActPositionMark', WaybillAct_1.WaybillActPositionMark.prototype)) || this;
        _this.waybillActPositionUuid = _this.addFieldFilter("WAY_BILL_ACT_POSITION_UUID");
        _this.mark = _this.addFieldFilter("MARK");
        return _this;
    }
    return WaybillActPositionMarkQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.WaybillActPositionMarkQuery = WaybillActPositionMarkQuery;
