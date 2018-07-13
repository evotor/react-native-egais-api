import {ActWriteOffStatus, ActWriteOffType} from "../types";
import ProductInfo from "../dictionary/ProductInfo";

/**
 * @class module:actWriteOff.ActWriteOffShop
 * @classdesc Акт списания из торгового зала.
 * @param {string} uuid Уникальный идентификатор
 * @param {string} docOwner Владелец документа
 * @param {?string} identity ИД Акта (клиентский)
 * @param {?string} number Номер документа
 * @param {?Date} actDate Дата составления
 * @param {module:actWriteOff#ActWriteOffType} type Причина списания
 * @param {?string} note Примечание
 * @param {module:actWriteOff#ActWriteOffStatus} status Статус акта списания
 * @param {?string} rejectComment Комментарий для отказа на акт списания из зала
 * @param {?string} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class ActWriteOffShop {
    constructor(uuid: string,
                docOwner: string,
                identity: (string | null),
                number: (string | null),
                actDate: (Date | null),
                type: ActWriteOffType,
                note: (string | null),
                status: ActWriteOffStatus,
                rejectComment: (string | null),
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
        this.replyId = replyId;
    }
}

/**
 * @class module:actWriteOff.ActWriteOffShopPosition
 * @classdesc Позиция в акте списания из торгового зала.
 * @param {string} uuid Уникальный идентификатор
 * @param {?string} actWriteOffShopId Идентификатор акта списания содержащего позицию
 * @param {?string} identity Идентификатор позиции внутри накладной
 * @param {number} quantity Количество
 * @param {?string} informF2MarkInfoJson Информация о марках в формате JSON
 * @param {module:productInfo.ProductInfo} productInfo Информация о продукции
 * @param {string[]} markList Перечень считанных кодов марок
 */
export class ActWriteOffShopPosition {
    constructor(uuid: string,
                actWriteOffShopUuid: (string | null),
                identity: (string | null),
                quantity: number,
                informF2MarkInfoJson: (string | null),
                productInfo: ProductInfo,
                markList: string[]) {
        this.uuid = uuid;
        this.actWriteOffShopUuid = actWriteOffShopUuid;
        this.identity = identity;
        this.quantity = quantity;
        this.informF2MarkInfoJson = informF2MarkInfoJson;
        this.productInfo = productInfo;
        this.markList = markList;
    }
}