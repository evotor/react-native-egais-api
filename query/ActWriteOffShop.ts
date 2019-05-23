import {FilterBuilder, SortOrder} from "abstract-query-builder"
import ActWriteOffShop, {ActWriteOffShopPosition} from "../model/document/ActWriteOffShop"
import {ActWriteOffStatus, ActWriteOffType} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"
import {quantityConverter} from "./converters"
import executor from "./executor"

/**
 * @class module:actWriteOff.ActWriteOffShopSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} uuid Уникальный идентификатор акта списания из магазина
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} docOwner Отправитель акта списания из магазина
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} identity Идентификатор акта списания из магазина (клиентский, к заполнению необязательный)
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} number Номер документа
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} actDate Дата составления
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} type Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} note Примечание
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} status Статус акта списания
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} rejectComment Комментарий для отказа на акт списания из магазина
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export class ActWriteOffShopSortOrder extends SortOrder<ActWriteOffShopSortOrder> {

    uuid = this.addFieldSorter("UUID");
    docOwner = this.addFieldSorter("OWNER");
    identity = this.addFieldSorter("IDENTITY");
    number = this.addFieldSorter("NUMBER");
    actDate = this.addFieldSorter("ACT_DATE");
    type = this.addFieldSorter("TYPE_WRITE_OFF");
    note = this.addFieldSorter("NOTE");
    status = this.addFieldSorter("STATUS");
    rejectComment = this.addFieldSorter("REJECT_COMMENT");
    replyId = this.addFieldSorter("REPLY_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:actWriteOff.ActWriteOffShopQuery
 * @classdesc Класс для формирования запроса на получение актов списания из магазина.
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} uuid Уникальный идентификатор акта списания из магазина
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} docOwner Отправитель акта списания из магазина
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} identity Идентификатор акта списания из магазина (клиентский, к заполнению необязательный)
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} number Номер документа
 * @property {FieldFilter<Date, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} actDate Дата составления
 * @property {FieldFilter<module:actWriteOff#ActWriteOffType, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} type Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} note Примечание
 * @property {FieldFilter<module:actWriteOff#ActWriteOffStatus, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} status Статус акта списания
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} rejectComment Комментарий для отказа на акт списания из магазина
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class ActWriteOffShopQuery extends FilterBuilder<ActWriteOffShopQuery, ActWriteOffShopSortOrder, ActWriteOffShop> {

    uuid = this.addFieldFilter<string>("UUID");
    docOwner = this.addFieldFilter<string>("OWNER");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    number = this.addFieldFilter<(string | null)>("NUMBER");
    actDate = this.addFieldFilter<Date>("ACT_DATE");
    type = this.addFieldFilter<(ActWriteOffType | null)>("TYPE_WRITE_OFF");
    note = this.addFieldFilter<(string | null)>("NOTE");
    status = this.addFieldFilter<ActWriteOffStatus>("STATUS");
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, executor('ActWriteOffShop', ActWriteOffShop.prototype));
    }

}

/**
 * @class module:actWriteOff.ActWriteOffShopPositionSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} uuid Уникальный идентификатор позиции акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} actWriteOffShopUuid Уникальный идентификатор акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} identity Идентификатор позиции акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} quantity Количество
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:actWriteOff.ActWriteOffShopPositionSortOrder>} productInfo Информация о продукции
 */
export class ActWriteOffShopPositionSortOrder extends SortOrder<ActWriteOffShopPositionSortOrder> {

    uuid = this.addFieldSorter("UUID");
    actWriteOffShopUuid = this.addFieldSorter("ACT_WRITE_OFF_SHOP_UUID");
    identity = this.addFieldSorter("IDENTITY");
    quantity = this.addFieldSorter("QUANTITY");
    informF2MarkInfoJson = this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ActWriteOffShopPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:actWriteOff.ActWriteOffShopPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций акта списания из магазина.
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} uuid Уникальный идентификатор позиции акта списания со склада
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} actWriteOffShopUuid Уникальный идентификатор акта списания со склада
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} identity Идентификатор позиции акта списания со склада
 * @property {FieldFilter<number, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} quantity Количество
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoFilter<module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} productInfo Информация о продукции
 */
export class ActWriteOffShopPositionQuery extends FilterBuilder<ActWriteOffShopPositionQuery, ActWriteOffShopPositionSortOrder, ActWriteOffShopPosition> {

    uuid = this.addFieldFilter<string>("UUID");
    actWriteOffShopUuid = this.addFieldFilter<string>("ACT_WRITE_OFF_SHOP_UUID");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    quantity = this.addFieldFilter<number>("QUANTITY", quantityConverter);
    informF2MarkInfoJson = this.addFieldFilter<(string | null)>("INFORM_F2_MARK_INFO_JSON");
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ActWriteOffShopPositionQuery, ActWriteOffShopPositionSortOrder, ActWriteOffShopPosition>());

    constructor() {
        super(() => this, executor('ActWriteOffShopPosition', ActWriteOffShopPosition.prototype));
    }

}