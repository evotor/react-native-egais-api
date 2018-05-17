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
var defaultExecutor_1 = require("./defaultExecutor");
var WaybillAct_1 = require("../model/document/WaybillAct");
/**
 * Класс для сортировки элементов в результе запроса
 */
var WaybillActSortOrder = /** @class */ (function (_super) {
    __extends(WaybillActSortOrder, _super);
    function WaybillActSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор акта
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Кто подает документы
         */
        _this.docOwner = _this.addFieldSorter("OWNER");
        /**
         * Идентификатор акта (клиентский)
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Тип подтверждения: Принимаем/есть расхождения/отказываем
         */
        _this.acceptType = _this.addFieldSorter("ACCEPT_TYPE");
        /**
         * Номер акта
         */
        _this.number = _this.addFieldSorter("NUMBER");
        /**
         * Дата составления акта
         */
        _this.creationDate = _this.addFieldSorter("CREATION_DATE");
        /**
         * Идентификатор накладной в системе
         */
        _this.wbRegId = _this.addFieldSorter("WB_REG_ID");
        /**
         * Заметки
         */
        _this.note = _this.addFieldSorter("NOTE");
        /**
         * Тип приемки: Полная/частичная
         */
        _this.type = _this.addFieldSorter("TYPE");
        /**
         * Версия протокола ЕГАИС
         */
        _this.version = _this.addFieldSorter("VERSION");
        /**
         * Статус накладной
         */
        _this.status = _this.addFieldSorter("STATUS");
        /**
         * Комментарий для отказа
         */
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        /**
         * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
         */
        _this.replyId = _this.addFieldSorter("REPLY_ID");
        return _this;
    }
    return WaybillActSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillActSortOrder = WaybillActSortOrder;
/**
 * Класс для формирования запроса на получение актов ТТН
 */
var WaybillActQuery = /** @class */ (function (_super) {
    __extends(WaybillActQuery, _super);
    function WaybillActQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('WayBillAct', WaybillAct_1.default.prototype)) || this;
        /**
         * Уникальный идентификатор акта
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Кто подает документы
         */
        _this.docOwner = _this.addFieldFilter("OWNER");
        /**
         * Идентификатор акта (клиентский)
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Тип подтверждения: Принимаем/есть расхождения/отказываем
         */
        _this.acceptType = _this.addFieldFilter("ACCEPT_TYPE");
        /**
         * Номер акта
         */
        _this.number = _this.addFieldFilter("NUMBER");
        /**
         * Дата составления акта
         */
        _this.creationDate = _this.addFieldFilter("CREATION_DATE");
        /**
         * Идентификатор накладной в системе
         */
        _this.wbRegId = _this.addFieldFilter("WB_REG_ID");
        /**
         * Заметки
         */
        _this.note = _this.addFieldFilter("NOTE");
        /**
         * Тип приемки: Полная/частичная
         */
        _this.type = _this.addFieldFilter("TYPE");
        /**
         * Версия протокола ЕГАИС
         */
        _this.version = _this.addFieldFilter("VERSION");
        /**
         * Статус накладной
         */
        _this.status = _this.addFieldFilter("STATUS");
        /**
         * Комментарий для отказа
         */
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        /**
         * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
         */
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return WaybillActQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = WaybillActQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var WaybillActPositionSortOrder = /** @class */ (function (_super) {
    __extends(WaybillActPositionSortOrder, _super);
    function WaybillActPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор позиции
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Уникальный идентификатор акта, содержащего позицию
         */
        _this.waybillActUuid = _this.addFieldSorter("WAY_BILL_ACT_UUID");
        /**
         * Идентификатор позиции внутри накладной
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Регистрационный номер раздела справки 2
         */
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        /**
         * Количество
         */
        _this.realQuantity = _this.addFieldSorter("REAL_QUANTITY");
        return _this;
    }
    return WaybillActPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillActPositionSortOrder = WaybillActPositionSortOrder;
/**
 * Класс для формирования запроса на получение позиицй акта ТТН
 */
var WaybillActPositionQuery = /** @class */ (function (_super) {
    __extends(WaybillActPositionQuery, _super);
    function WaybillActPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('WayBillActPosition', WaybillAct_1.WaybillActPosition.prototype)) || this;
        /**
         * Уникальный идентификатор позиции
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Уникальный идентификатор акта, содержащего позицию
         */
        _this.waybillActUuid = _this.addFieldFilter("WAY_BILL_ACT_UUID");
        /**
         * Идентификатор позиции внутри накладной
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Регистрационный номер раздела справки 2
         */
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        /**
         * Количество
         */
        _this.realQuantity = _this.addFieldFilter("REAL_QUANTITY", function (v) { return v * 1000; });
        return _this;
    }
    return WaybillActPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.WaybillActPositionQuery = WaybillActPositionQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var WaybillActPositionMarkSortOrder = /** @class */ (function (_super) {
    __extends(WaybillActPositionMarkSortOrder, _super);
    function WaybillActPositionMarkSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор позиции акта ТТН
         */
        _this.waybillActPositionUuid = _this.addFieldSorter("WAY_BILL_ACT_POSITION_UUID");
        /**
         * Марка
         */
        _this.mark = _this.addFieldSorter("MARK");
        return _this;
    }
    return WaybillActPositionMarkSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillActPositionMarkSortOrder = WaybillActPositionMarkSortOrder;
/**
 * Класс для формирования запроса на получение марок позиций акта ТТН
 */
var WaybillActPositionMarkQuery = /** @class */ (function (_super) {
    __extends(WaybillActPositionMarkQuery, _super);
    function WaybillActPositionMarkQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('WayBillActPositionMark', WaybillAct_1.WaybillActPositionMark.prototype)) || this;
        /**
         * Уникальный идентификатор позиции акта ТТН
         */
        _this.waybillActPositionUuid = _this.addFieldFilter("WAY_BILL_ACT_POSITION_UUID");
        /**
         * Марка
         */
        _this.mark = _this.addFieldFilter("MARK");
        return _this;
    }
    return WaybillActPositionMarkQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.WaybillActPositionMarkQuery = WaybillActPositionMarkQuery;
