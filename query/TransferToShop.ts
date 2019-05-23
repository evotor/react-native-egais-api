import {FilterBuilder, SortOrder} from "abstract-query-builder"
import TransferToShop, {TransferToShopPosition} from "../model/document/TransferToShop"
import {TransferStatus} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo";
import {quantityConverter} from "./converters"
import executor from "./executor"

/**
 * @class module:transfer.TransferToShopSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} uuid Уникальный идентификатор
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} owner Кто подает документы
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} identity Идентификатор документа (клиентский)
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} transferNumber Номер документа
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} transferDate Дата составления
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} note Примечание
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} status Статус обработки документа
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} rejectComment Комментарий для отказа
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export class TransferToShopSortOrder extends SortOrder<TransferToShopSortOrder> {

    uuid = this.addFieldSorter("UUID");
    owner = this.addFieldSorter("OWNER");
    identity = this.addFieldSorter("IDENTITY");
    transferNumber = this.addFieldSorter("NUMBER");
    transferDate = this.addFieldSorter("ACT_DATE");
    note = this.addFieldSorter("NOTE");
    status = this.addFieldSorter("STATUS");
    rejectComment = this.addFieldSorter("REJECT_COMMENT");
    replyId = this.addFieldSorter("REPLY_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:transfer.TransferToShopQuery
 * @classdesc Класс для формирования запроса на получение документов передачи продукции со склада в торговый зал.
 * @property {FieldFilter<string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} uuid Уникальный идентификатор
 * @property {FieldFilter<string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} owner Кто подает документы
 * @property {FieldFilter<?string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} identity Идентификатор документа (клиентский)
 * @property {FieldFilter<string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} transferNumber Номер документа
 * @property {FieldFilter<?Date, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} transferDate Дата составления
 * @property {FieldFilter<?string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} note Примечание
 * @property {FieldFilter<module:transfer#TransferStatus, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} status Статус обработки документа
 * @property {FieldFilter<?string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} rejectComment Комментарий для отказа
 * @property {FieldFilter<?string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class TransferToShopQuery extends FilterBuilder<TransferToShopQuery, TransferToShopSortOrder, TransferToShop> {

    uuid = this.addFieldFilter<string>("UUID");
    owner = this.addFieldFilter<string>("OWNER");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    transferNumber = this.addFieldFilter<string>("NUMBER");
    transferDate = this.addFieldFilter<(Date | null)>("TRANSFER_DATE");
    note = this.addFieldFilter<(string | null)>("NOTE");
    status = this.addFieldFilter<TransferStatus>("STATUS");
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, executor('TransferToShop', TransferToShop.prototype));
    }

}

/**
 * @class module:transfer.TransferToShopPositionSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} transferFromShopUuid Уникальный идентификатор документа передачи
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} identity Идентификатор позиции внутри акта
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} productCode Регистрационный код продукции
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} quantity Количество
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:transfer.TransferToShopPositionSortOrder>} productInfo Информация о продукции
 */
export class TransferToShopPositionSortOrder extends SortOrder<TransferToShopPositionSortOrder> {

    transferToShopUuid = this.addFieldSorter("TRANSFER_TO_SHOP_ID");
    identity = this.addFieldSorter("IDENTITY");
    productCode = this.addFieldSorter("PRODUCT_CODE");
    quantity = this.addFieldSorter("QUANTITY");
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");
    informF2MarkInfoJson = this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<TransferToShopPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:transfer.TransferToShopPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций документа передачи продукции со склада в торговый зал.
 * @property {FieldFilter<string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} transferFromShopUuid Уникальный идентификатор документа передачи
 * @property {FieldFilter<?string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} identity Идентификатор позиции внутри акта
 * @property {FieldFilter<string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} productCode Регистрационный код продукции
 * @property {FieldFilter<number, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} quantity Количество
 * @property {FieldFilter<?string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldFilter<?string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoFilter<module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} productInfo Информация о продукции
 */
export class TransferToShopPositionQuery extends FilterBuilder<TransferToShopPositionQuery, TransferToShopPositionSortOrder, TransferToShopPosition> {

    transferToShopUuid = this.addFieldFilter<string>("TRANSFER_TO_SHOP_ID");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    productCode = this.addFieldFilter<string>("PRODUCT_CODE");
    quantity = this.addFieldFilter<number>("QUANTITY", quantityConverter);
    informF2RegId = this.addFieldFilter<(string | null)>("INFORM_F2_REG_ID");
    informF2MarkInfoJson = this.addFieldFilter<(string | null)>("INFORM_F2_MARK_INFO_JSON");
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<TransferToShopPositionQuery, TransferToShopPositionSortOrder, TransferToShopPosition>());

    constructor() {
        super(() => this, executor('TransferToShopPosition', TransferToShopPosition.prototype));
    }

}