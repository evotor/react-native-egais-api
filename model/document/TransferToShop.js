import ProductInfo from "../dictionary/ProductInfo"
import {TransferStatus} from "../types"

/**
 * @class module:transfer.TransferToShop
 * @classdesc Акт передачи продукции со склада в торговый зал.
 * @param {string} uuid Уникальный идентификатор
 * @param {string} owner Кто подает документы
 * @param {?string} identity Идентификатор документа (клиентский)
 * @param {string} transferNumber Номер документа
 * @param {?Date} transferDate Дата составления
 * @param {?string} note Примечание
 * @param {module:transfer#TransferStatus} status Статус обработки документа
 * @param {?string} rejectComment Комментарий для отказа
 * @param {?string} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class TransferToShop {
    constructor(uuid: string,
                owner: string,
                identity: (string | null),
                transferNumber: string,
                transferDate: (Date | null),
                note: (string | null),
                status: TransferStatus,
                rejectComment: (string | null),
                replyId: (string | null)) {
        this.uuid = uuid;
        this.owner = owner;
        this.identity = identity;
        this.transferNumber = transferNumber;
        this.transferDate = transferDate;
        this.note = note;
        this.status = status;
        this.rejectComment = rejectComment;
        this.replyId = replyId;
    }
}

/**
 * @class module:transfer.TransferToShopPosition
 * @classdesc Позиция акта передачи продукции со склада в торговый зал.
 * @param {string} transferToShopUuid Уникальный идентификатор документа передачи
 * @param {string} identity Идентификатор позиции внутри акта
 * @param {string} productCode Регистрационный код продукции
 * @param {number} quantity Количество
 * @param {?string} informF2RegId Регистрационный номер раздела справки 2
 * @param {?string} informF2MarkInfoJson Информация о марках в формате JSON
 * @param {module:productInfo.ProductInfo} productInfo Информация о продукте
 */
export class TransferToShopPosition {
    constructor(transferToShopUuid: string,
                identity: string,
                productCode: string,
                quantity: number,
                informF2RegId: (string | null),
                informF2MarkInfoJson: (string | null),
                productInfo: ProductInfo) {
        this.transferToShopUuid = transferToShopUuid;
        this.identity = identity;
        this.productCode = productCode;
        this.quantity = quantity;
        this.informF2RegId = informF2RegId;
        this.informF2MarkInfoJson = informF2MarkInfoJson;
        this.productInfo = productInfo;
    }

}