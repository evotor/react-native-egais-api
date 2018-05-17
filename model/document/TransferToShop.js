import ProductInfo from "../dictionary/ProductInfo"
import {TransferStatus} from "../types"

/**
 * Передача продукции в торговый зал со склада
 *
 * @property uuid Уникальный идентификатор
 * @property owner Кто подает документы
 * @property identity Идентификатор документа (клиентский)
 * @property transferNumber Номер документа
 * @property transferDate Дата составления
 * @property note Примечание
 * @property status Статус обработки документа
 * @property rejectComment Комментарий для отказа
 * @property replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
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
 * Позиция акта передачи продукции в торговый зал со склада
 *
 * @property transferToShopUuid Уникальный идентификатор документа передачи
 * @property identity Идентификатор позиции внутри акта
 * @property productCode Регистрационный код продукции
 * @property quantity Количество
 * @property informF2RegId Регистрационный номер раздела справки 2
 * @property informF2MarkInfoJson Информация о марках в формате JSON
 * @property productInfo Информация о продукте
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