/**
 * Классы и типы для работы с актами разногласий для товарно-транспортной накладной.
 * @module module:waybillAct
 */
import {AcceptType, Version, WaybillActStatus, WaybillActType} from "../types"

/**
 * @class module:waybillAct.WaybillAct
 * @classdesc Акт разногласий для Товарно-Транспортной Накладной.
 * @param {string} uuid Уникальный идентификатор
 * @param {string} owner Кто подает документы
 * @param {?string} identity Идентификатор Акта (клиентский)
 * @param {?module:waybillAct#AcceptType} acceptType Тип подтверждения: Принимаем/есть расхождения/отказываем
 * @param {?string} number Номер акта
 * @param {Date} creationDate Дата составления акта
 * @param {?string} wbRegId Идентификатор накладной в системе
 * @param {?string} note Заметки
 * @param {?module:waybillAct#WaybillActType} type Типа акта расхождения к ТТН (Полный/Частичный)
 * @param {?Version} version Версия протокола ЕГАИС
 * @param {module:waybillAct#WaybillActStatus} status Статус накладной
 * @param {?string} rejectComment Комментарий для отказа
 * @param {?string} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class WaybillAct {
    constructor(uuid: string,
                docOwner: string,
                identity: (string | null),
                acceptType: (AcceptType | null),
                number: (string | null),
                creationDate: Date,
                wbRegId: (string | null),
                note: (string | null),
                type: (WaybillActType | null),
                version: (Version | null),
                status: WaybillActStatus,
                rejectComment: (string | null),
                replyId: (string | null)) {
        this.uuid = uuid;
        this.docOwner = docOwner;
        this.identity = identity;
        this.number = number;
        this.creationDate = creationDate;
        this.wbRegId = wbRegId;
        this.note = note;
        this.type = type;
        this.version = version;
        this.status = status;
        this.rejectComment = rejectComment;
        this.replyId = replyId;
    }
}

/**
 * @class module:waybillAct.WaybillActPosition
 * @classdesc Позиция акта разногласий для товарно-транспортной накладной.
 * @param {string} uuid Уникальный идентификатор
 * @param {string} waybillActUuid Уникальный идентификатор акта разногласий
 * @param {string} identity Идентификатор позиции внутри накладной
 * @param {?string} informF2RegId Регистрационный номер записи справки Б
 * @param {number} realQuantity Количество фактическое
 */
export class WaybillActPosition {
    constructor(uuid: string,
                waybillActUuid: string,
                identity: string,
                informF2RegId: (string | null),
                realQuantity: number) {
        this.uuid = uuid;
        this.wayBillActUuid = waybillActUuid;
        this.identity = identity;
        this.informF2RegId = informF2RegId;
        this.realQuantity = realQuantity;
    }
}

/**
 * @class module:waybillAct.WaybillActPositionMark
 * @classdesc Марка в позиции акта разногласий для товарно-транспортной накладной.
 * @param {string} waybillActPositionUuid  Уникальный идентификатор позиции акта разногласий
 * @param {string} mark Марка
 */
export class WaybillActPositionMark {
    constructor(waybillActPositionUuid: string,
                mark: string) {
        this.waybillActPositionUuid = waybillActPositionUuid;
        this.mark = mark;
    }
}