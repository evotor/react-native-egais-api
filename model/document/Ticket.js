import {ConclusionType, ConfirmTicketStatus, DocType, OperationResult} from '../types'

/**
 * Квитанция
 *
 * @property uuid уникальный идентификатор
 * @property docOwner кто подает документы
 * @property ticketDate Дата квитанции
 * @property identity Идентификатор документа(исходного, клиентский из содержимого XML(может не быть))
 * @property docId Ид задачи из файловой базы
 * @property transportId Транспортный ид из файловой базы
 * @property regId Присвоенный документу номер
 * @property docHash Хэш документа
 * @property docType Тип исходного документа
 * @property resultConclusion Результат фиксации
 * @property resultDate Дата фиксации
 * @property resultComments Описание результата фиксации, описание ошибки фиксации
 * @property operationResultName Операция
 * @property operationResultResult Результат выполнения
 * @property operationResultComment Сообщение
 * @property operationResultDate Дата операции
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
 * Подтверждение акта разногласий для Товарно-Транспортной Накладной
 *
 * @property uuid уникальный идентификатор
 * @property docOwner кто подает документы
 * @property identity Идентификатор документа (клиентский, к заполнению необязательный)
 * @property isConfirm Тип подтверждения: Принимаем/отказываем
 * @property ticketNumber Номер подтверждения
 * @property ticketDate Дата составления подтверждения
 * @property wbRegId ИД накладной в системе
 * @property note примечание
 * @property status Статус
 * @property rejectComment Комментарий для отказа
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