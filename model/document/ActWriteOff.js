/**
 * Классы и типы для работы с актами списания.
 * @module module:actWriteOff
 */
import ProductInfo from "../dictionary/ProductInfo"
import {ActWriteOffStatus, ActWriteOffType, Version} from '../types'

/**
 * @class module:actWriteOff.ActWriteOff
 * @classdesc Акт списания со склада.
 * @param {string} uuid Уникальный идентификатор акта списания со склада
 * @param {string} docOwner Кто подает документы
 * @param {?string} identity ИД Акта (клиентский)
 * @param {?number} number Номер акта
 * @param {Date} actDate Дата составления акта
 * @param {?module.actWriteOff#ActWriteOffType} type Причина списания
 * @param {?string} note Примечание
 * @param {module:actWriteOff#ActWriteOffStatus} status Состояние
 * @param {?string} rejectComment Комментарий для отказа на акт списания со склада
 * @param {Version} version Версия протокола ЕГАИС
 * @param {?string} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class ActWriteOff {
    constructor(uuid: string,
                docOwner: string,
                identity: (string | null),
                number: (string | null),
                actDate: Date,
                type: (ActWriteOffType | null),
                note: (string | null),
                status: ActWriteOffStatus,
                rejectComment: (string | null),
                version: Version,
                replyId: (string | null)) {
        this.uuid = uuid;
        this.docOwner = docOwner;
        this.identity = identity;
        this.number = number;
        this.actDate = actDate;
        this.type = type;
        this.note = note;
        this.status = status;
        this.rejectComment = rejectComment;
        this.version = version;
        this.replyId = replyId;
    }
}

/**
 * @class module:actWriteOff.ActWriteOffPosition
 * @classdesc Позиция в акте о списании со склада.
 * @param {string} uuid Уникальный идентификатор
 * @param {string} actWriteOffUuid Идентификатор акта списания, содержащего позицию
 * @param {?string} identity Идентификатор позиции внутри накладной
 * @param {number} quantity Количество
 * @param {?string} informF2RegId Регистрационный номер раздела справки 2
 * @param {?string} informF2MarkInfoJson Информация о марках в формате JSON
 * @param {module:productInfo.ProductInfo} productInfo Информация о продукции
 * @param {string[]} markList Перечень считанных кодов марок
 */
export class ActWriteOffPosition {
    constructor(uuid: string,
                actWriteOffUuid: string,
                identity: (string | null),
                quantity: number,
                informF2RegId: (string | null),
                informF2MarkInfoJson: (string | null),
                productInfo: ProductInfo,
                markList: string[]) {
        this.uuid = uuid;
        this.actWriteOffUuid = actWriteOffUuid;
        this.identity = identity;
        this.quantity = quantity;
        this.informF2RegId = informF2RegId;
        this.informF2MarkInfoJson = informF2MarkInfoJson;
        this.productInfo = productInfo;
        this.markList = markList;
    }
}

