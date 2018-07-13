/**
 * Классы и типы для работы с квитанциями.
 * @module module:ticket
 */
import {ConclusionType, ConfirmTicketStatus, DocType, OperationResult} from '../types'

/**
 * @class module:ticket.Ticket
 * @classdesc Квитанция.
 * @param {string} uuid Уникальный идентификатор
 * @param {string} docOwner Кто подает документы
 * @param {Date} ticketDate Дата квитанции
 * @param {?string} identity Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
 * @param {?string} docId Ид задачи из файловой базы
 * @param {?string} transportId Транспортный ид из файловой базы
 * @param {?string} regId Присвоенный документу номер
 * @param {?string} docHash Хэш документа
 * @param {?module:ticket#DocType} docType Тип исходного документа
 * @param {?module:ticket#ConclusionType} resultConclusion Результат фиксации
 * @param {?Date} resultDate Дата фиксации
 * @param {?string} resultComments Описание результата фиксации, описание ошибки фиксации
 * @param {?string} operationResultName Операция
 * @param {?module:ticket#OperationResult} operationResultResult Результат выполнения
 * @param {?string} operationResultComment Сообщение
 * @param {?Date} operationResultDate Дата операции
 */
export default class Ticket {
    constructor(uuid: string,
                docOwner: string,
                ticketDate: (Date | null),
                identity: (string | null),
                docId: (string | null),
                transportId: (string | null),
                regId: (string | null),
                docHash: (string | null),
                docType: (DocType | null),
                resultConclusion: (ConclusionType | null),
                resultDate: (Date | null),
                resultComments: (string | null),
                operationResultName: (string | null),
                operationResultResult: (OperationResult | null),
                operationResultComment: (string | null),
                operationResultDate: (Date | null)) {
        this.uuid = uuid;
        this.docOwner = docOwner;
        this.ticketDate = ticketDate;
        this.identity = identity;
        this.docId = docId;
        this.transportId = transportId;
        this.regId = regId;
        this.docHash = docHash;
        this.docType = docType;
        this.resultConclusion = resultConclusion;
        this.resultDate = resultDate;
        this.resultComments = resultComments;
        this.operationResultName = operationResultName;
        this.operationResultResult = operationResultResult;
        this.operationResultComment = operationResultComment;
        this.operationResultDate = operationResultDate;
    }
}

/**
 * @class module:ticket.ConfirmTicket
 * @classdesc Подтверждение акта разногласий для Товарно-Транспортной Накладной.
 * @param {string} uuid Уникальный идентификатор
 * @param {string} docOwner Кто подает документы
 * @param {?string} identity Идентификатор документа (клиентский, к заполнению необязательный)
 * @param {?module:ticket#ConclusionType} isConfirm Тип подтверждения: Принимаем/отказываем
 * @param {?string} ticketNumber Номер подтверждения
 * @param {?Date} ticketDate Дата составления подтверждения
 * @param {?string} wbRegId ИД накладной в системе
 * @param {?string} note примечание
 * @param {module:ticket#ConfirmTicketStatus} status Статус
 * @param {?string} rejectComment Комментарий для отказа
 */
export class ConfirmTicket {
    constructor(uuid: string,
                docOwner: string,
                identity: (string | null),
                isConfirm: (ConclusionType | null),
                ticketNumber: (string | null),
                ticketDate: (Date | null),
                wbRegId: (string | null),
                note: (string | null),
                status: ConfirmTicketStatus,
                rejectComment: (string | null)) {
        this.uuid = uuid;
        this.docOwner = docOwner;
        this.identity = identity;
        this.isConfirm = isConfirm;
        this.ticketNumber = ticketNumber;
        this.ticketDate = ticketDate;
        this.wbRegId = wbRegId;
        this.note = note;
        this.status = status;
        this.rejectComment = rejectComment;
    }
}