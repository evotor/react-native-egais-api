/**
 * Классы и типы для работы с актами передачи продукции.
 * @module module:transfer
 */
import ProductInfo from '../dictionary/ProductInfo'
import {TransferStatus} from '../types'

/**
 * @class module:transfer.TransferFromShop
 * @classdesc Акт передачи продукции из торгового зала на склад.
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
export default class TransferFromShop {
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
 * @class module:transfer.TransferFromShopPosition
 * @classdesc Позиция акта передачи продукции из торгового зала на склад.
 * @param {string} transferFromShopUuid Уникальный идентификатор документа передачи
 * @param {?string} identity Идентификатор позиции внутри акта
 * @param {string} productCode Регистрационный код продукции
 * @param {number} quantity Количество
 * @param {?string} informF2RegId Регистрационный номер раздела справки 2
 * @param {module:productInfo.ProductInfo} productInfo Информация о продукции
 */
export class TransferFromShopPosition {
    constructor(transferFromShopUuid: string,
                identity: (string | null),
                productCode: string,
                quantity: number,
                informF2RegId: (string | null),
                productInfo: ProductInfo) {
        this.transferFromShopUuid = transferFromShopUuid;
        this.identity = identity;
        this.productCode = productCode;
        this.quantity = quantity;
        this.informF2RegId = informF2RegId;
        this.productInfo = productInfo;
    }

}