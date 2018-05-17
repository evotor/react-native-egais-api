import {FilterBuilder, SortOrder} from "abstract-query-builder";
import Ticket, {ConfirmTicket} from "../model/document/Ticket";
import {ConclusionType, ConfirmTicketStatus, DocType, OperationResult} from "../model/types";
import defaultExecutor from "./defaultExecutor";

/**
 * Класс для сортировки элементов в результе запроса
 */
export class TicketSortOrder extends SortOrder<TicketSortOrder> {

    /**
     * UUID Уникальный идентификатор
     */
    uuid = this.addFieldSorter("UUID");


    /**
     * Кто подает документы
     */
    owner = this.addFieldSorter("OWNER");

    /**
     * Дата квитанции
     */
    ticketDate = this.addFieldSorter("TICKET_DATE");

    /**
     * Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Ид задачи из файловой базы
     */
    docId = this.addFieldSorter("DOC_ID");

    /**
     * Транспортный ид из файловой базы
     */
    transportId = this.addFieldSorter("TRANSPORT_ID");

    /**
     * Присвоенный документу номер
     */
    regId = this.addFieldSorter("REG_ID");

    /**
     * Хэш документа
     */
    docHash = this.addFieldSorter("DOC_HASH");

    /**
     * Тип исходного документа
     */
    docType = this.addFieldSorter("DOC_TYPE");

    /**
     * Результат фиксации
     */
    conclusionType = this.addFieldSorter("RESULT_CONCLUSION");

    /**
     * Дата фиксации
     */
    resultDate = this.addFieldSorter("RESULT_DATE");

    /**
     * Описание результата фиксации, описание ошибки фиксации
     */
    resultComments = this.addFieldSorter("RESULT_COMMENTS");

    /**
     * Операция
     */
    operationResultName = this.addFieldSorter("OPERATION_RESULT_NAME");

    /**
     * Результат выполнения
     */
    operationResultResult = this.addFieldSorter("OPERATION_RESULT_RESULT");

    /**
     * Сообщение
     */
    operationResultComment = this.addFieldSorter("OPERATION_RESULT_COMMENT");

    /**
     * Дата операции
     */
    operationResultDate = this.addFieldSorter("OPERATION_RESULT_DATE");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение подтверждения акта разногласий для Товарно-Транспортной Накладной
 */
export default class TicketQuery extends FilterBuilder<TicketQuery, TicketSortOrder, Ticket> {

    /**
     * UUID Уникальный идентификатор
     */
    uuid = this.addFieldFilter<string>("UUID");


    /**
     * Кто подает документы
     */
    owner = this.addFieldFilter<string>("OWNER");

    /**
     * Дата квитанции
     */
    ticketDate = this.addFieldFilter<(Date | null)>("TICKET_DATE");

    /**
     * Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Ид задачи из файловой базы
     */
    docId = this.addFieldFilter<(string | null)>("DOC_ID");

    /**
     * Транспортный ид из файловой базы
     */
    transportId = this.addFieldFilter<(string | null)>("TRANSPORT_ID");

    /**
     * Присвоенный документу номер
     */
    regId = this.addFieldFilter<(string | null)>("REG_ID");

    /**
     * Хэш документа
     */
    docHash = this.addFieldFilter<(string | null)>("DOC_HASH");

    /**
     * Тип исходного документа
     */
    docType = this.addFieldFilter<(DocType | null)>("DOC_TYPE");

    /**
     * Результат фиксации
     */
    conclusionType = this.addFieldFilter<(ConclusionType | null)>("RESULT_CONCLUSION");

    /**
     * Дата фиксации
     */
    resultDate = this.addFieldFilter<(Date | null)>("RESULT_DATE");

    /**
     * Описание результата фиксации, описание ошибки фиксации
     */
    resultComments = this.addFieldFilter<(string | null)>("RESULT_COMMENTS");

    /**
     * Операция
     */
    operationResultName = this.addFieldFilter<string>("OPERATION_RESULT_NAME");

    /**
     * Результат выполнения
     */
    operationResultResult = this.addFieldFilter<(OperationResult | null)>("OPERATION_RESULT_RESULT");

    /**
     * Сообщение
     */
    operationResultComment = this.addFieldFilter<(string | null)>("OPERATION_RESULT_COMMENT");

    /**
     * Дата операции
     */
    operationResultDate = this.addFieldFilter<(Date | null)>("OPERATION_RESULT_DATE");

    constructor() {
        super(() => this, defaultExecutor('Ticket', Ticket.prototype));
    }

}

/**
 * Класс для сортировки элементов в результе запроса
 */
export class ConfirmTicketSortOrder extends SortOrder<ConfirmTicketSortOrder> {

    /**
     * UUID Уникальный идентификатор
     */
    uuid = this.addFieldSorter("UUID");


    /**
     * Кто подает документы
     */
    owner = this.addFieldSorter("OWNER");

    /**
     * Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Тип подтверждения: Принимаем/отказываем
     */
    isConfirm = this.addFieldSorter("IS_CONFIRM");

    /**
     * Номер подтверждения
     */
    ticketNumber = this.addFieldSorter("TICKET_NUMBER");

    /**
     * Дата составления подтверждения
     */
    ticketDate = this.addFieldSorter("TICKET_DATE");

    /**
     * ИД накладной в системе
     */
    wbRegId = this.addFieldSorter("WB_REG_ID");

    /**
     * Примечания
     */
    note = this.addFieldSorter("NOTE");

    /**
     * Статус (подтвержден/отклонен)
     */
    status = this.addFieldSorter("STATUS");

    /**
     * Комментарий для отказа
     */
    rejectComment = this.addFieldSorter("REJECT_COMMENT");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение подтверждения акта разногласий для Товарно-Транспортной Накладной
 */
export class ConfirmTicketQuery extends FilterBuilder<ConfirmTicketQuery, ConfirmTicketSortOrder, ConfirmTicket> {

    /**
     * UUID Уникальный идентификатор
     */
    uuid = this.addFieldFilter<string>("UUID");


    /**
     * Кто подает документы
     */
    owner = this.addFieldFilter<string>("OWNER");

    /**
     * Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Тип подтверждения: Принимаем/отказываем
     */
    isConfirm = this.addFieldFilter<(ConclusionType | null)>("IS_CONFIRM");

    /**
     * Номер подтверждения
     */
    ticketNumber = this.addFieldFilter<(string | null)>("TICKET_NUMBER");

    /**
     * Дата составления подтверждения
     */
    ticketDate = this.addFieldFilter<(Date | null)>("TICKET_DATE");

    /**
     * ИД накладной в системе
     */
    wbRegId = this.addFieldFilter<(string | null)>("WB_REG_ID");

    /**
     * Примечания
     */
    note = this.addFieldFilter<(string | null)>("NOTE");

    /**
     * Статус (подтвержден/отклонен)
     */
    status = this.addFieldFilter<ConfirmTicketStatus>("STATUS");

    /**
     * Комментарий для отказа
     */
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");

    constructor() {
        super(() => this, defaultExecutor('ConfirmTicket', ConfirmTicket.prototype));
    }

}