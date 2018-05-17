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
var Ticket_1 = require("../model/document/Ticket");
var defaultExecutor_1 = require("./defaultExecutor");
/**
 * Класс для сортировки элементов в результе запроса
 */
var TicketSortOrder = /** @class */ (function (_super) {
    __extends(TicketSortOrder, _super);
    function TicketSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * UUID Уникальный идентификатор
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Кто подает документы
         */
        _this.owner = _this.addFieldSorter("OWNER");
        /**
         * Дата квитанции
         */
        _this.ticketDate = _this.addFieldSorter("TICKET_DATE");
        /**
         * Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Ид задачи из файловой базы
         */
        _this.docId = _this.addFieldSorter("DOC_ID");
        /**
         * Транспортный ид из файловой базы
         */
        _this.transportId = _this.addFieldSorter("TRANSPORT_ID");
        /**
         * Присвоенный документу номер
         */
        _this.regId = _this.addFieldSorter("REG_ID");
        /**
         * Хэш документа
         */
        _this.docHash = _this.addFieldSorter("DOC_HASH");
        /**
         * Тип исходного документа
         */
        _this.docType = _this.addFieldSorter("DOC_TYPE");
        /**
         * Результат фиксации
         */
        _this.conclusionType = _this.addFieldSorter("RESULT_CONCLUSION");
        /**
         * Дата фиксации
         */
        _this.resultDate = _this.addFieldSorter("RESULT_DATE");
        /**
         * Описание результата фиксации, описание ошибки фиксации
         */
        _this.resultComments = _this.addFieldSorter("RESULT_COMMENTS");
        /**
         * Операция
         */
        _this.operationResultName = _this.addFieldSorter("OPERATION_RESULT_NAME");
        /**
         * Результат выполнения
         */
        _this.operationResultResult = _this.addFieldSorter("OPERATION_RESULT_RESULT");
        /**
         * Сообщение
         */
        _this.operationResultComment = _this.addFieldSorter("OPERATION_RESULT_COMMENT");
        /**
         * Дата операции
         */
        _this.operationResultDate = _this.addFieldSorter("OPERATION_RESULT_DATE");
        return _this;
    }
    return TicketSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TicketSortOrder = TicketSortOrder;
/**
 * Класс для формирования запроса на получение подтверждения акта разногласий для Товарно-Транспортной Накладной
 */
var TicketQuery = /** @class */ (function (_super) {
    __extends(TicketQuery, _super);
    function TicketQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('Ticket', Ticket_1.default.prototype)) || this;
        /**
         * UUID Уникальный идентификатор
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Кто подает документы
         */
        _this.owner = _this.addFieldFilter("OWNER");
        /**
         * Дата квитанции
         */
        _this.ticketDate = _this.addFieldFilter("TICKET_DATE");
        /**
         * Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Ид задачи из файловой базы
         */
        _this.docId = _this.addFieldFilter("DOC_ID");
        /**
         * Транспортный ид из файловой базы
         */
        _this.transportId = _this.addFieldFilter("TRANSPORT_ID");
        /**
         * Присвоенный документу номер
         */
        _this.regId = _this.addFieldFilter("REG_ID");
        /**
         * Хэш документа
         */
        _this.docHash = _this.addFieldFilter("DOC_HASH");
        /**
         * Тип исходного документа
         */
        _this.docType = _this.addFieldFilter("DOC_TYPE");
        /**
         * Результат фиксации
         */
        _this.conclusionType = _this.addFieldFilter("RESULT_CONCLUSION");
        /**
         * Дата фиксации
         */
        _this.resultDate = _this.addFieldFilter("RESULT_DATE");
        /**
         * Описание результата фиксации, описание ошибки фиксации
         */
        _this.resultComments = _this.addFieldFilter("RESULT_COMMENTS");
        /**
         * Операция
         */
        _this.operationResultName = _this.addFieldFilter("OPERATION_RESULT_NAME");
        /**
         * Результат выполнения
         */
        _this.operationResultResult = _this.addFieldFilter("OPERATION_RESULT_RESULT");
        /**
         * Сообщение
         */
        _this.operationResultComment = _this.addFieldFilter("OPERATION_RESULT_COMMENT");
        /**
         * Дата операции
         */
        _this.operationResultDate = _this.addFieldFilter("OPERATION_RESULT_DATE");
        return _this;
    }
    return TicketQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = TicketQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var ConfirmTicketSortOrder = /** @class */ (function (_super) {
    __extends(ConfirmTicketSortOrder, _super);
    function ConfirmTicketSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * UUID Уникальный идентификатор
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Кто подает документы
         */
        _this.owner = _this.addFieldSorter("OWNER");
        /**
         * Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Тип подтверждения: Принимаем/отказываем
         */
        _this.isConfirm = _this.addFieldSorter("IS_CONFIRM");
        /**
         * Номер подтверждения
         */
        _this.ticketNumber = _this.addFieldSorter("TICKET_NUMBER");
        /**
         * Дата составления подтверждения
         */
        _this.ticketDate = _this.addFieldSorter("TICKET_DATE");
        /**
         * ИД накладной в системе
         */
        _this.wbRegId = _this.addFieldSorter("WB_REG_ID");
        /**
         * Примечания
         */
        _this.note = _this.addFieldSorter("NOTE");
        /**
         * Статус (подтвержден/отклонен)
         */
        _this.status = _this.addFieldSorter("STATUS");
        /**
         * Комментарий для отказа
         */
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        return _this;
    }
    return ConfirmTicketSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ConfirmTicketSortOrder = ConfirmTicketSortOrder;
/**
 * Класс для формирования запроса на получение подтверждения акта разногласий для Товарно-Транспортной Накладной
 */
var ConfirmTicketQuery = /** @class */ (function (_super) {
    __extends(ConfirmTicketQuery, _super);
    function ConfirmTicketQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ConfirmTicket', Ticket_1.ConfirmTicket.prototype)) || this;
        /**
         * UUID Уникальный идентификатор
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Кто подает документы
         */
        _this.owner = _this.addFieldFilter("OWNER");
        /**
         * Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Тип подтверждения: Принимаем/отказываем
         */
        _this.isConfirm = _this.addFieldFilter("IS_CONFIRM");
        /**
         * Номер подтверждения
         */
        _this.ticketNumber = _this.addFieldFilter("TICKET_NUMBER");
        /**
         * Дата составления подтверждения
         */
        _this.ticketDate = _this.addFieldFilter("TICKET_DATE");
        /**
         * ИД накладной в системе
         */
        _this.wbRegId = _this.addFieldFilter("WB_REG_ID");
        /**
         * Примечания
         */
        _this.note = _this.addFieldFilter("NOTE");
        /**
         * Статус (подтвержден/отклонен)
         */
        _this.status = _this.addFieldFilter("STATUS");
        /**
         * Комментарий для отказа
         */
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        return _this;
    }
    return ConfirmTicketQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ConfirmTicketQuery = ConfirmTicketQuery;
