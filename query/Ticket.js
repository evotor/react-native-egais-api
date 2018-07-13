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
var executor_1 = require("./executor");
/**
 * @class module:ticket.TicketSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:ticket.TicketSortOrder>} uuid Уникальный идентификатор
 * @property {FieldSorter<module:ticket.TicketSortOrder>} owner Кто подает документы
 * @property {FieldSorter<module:ticket.TicketSortOrder>} ticketDate Дата квитанции
 * @property {FieldSorter<module:ticket.TicketSortOrder>} identity Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
 * @property {FieldSorter<module:ticket.TicketSortOrder>} docId Ид задачи из файловой базы
 * @property {FieldSorter<module:ticket.TicketSortOrder>} transportId Транспортный ид из файловой базы
 * @property {FieldSorter<module:ticket.TicketSortOrder>} regId Присвоенный документу номер
 * @property {FieldSorter<module:ticket.TicketSortOrder>} docHash Хэш документа
 * @property {FieldSorter<module:ticket.TicketSortOrder>} docType Тип исходного документа
 * @property {FieldSorter<module:ticket.TicketSortOrder>} conclusionType Результат фиксации
 * @property {FieldSorter<module:ticket.TicketSortOrder>} resultDate Дата фиксации
 * @property {FieldSorter<module:ticket.TicketSortOrder>} resultComments Описание результата фиксации, описание ошибки фиксации
 * @property {FieldSorter<module:ticket.TicketSortOrder>} operationResultName Операция
 * @property {FieldSorter<module:ticket.TicketSortOrder>} operationResultResult Результат выполнения
 * @property {FieldSorter<module:ticket.TicketSortOrder>} operationResultComment Сообщение
 * @property {FieldSorter<module:ticket.TicketSortOrder>} operationResultDate Дата операции
 */
