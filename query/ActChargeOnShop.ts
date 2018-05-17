import {FilterBuilder, SortOrder} from "abstract-query-builder"
import ActChargeOnShop, {ActChargeOnShopPosition} from "../model/document/ActChargeOnShop"
import ProductInfo from "../model/dictionary/ProductInfo"
import {ActChargeOnShopStatus, ActChargeOnShopType} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"
import defaultExecutor from "./defaultExecutor"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class ActChargeOnShopSortOrder extends SortOrder<ActChargeOnShopSortOrder> {

    /**
     * Уникальный идентификатор акта списания из магазина
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Кто подает документы
     */
    docOwner = this.addFieldSorter("OWNER");

    /**
     * ID акта (клиентсикй)
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Номер документа
     */
    number = this.addFieldSorter("NUMBER");

    /**
     * Дата постановски на баланс
     */
    actDate = this.addFieldSorter("ACT_DATE");

    /**
     * Причина постановки на баланс (Пересортица/Излишки/Продукция, полученная до 01.01.2016)
     */
    type = this.addFieldSorter("TYPE_ACT_CHARGE_ON_SHOP");

    /**
     * Регистрационный номер акта списания по типу "Пересортица".
     * Обязательно для заполнения для типа постановки на баланс "Пересортица".
     */
    actWriteOff = this.addFieldSorter("ACT_WRITE_OFF");

    /**
     * Примечание
     */
    note = this.addFieldSorter("NOTE");

    /**
     * Статус документа
     */
    status = this.addFieldSorter("STATUS");

    /**
     * Комментарий при отказе
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
 * Класс для формирования запроса на получение актов поставки
 */
export class ActChargeOnShopQuery extends FilterBuilder<ActChargeOnShopQuery, ActChargeOnShopSortOrder, ActChargeOnShop> {

    /**
     * Уникальный идентификатор акта списания из магазина
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Кто подает документы
     */
    docOwner = this.addFieldFilter<string>("OWNER");

    /**
     * ID акта (клиентсикй)
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Номер документа
     */
    number = this.addFieldFilter<string>("NUMBER");

    /**
     * Дата постановски на баланс
     */
    actDate = this.addFieldFilter<Date>("ACT_DATE");

    /**
     * Причина постановки на баланс (Пересортица/Излишки/Продукция, полученная до 01.01.2016)
     */
    type = this.addFieldFilter<ActChargeOnShopType>("TYPE_ACT_CHARGE_ON_SHOP");

    /**
     * Регистрационный номер акта списания по типу "Пересортица".
     * Обязательно для заполнения для типа постановки на баланс "Пересортица".
     */
    actWriteOff = this.addFieldFilter<(string | null)>("ACT_WRITE_OFF");

    /**
     * Примечание
     */
    note = this.addFieldFilter<(string | null)>("NOTE");

    /**
     * Статус документа
     */
    status = this.addFieldFilter<ActChargeOnShopStatus>("STATUS");

    /**
     * Комментарий при отказе
     */
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");

    /**
     * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
     */
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, defaultExecutor('ActChargeOnShop', ActChargeOnShop.prototype));
    }

}

/**
 * Класс для сортировки элементов в результе запроса
 */
export class ActChargeOnShopPositionSortOrder extends SortOrder<ActChargeOnShopPositionSortOrder> {

    /**
     * Уникальный идентификатор позиции акта
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Идентификатор акта постановки, содержащего позицию
     */
    actChargeOnShopUuid = this.addFieldSorter("ACT_CHARGE_ON_SHOP_UUID");

    /**
     * Идентификатор позиции внутри накладной
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Количество
     */
    quantity = this.addFieldSorter("QUANTITY");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ActChargeOnShopPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}


export class ActChargeOnShopPositionQuery extends FilterBuilder<ActChargeOnShopPositionQuery, ActChargeOnShopPositionSortOrder, ActChargeOnShopPosition> {

    /**
     * Уникальный идентификатор позиции акта
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Идентификатор акта постановки, содержащего позицию
     */
    actChargeOnShopUuid = this.addFieldFilter<string>("ACT_CHARGE_ON_SHOP_UUID");

    /**
     * Идентификатор позиции внутри накладной
     */
    identity = this.addFieldFilter<string>("IDENTITY");

    /**
     * Количество
     */
    quantity = this.addFieldFilter<number>("QUANTITY", (v) => v * 1000);

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ActChargeOnShopPositionQuery, ActChargeOnShopPositionSortOrder, ActChargeOnShopPosition>());

    constructor() {
        super(() => this, defaultExecutor('ActChargeOnShopPosition', ActChargeOnShopPosition.prototype, {productInfo: ProductInfo.prototype}));
    }

}