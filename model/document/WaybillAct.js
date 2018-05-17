import {AcceptType, Version, WaybillActStatus, WaybillActType} from "../types"

/**
 * Акт разногласий для Товарно-Транспортной Накладной
 *
 * @property uuid Уникальный идентификатор
 * @property owner Кто подает документы
 * @property identity Идентификатор Акта (клиентский)
 * @property acceptType Тип подтверждения: Принимаем/есть расхождения/отказываем
 * @property number Номер акта
 * @property creationDate Дата составления акта
 * @property wbRegId Идентификатор накладной в системе
 * @property note Заметки
 * @property type Типа акта расхождения к ТТН (Полный/Частичный)
 * @property status Статус накладной
 * @property rejectComment Комментарий для отказа
 * @property replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
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
 * Позиция акта разногласий для товарно-транспортной накладной
 *
 * @property uuid Уникальный идентификатор
 * @property waybillActUuid Уникальный идентификатор акта разногласий
 * @property identity Идентификатор позиции внутри накладной
 * @property informF2RegId Регистрационный номер записи справки Б
 * @property realQuantity Количество фактическое
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
* Марка в позиции акта разногласий для товарно-транспортной накладной
*
* @property waybillActPositionUuid  Уникальный идентификатор позиции акта разногласий
* @property mark Марка
*/
export class WaybillActPositionMark {
    constructor(waybillActPositionUuid: string,
                mark: string) {
        this.waybillActPositionUuid = waybillActPositionUuid;
        this.mark = mark;
    }
}