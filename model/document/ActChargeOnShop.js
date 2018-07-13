/**
 * Классы и типы для работы с актами постановки на баланс.
 * @module module:actChargeOn
 */
import ProductInfo from "../dictionary/ProductInfo"
import {ActChargeOnShopStatus, ActChargeOnShopType} from '../types'

/**
 * @class module:actChargeOn.ActChargeOnShop
 * @classdesc Акт постановки на баланс в торговый зал.
 * @param {string} uuid Уникальный идентификатор
 * @param {string} docOwner Кто подает документы
 * @param {?string} identity ID акта (клиентский)
 * @param {?string} number Номер документа
 * @param {Date} actDate Дата постановски на баланс
 * @param {module:actChargeOn#ActChargeOnShopType} type Причина постановки на баланс
 * @param {?string} actWriteOff Регистрационный номер акта списания по типу "Пересортица". Обязательно для заполнения для типа постановки на баланс "Пересортица".
 * @param {?string} note Примечание
 * @param {module:actChargeOn#ActChargeOnShopStatus} status Статус документа
 * @param {?string} rejectComment Комментарий при отказе
 * @param {?string} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class ActChargeOnShop {
    constructor(uuid: string,
                docOwner: string,
                identity: (string | null),
                number: string,
                actDate: Date,
                type: ActChargeOnShopType,
                actWriteOff: (string | null),
                note: (string | null),
                status: ActChargeOnShopStatus,
                rejectComment: (string | null),
                replyId: (string | null)) {
        this.uuid = uuid;
        this.docOwner = docOwner;
        this.identity = identity;
        this.number = number;
        this.actDate = actDate;
        this.type = type;
        this.actWriteOff = actWriteOff;
        this.note = note;
        this.status = status;
        this.rejectComment = rejectComment;
        this.replyId = replyId;
    }
}

/**
 * @class module:actChargeOn.ActChargeOnShopPosition
 * @classdesc Позиция в акте постановки на баланс в торговый зал.
 * @param {string} uuid Уникальный идентификатор позиции акта
 * @param {string} actChargeOnShopUuid Идентификатор акта постановки, содержащего позицию
 * @param {string} identity Идентификатор позиции внутри накладной
 * @param {number} quantity Количество
 * @param {module:productInfo.ProductInfo} productInfo Информация о продукции
 */
export class ActChargeOnShopPosition {
    constructor(uuid: string,
                actChargeOnShopUuid: string,
                identity: string,
                quantity: number,
                productInfo: ProductInfo) {
        this.uuid = uuid;
        this.actChargeOnShopUuid = actChargeOnShopUuid;
        this.identity = identity;
        this.quantity = quantity;
        this.productInfo = productInfo;
    }
}