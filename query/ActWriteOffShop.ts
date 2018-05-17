import {FilterBuilder, SortOrder} from "abstract-query-builder"
import {ActWriteOffShop, ActWriteOffShopPosition} from "../model/document/ActWriteOff"
import {ActWriteOffStatus, ActWriteOffType} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"
import defaultExecutor from "./defaultExecutor"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class ActWriteOffShopSortOrder extends SortOrder<ActWriteOffShopSortOrder> {

    /**
     * Уникальный идентификатор акта списания из магазина
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Отправитель акта списания из магазина
     */
    docOwner = this.addFieldSorter("OWNER");

    /**
     * Идентификатор акта списания из магазина (клиентский, к заполнению необязательный)
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Номер документа
     */
    number = this.addFieldSorter("NUMBER");

    /**
     * Дата составления
     */
    actDate = this.addFieldSorter("ACT_DATE");

    /**
     * Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
     */
    type = this.addFieldSorter("TYPE_WRITE_OFF");

    /**
     * Примечание
     */
    note = this.addFieldSorter("NOTE");

    /**
     * Статус акта списания
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
export default class ActWriteOffShopQuery extends FilterBuilder<ActWriteOffShopQuery, ActWriteOffShopSortOrder, ActWriteOffShop> {

    /**
     * Уникальный идентификатор акта списания из магазина
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Отправитель акта списания из магазина
     */
    docOwner = this.addFieldFilter<string>("OWNER");

    /**
     * Идентификатор акта списания из магазина (клиентский, к заполнению необязательный)
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Номер документа
     */
    number = this.addFieldFilter<(string | null)>("NUMBER");

    /**
     * Дата составления
     */
    actDate = this.addFieldFilter<Date>("ACT_DATE");

    /**
     * Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
     */
    type = this.addFieldFilter<(ActWriteOffType | null)>("TYPE_WRITE_OFF");

    /**
     * Примечание
     */
    note = this.addFieldFilter<(string | null)>("NOTE");

    /**
     * Статус акта списания
     */
    status = this.addFieldFilter<ActWriteOffStatus>("STATUS");

    /**
     * Комментарий для отказа на акт списания из магазина
     */
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");

    /**
     * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
     */
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, defaultExecutor('ActWriteOffShop', ActWriteOffShop.prototype));
    }

}

/**
 * Класс для сортировки элементов в результе запроса
 */
export class ActWriteOffShopPositionSortOrder extends SortOrder<ActWriteOffShopPositionSortOrder> {

    /**
     * Уникальный идентификатор позиции акта списания со склада
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Уникальный идентификатор акта списания со склада
     */
    actWriteOffShopUuid = this.addFieldSorter("ACT_WRITE_OFF_SHOP_UUID");

    /**
     * Идентификатор позиции акта списания со склада
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Количество
     */
    quantity = this.addFieldSorter("QUANTITY");

    /**
     * Информация о марках в формате JSON
     */
    informF2MarkInfoJson = this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ActWriteOffShopPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение позиций акта списания из магазина
 */
export class ActWriteOffShopPositionQuery extends FilterBuilder<ActWriteOffShopPositionQuery, ActWriteOffShopPositionSortOrder, ActWriteOffShopPosition> {

    /**
     * Уникальный идентификатор позиции акта списания из магазина
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Уникальный идентификатор акта списания из магазина
     */
    actWriteOffShopUuid = this.addFieldFilter<string>("ACT_WRITE_OFF_SHOP_UUID");

    /**
     * Идентификатор позиции акта списания из магазина (клиентский, к заполнению необязательный)
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Количество
     */
    quantity = this.addFieldFilter<number>("QUANTITY", (v) => v * 1000);

    /**
     * Информация о марках в формате JSON
     */
    informF2MarkInfoJson = this.addFieldFilter<(string | null)>("INFORM_F2_MARK_INFO_JSON");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ActWriteOffShopPositionQuery, ActWriteOffShopPositionSortOrder, ActWriteOffShopPosition>());

    constructor() {
        super(() => this, defaultExecutor('ActWriteOffShopPosition', ActWriteOffShopPosition.prototype));
    }

}