var TicketSortOrder = /** @class */ (function (_super) {
    __extends(TicketSortOrder, _super);
    function TicketSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.owner = _this.addFieldSorter("OWNER");
        _this.ticketDate = _this.addFieldSorter("TICKET_DATE");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.docId = _this.addFieldSorter("DOC_ID");
        _this.transportId = _this.addFieldSorter("TRANSPORT_ID");
        _this.regId = _this.addFieldSorter("REG_ID");
        _this.docHash = _this.addFieldSorter("DOC_HASH");
        _this.docType = _this.addFieldSorter("DOC_TYPE");
        _this.conclusionType = _this.addFieldSorter("RESULT_CONCLUSION");
        _this.resultDate = _this.addFieldSorter("RESULT_DATE");
        _this.resultComments = _this.addFieldSorter("RESULT_COMMENTS");
        _this.operationResultName = _this.addFieldSorter("OPERATION_RESULT_NAME");
        _this.operationResultResult = _this.addFieldSorter("OPERATION_RESULT_RESULT");
        _this.operationResultComment = _this.addFieldSorter("OPERATION_RESULT_COMMENT");
        _this.operationResultDate = _this.addFieldSorter("OPERATION_RESULT_DATE");
        return _this;
    }
    return TicketSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TicketSortOrder = TicketSortOrder;
/**
 * @class module:ticket.TicketQuery
 * @classdesc Класс для формирования запроса на получение подтверждения акта разногласий для Товарно-Транспортной Накладной.
 * @property {FieldFilter<string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} uuid Уникальный идентификатор
 * @property {FieldFilter<string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} owner Кто подает документы
 * @property {FieldFilter<?Date, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} ticketDate Дата квитанции
 * @property {FieldFilter<?string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} identity Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
 * @property {FieldFilter<?string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} docId Ид задачи из файловой базы
 * @property {FieldFilter<?string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} transportId Транспортный ид из файловой базы
 * @property {FieldFilter<?string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} regId Присвоенный документу номер
 * @property {FieldFilter<?string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} docHash Хэш документа
 * @property {FieldFilter<?module:ticket#DocType, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} docType Тип исходного документа
 * @property {FieldFilter<?module:ticket#ConclusionType, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} conclusionType Результат фиксации
 * @property {FieldFilter<?Date, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} resultDate Дата фиксации
 * @property {FieldFilter<?string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} resultComments Описание результата фиксации, описание ошибки фиксации
 * @property {FieldFilter<string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} operationResultName Операция
 * @property {FieldFilter<?module:ticket#OperationResult, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} operationResultResult Результат выполнения
 * @property {FieldFilter<?string, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} operationResultComment Сообщение
 * @property {FieldFilter<?Date, module:ticket.TicketQuery, module:ticket.TicketSortOrder, module:ticket.Ticket>} operationResultDate Дата операции
 */
var TicketQuery = /** @class */ (function (_super) {
    __extends(TicketQuery, _super);
    function TicketQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('Ticket', Ticket_1.default.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.owner = _this.addFieldFilter("OWNER");
        _this.ticketDate = _this.addFieldFilter("TICKET_DATE");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.docId = _this.addFieldFilter("DOC_ID");
        _this.transportId = _this.addFieldFilter("TRANSPORT_ID");
        _this.regId = _this.addFieldFilter("REG_ID");
        _this.docHash = _this.addFieldFilter("DOC_HASH");
        _this.docType = _this.addFieldFilter("DOC_TYPE");
        _this.conclusionType = _this.addFieldFilter("RESULT_CONCLUSION");
        _this.resultDate = _this.addFieldFilter("RESULT_DATE");
        _this.resultComments = _this.addFieldFilter("RESULT_COMMENTS");
        _this.operationResultName = _this.addFieldFilter("OPERATION_RESULT_NAME");
        _this.operationResultResult = _this.addFieldFilter("OPERATION_RESULT_RESULT");
        _this.operationResultComment = _this.addFieldFilter("OPERATION_RESULT_COMMENT");
        _this.operationResultDate = _this.addFieldFilter("OPERATION_RESULT_DATE");
        return _this;
    }
    return TicketQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = TicketQuery;
/**
 * @class module:ticket.ConfirmTicketSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} uuid Уникальный идентификатор
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} owner Кто подает документы
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} identity Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} isConfirm Тип подтверждения: Принимаем/отказываем
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} ticketNumber Номер подтверждения
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} ticketDate Дата составления подтверждения
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} wbRegId ИД накладной в системе
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} note Примечания
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} status Статус (подтвержден/отклонен)
 * @property {FieldSorter<module:ticket.ConfirmTicketSortOrder>} rejectComment Комментарий для отказа
 */
var ConfirmTicketSortOrder = /** @class */ (function (_super) {
    __extends(ConfirmTicketSortOrder, _super);
    function ConfirmTicketSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.owner = _this.addFieldSorter("OWNER");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.isConfirm = _this.addFieldSorter("IS_CONFIRM");
        _this.ticketNumber = _this.addFieldSorter("TICKET_NUMBER");
        _this.ticketDate = _this.addFieldSorter("TICKET_DATE");
        _this.wbRegId = _this.addFieldSorter("WB_REG_ID");
        _this.note = _this.addFieldSorter("NOTE");
        _this.status = _this.addFieldSorter("STATUS");
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        return _this;
    }
    return ConfirmTicketSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ConfirmTicketSortOrder = ConfirmTicketSortOrder;
/**
 * @class module:ticket.ConfirmTicketQuery
 * @classdesc Класс для формирования запроса на получение подтверждения акта разногласий для Товарно-Транспортной Накладной.
 * @property {FieldFilter<string, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} uuid Уникальный идентификатор
 * @property {FieldFilter<string, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} owner Кто подает документы
 * @property {FieldFilter<?string, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} identity Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
 * @property {FieldFilter<?module:ticket#ConclusionType, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} isConfirm Тип подтверждения: Принимаем/отказываем
 * @property {FieldFilter<?string, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} ticketNumber Номер подтверждения
 * @property {FieldFilter<?Date, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} ticketDate Дата составления подтверждения
 * @property {FieldFilter<?string, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} wbRegId ИД накладной в системе
 * @property {FieldFilter<?string, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} note Примечания
 * @property {FieldFilter<module:ticket#ConfirmTicketStatus, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} status Статус (подтвержден/отклонен)
 * @property {FieldFilter<?string, module:ticket.ConfirmTicketQuery, module:ticket.ConfirmTicketSortOrder, module:ticket.ConfirmTicket>} rejectComment Комментарий для отказа
 */
var ConfirmTicketQuery = /** @class */ (function (_super) {
    __extends(ConfirmTicketQuery, _super);
    function ConfirmTicketQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ConfirmTicket', Ticket_1.ConfirmTicket.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.owner = _this.addFieldFilter("OWNER");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.isConfirm = _this.addFieldFilter("IS_CONFIRM");
        _this.ticketNumber = _this.addFieldFilter("TICKET_NUMBER");
        _this.ticketDate = _this.addFieldFilter("TICKET_DATE");
        _this.wbRegId = _this.addFieldFilter("WB_REG_ID");
        _this.note = _this.addFieldFilter("NOTE");
        _this.status = _this.addFieldFilter("STATUS");
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        return _this;
    }
    return ConfirmTicketQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ConfirmTicketQuery = ConfirmTicketQuery;
