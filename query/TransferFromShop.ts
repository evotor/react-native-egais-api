import {FilterBuilder, SortOrder} from "abstract-query-builder"
import TransferFromShop, {TransferFromShopPosition} from "../model/document/TransferFromShop"
import {TransferStatus} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo";
import {quantityConverter} from "./converters"
import executor from "./executor"

/**
 * @class module:transfer.TransferFromShopSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} uuid Уникальный идентификатор
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} owner Кто подает документы
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} identity Идентификатор документа (клиентский)
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} transferNumber Номер документа
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} transferDate Дата составления
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} note Примечание
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} status Статус обработки документа
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} rejectComment Комментарий для отказа
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export class TransferFromShopSortOrder extends SortOrder<TransferFromShopSortOrder> {

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
 * @class module:transfer.TransferFromShopQuery
 * @classdesc Класс для формирования запроса на получение документов передачи продукции из торгового зала на склад.
 * @property {FieldFilter<string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} uuid Уникальный идентификатор
 * @property {FieldFilter<string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} owner Кто подает документы
 * @property {FieldFilter<?string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} identity Идентификатор документа (клиентский)
 * @property {FieldFilter<string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} transferNumber Номер документа
 * @property {FieldFilter<?Date, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} transferDate Дата составления
 * @property {FieldFilter<?string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} note Примечание
 * @property {FieldFilter<module:transfer#TransferStatus, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} status Статус обработки документа
 * @property {FieldFilter<?string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} rejectComment Комментарий для отказа
 * @property {FieldFilter<?string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class TransferFromShopQuery extends FilterBuilder<TransferFromShopQuery, TransferFromShopSortOrder, TransferFromShop> {

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
        super(() => this, executor('TransferFromShop', TransferFromShop.prototype));
    }

}

/**
 * @class module:transfer.TransferFromShopPositionSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} transferFromShopUuid Уникальный идентификатор документа передачи
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} identity Идентификатор позиции внутри акта
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} productCode Регистрационный код продукции
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} quantity Количество
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:transfer.TransferFromShopPositionSortOrder>} productInfo Информация о продукции
 */
export class TransferFromShopPositionSortOrder extends SortOrder<TransferFromShopPositionSortOrder> {

    transferFromShopUuid = this.addFieldSorter("TRANSFER_FROM_SHOP_ID");
    identity = this.addFieldSorter("IDENTITY");
    productCode = this.addFieldSorter("PRODUCT_CODE");
    quantity = this.addFieldSorter("QUANTITY");
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<TransferFromShopPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:transfer.TransferFromShopPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций документа передачи продукции из торгового зала на склад.
 * @property {FieldFilter<string, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} transferFromShopUuid Уникальный идентификатор документа передачи
 * @property {FieldFilter<?string, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} identity Идентификатор позиции внутри акта
 * @property {FieldFilter<string, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} productCode Регистрационный код продукции
 * @property {FieldFilter<number, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} quantity Количество
 * @property {FieldFilter<?string, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} informF2RegId Регистрационный номер раздела справки 2
 * @property {module:productInfo.ProductInfoFilter<module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} productInfo Информация о продукции
 */
export class TransferFromShopPositionQuery extends FilterBuilder<TransferFromShopPositionQuery, TransferFromShopPositionSortOrder, TransferFromShopPosition> {

    transferFromShopUuid = this.addFieldFilter<string>("TRANSFER_FROM_SHOP_ID");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    productCode = this.addFieldFilter<string>("PRODUCT_CODE");
    quantity = this.addFieldFilter<number>("QUANTITY", quantityConverter);
    informF2RegId = this.addFieldFilter<(string | null)>("INFORM_F2_REG_ID");
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<TransferFromShopPositionQuery, TransferFromShopPositionSortOrder, TransferFromShopPosition>());

    constructor() {
        super(() => this, executor('TransferFromShopPosition', TransferFromShopPosition.prototype));
    }

}