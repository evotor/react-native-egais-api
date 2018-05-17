import {FilterBuilder, SortOrder} from "abstract-query-builder"
import TransferFromShop, {TransferFromShopPosition} from "../model/document/TransferFromShop"
import {TransferStatus} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo";
import defaultExecutor from "./defaultExecutor"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class TransferFromShopSortOrder extends SortOrder<TransferFromShopSortOrder> {

    /**
     * Уникальный идентификатор
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Кто подает документы
     */
    owner = this.addFieldSorter("OWNER");

    /**
     * Идентификатор документа (клиентский)
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Номер документа
     */
    transferNumber = this.addFieldSorter("NUMBER");

    /**
     * Дата составления
     */
    transferDate = this.addFieldSorter("ACT_DATE");

    /**
     * Примечание
     */
    note = this.addFieldSorter("NOTE");

    /**
     * Статус обработки документа
     */
    status = this.addFieldSorter("STATUS");

    /**
     * Комментарий для отказа на акт списания из магазина
     */
    rejectComment = this.addFieldSorter("REJECT_COMMENT");

    /**
     * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
     */
    replyId = this.addFieldSorter("REPLY_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение актов списания из магазина
 */
export default class TransferFromShopQuery extends FilterBuilder<TransferFromShopQuery, TransferFromShopSortOrder, TransferFromShop> {

    /**
     * Уникальный идентификатор
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Кто подает документы
     */
    owner = this.addFieldFilter<string>("OWNER");

    /**
     * Идентификатор документа (клиентский)
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Номер документа
     */
    transferNumber = this.addFieldFilter<string>("NUMBER");

    /**
     * Дата составления
     */
    transferDate = this.addFieldFilter<(Date | null)>("TRANSFER_DATE");

    /**
     * Примечание
     */
    note = this.addFieldFilter<(string | null)>("NOTE");

    /**
     * Статус обработки документа
     */
    status = this.addFieldFilter<TransferStatus>("STATUS");

    /**
     * Комментарий для отказа
     */
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");

    /**
     * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
     */
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, defaultExecutor('TransferFromShop', TransferFromShop.prototype));
    }

}

/**
 * Класс для сортировки элементов в результе запроса
 */
export class TransferFromShopPositionSortOrder extends SortOrder<TransferFromShopPositionSortOrder> {

    /**
     * Уникальный идентификатор документа передачи
     */
    transferFromShopUuid = this.addFieldSorter("TRANSFER_FROM_SHOP_ID");

    /**
     * Идентификатор позиции внутри акта
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Регистрационный код продукции
     */
    productCode = this.addFieldSorter("PRODUCT_CODE");

    /**
     * Количество
     */
    quantity = this.addFieldSorter("QUANTITY");

    /**
     * Регистрационный номер раздела справки 2
     */
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<TransferFromShopPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение позиций акта списания из магазина
 */
export class TransferFromShopPositionQuery extends FilterBuilder<TransferFromShopPositionQuery, TransferFromShopPositionSortOrder, TransferFromShopPosition> {

    /**
     * Уникальный идентификатор документа передачи
     */
    transferFromShopUuid = this.addFieldFilter<string>("TRANSFER_FROM_SHOP_ID");

    /**
     * Идентификатор позиции внутри акта
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Регистрационный код продукции
     */
    productCode = this.addFieldFilter<string>("PRODUCT_CODE");

    /**
     * Количество
     */
    quantity = this.addFieldFilter<number>("QUANTITY", (v) => v * 1000);

    /**
     * Регистрационный номер раздела справки 2
     */
    informF2RegId = this.addFieldFilter<(string | null)>("INFORM_F2_REG_ID");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<TransferFromShopPositionQuery, TransferFromShopPositionSortOrder, TransferFromShopPosition>());

    constructor() {
        super(() => this, defaultExecutor('TransferFromShopPosition', TransferFromShopPosition.prototype));
    }

}