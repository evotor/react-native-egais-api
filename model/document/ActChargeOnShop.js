import ProductInfo from "../dictionary/ProductInfo"
import {ActChargeOnShopStatus, ActChargeOnShopType} from '../types'

/**
 * Акт постановки на баланс в торговый зал
 *
 * @property uuid Уникальный идентификатор
 * @property docOwner Кто подает документы
 * @property identity ID акта (клиентский)
 * @property number Номер документа
 * @property actDate Дата постановски на баланс
 * @property type Причина постановки на баланс
 * @property actWriteOff Регистрационный номер акта списания по типу "Пересортица".
 * Обязательно для заполнения для типа постановки на баланс "Пересортица".
 * @property note Примечание
 * @property status Статус документа
 * @property rejectComment Комментарий при отказе
 * @property replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
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
 * Позиция в акте постановки на баланс
 *
 * @property uuid Уникальный идентификатор позиции акта
 * @property actChargeOnShopUuid Идентификатор акта постановки, содержащего позицию
 * @property identity Идентификатор позиции внутри накладной
 * @property quantity Количество
 * @property productInfo Информация о продукции
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