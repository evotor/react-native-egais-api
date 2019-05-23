import {FilterBuilder, SortOrder} from "abstract-query-builder"
import ActChargeOnShop, {ActChargeOnShopPosition} from "../model/document/ActChargeOnShop"
import ProductInfo from "../model/dictionary/ProductInfo"
import {ActChargeOnShopStatus, ActChargeOnShopType} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"
import {quantityConverter} from "./converters"
import executor from "./executor"

/**
 * @class module:actChargeOn.ActChargeOnShopSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} uuid Уникальный идентификатор акта поставки
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} docOwner Кто подает документы
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} identity ID акта (клиентсикй)
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} number Номер документа
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} actDate Дата постановски на баланс
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} type Причина постановки на баланс (Пересортица/Излишки/Продукция, полученная до 01.01.2016)
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} actWriteOff Регистрационный номер акта списания по типу "Пересортица". Обязательно для заполнения для типа постановки на баланс "Пересортица".
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} note Примечание
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} status Статус документа
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} rejectComment Комментарий при отказе
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export class ActChargeOnShopSortOrder extends SortOrder<ActChargeOnShopSortOrder> {

    uuid = this.addFieldSorter("UUID");
    docOwner = this.addFieldSorter("OWNER");
    identity = this.addFieldSorter("IDENTITY");
    number = this.addFieldSorter("NUMBER");
    actDate = this.addFieldSorter("ACT_DATE");
    type = this.addFieldSorter("TYPE_ACT_CHARGE_ON_SHOP");
    actWriteOff = this.addFieldSorter("ACT_WRITE_OFF");
    note = this.addFieldSorter("NOTE");
    status = this.addFieldSorter("STATUS");
    rejectComment = this.addFieldSorter("REJECT_COMMENT");
    replyId = this.addFieldSorter("REPLY_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:actChargeOn.ActChargeOnShopQuery
 * @classdesc Класс для формирования запроса на получение актов поставки.
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} uuid Уникальный идентификатор акта списания из магазина
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} docOwner Кто подает документы
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} identity ID акта (клиентсикй)
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} number Номер документа
 * @property {FieldFilter<Date, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} actDate Дата постановски на баланс
 * @property {FieldFilter<module:actChargeOn#ActChargeOnShopType, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} type Причина постановки на баланс (Пересортица/Излишки/Продукция, полученная до 01.01.2016)
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} actWriteOff Регистрационный номер акта списания по типу "Пересортица". Обязательно для заполнения для типа постановки на баланс "Пересортица".
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} note Примечание
 * @property {FieldFilter<module:actChargeOn#ActChargeOnShopStatus, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} status Статус документа
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} rejectComment Комментарий при отказе
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export class ActChargeOnShopQuery extends FilterBuilder<ActChargeOnShopQuery, ActChargeOnShopSortOrder, ActChargeOnShop> {

    uuid = this.addFieldFilter<string>("UUID");
    docOwner = this.addFieldFilter<string>("OWNER");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    number = this.addFieldFilter<string>("NUMBER");
    actDate = this.addFieldFilter<Date>("ACT_DATE");
    type = this.addFieldFilter<ActChargeOnShopType>("TYPE_ACT_CHARGE_ON_SHOP");
    actWriteOff = this.addFieldFilter<(string | null)>("ACT_WRITE_OFF");
    note = this.addFieldFilter<(string | null)>("NOTE");
    status = this.addFieldFilter<ActChargeOnShopStatus>("STATUS");
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, executor('ActChargeOnShop', ActChargeOnShop.prototype));
    }

}


/**
 * @class module:actChargeOn.ActChargeOnShopPositionSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} uuid Уникальный идентификатор позиции акта
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} actChargeOnShopUuid Идентификатор акта постановки, содержащего позицию
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} identity Идентификатор позиции внутри накладной
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} quantity Количество
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:actChargeOn.ActChargeOnShopPositionSortOrder>} productInfo Информация о продукции
 */
export class ActChargeOnShopPositionSortOrder extends SortOrder<ActChargeOnShopPositionSortOrder> {

    uuid = this.addFieldSorter("UUID");
    actChargeOnShopUuid = this.addFieldSorter("ACT_CHARGE_ON_SHOP_UUID");
    identity = this.addFieldSorter("IDENTITY");
    quantity = this.addFieldSorter("QUANTITY");
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ActChargeOnShopPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:actChargeOn.ActChargeOnShopPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций акта поставки.
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} uuid Уникальный идентификатор позиции акта
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} actChargeOnShopUuid Идентификатор акта постановки, содержащего позицию
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} identity Идентификатор позиции внутри накладной
 * @property {FieldFilter<number, module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} quantity Количество
 * @property {module:productInfo.ProductInfoFilter<module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} productInfo Информация о продукции
 */
export class ActChargeOnShopPositionQuery extends FilterBuilder<ActChargeOnShopPositionQuery, ActChargeOnShopPositionSortOrder, ActChargeOnShopPosition> {

    uuid = this.addFieldFilter<string>("UUID");
    actChargeOnShopUuid = this.addFieldFilter<string>("ACT_CHARGE_ON_SHOP_UUID");
    identity = this.addFieldFilter<string>("IDENTITY");
    quantity = this.addFieldFilter<number>("QUANTITY", quantityConverter);
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ActChargeOnShopPositionQuery, ActChargeOnShopPositionSortOrder, ActChargeOnShopPosition>());

    constructor() {
        super(() => this, executor('ActChargeOnShopPosition', ActChargeOnShopPosition.prototype, {productInfo: ProductInfo.prototype}));
    }

}