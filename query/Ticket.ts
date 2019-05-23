import {FilterBuilder, SortOrder} from "abstract-query-builder";
import Ticket, {ConfirmTicket} from "../model/document/Ticket";
import {ConclusionType, ConfirmTicketStatus, DocType, OperationResult} from "../model/types";
import executor from "./executor";

/**
 * @class module:ticket.TicketSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
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
export class TicketSortOrder extends SortOrder<TicketSortOrder> {

    uuid = this.addFieldSorter("UUID");
    owner = this.addFieldSorter("OWNER");
    ticketDate = this.addFieldSorter("TICKET_DATE");
    identity = this.addFieldSorter("IDENTITY");
    docId = this.addFieldSorter("DOC_ID");
    transportId = this.addFieldSorter("TRANSPORT_ID");
    regId = this.addFieldSorter("REG_ID");
    docHash = this.addFieldSorter("DOC_HASH");
    docType = this.addFieldSorter("DOC_TYPE");
    conclusionType = this.addFieldSorter("RESULT_CONCLUSION");
    resultDate = this.addFieldSorter("RESULT_DATE");
    resultComments = this.addFieldSorter("RESULT_COMMENTS");
    operationResultName = this.addFieldSorter("OPERATION_RESULT_NAME");
    operationResultResult = this.addFieldSorter("OPERATION_RESULT_RESULT");
    operationResultComment = this.addFieldSorter("OPERATION_RESULT_COMMENT");
    operationResultDate = this.addFieldSorter("OPERATION_RESULT_DATE");

    constructor() {
        super(() => this);
    }

}

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
export default class TicketQuery extends FilterBuilder<TicketQuery, TicketSortOrder, Ticket> {

    uuid = this.addFieldFilter<string>("UUID");
    owner = this.addFieldFilter<string>("OWNER");
    ticketDate = this.addFieldFilter<(Date | null)>("TICKET_DATE");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    docId = this.addFieldFilter<(string | null)>("DOC_ID");
    transportId = this.addFieldFilter<(string | null)>("TRANSPORT_ID");
    regId = this.addFieldFilter<(string | null)>("REG_ID");
    docHash = this.addFieldFilter<(string | null)>("DOC_HASH");
    docType = this.addFieldFilter<(DocType | null)>("DOC_TYPE");
    conclusionType = this.addFieldFilter<(ConclusionType | null)>("RESULT_CONCLUSION");
    resultDate = this.addFieldFilter<(Date | null)>("RESULT_DATE");
    resultComments = this.addFieldFilter<(string | null)>("RESULT_COMMENTS");
    operationResultName = this.addFieldFilter<string>("OPERATION_RESULT_NAME");
    operationResultResult = this.addFieldFilter<(OperationResult | null)>("OPERATION_RESULT_RESULT");
    operationResultComment = this.addFieldFilter<(string | null)>("OPERATION_RESULT_COMMENT");
    operationResultDate = this.addFieldFilter<(Date | null)>("OPERATION_RESULT_DATE");

    constructor() {
        super(() => this, executor('Ticket', Ticket.prototype));
    }

}

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
export class ConfirmTicketSortOrder extends SortOrder<ConfirmTicketSortOrder> {

    uuid = this.addFieldSorter("UUID");
    owner = this.addFieldSorter("OWNER");
    identity = this.addFieldSorter("IDENTITY");
    isConfirm = this.addFieldSorter("IS_CONFIRM");
    ticketNumber = this.addFieldSorter("TICKET_NUMBER");
    ticketDate = this.addFieldSorter("TICKET_DATE");
    wbRegId = this.addFieldSorter("WB_REG_ID");
    note = this.addFieldSorter("NOTE");
    status = this.addFieldSorter("STATUS");
    rejectComment = this.addFieldSorter("REJECT_COMMENT");

    constructor() {
        super(() => this);
    }

}

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
export class ConfirmTicketQuery extends FilterBuilder<ConfirmTicketQuery, ConfirmTicketSortOrder, ConfirmTicket> {

    uuid = this.addFieldFilter<string>("UUID");
    owner = this.addFieldFilter<string>("OWNER");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    isConfirm = this.addFieldFilter<(ConclusionType | null)>("IS_CONFIRM");
    ticketNumber = this.addFieldFilter<(string | null)>("TICKET_NUMBER");
    ticketDate = this.addFieldFilter<(Date | null)>("TICKET_DATE");
    wbRegId = this.addFieldFilter<(string | null)>("WB_REG_ID");
    note = this.addFieldFilter<(string | null)>("NOTE");
    status = this.addFieldFilter<ConfirmTicketStatus>("STATUS");
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");

    constructor() {
        super(() => this, executor('ConfirmTicket', ConfirmTicket.prototype));
    }

}