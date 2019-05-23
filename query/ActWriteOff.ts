import {FilterBuilder, SortOrder} from "abstract-query-builder"
import ActWriteOff, {ActWriteOffPosition} from '../model/document/ActWriteOff'
import ProductInfo from "../model/dictionary/ProductInfo"
import {ActWriteOffStatus, ActWriteOffType, Version} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"
import {quantityConverter} from "./converters"
import executor from './executor'

/**
 * @class module:actWriteOff.ActWriteOffSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} uuid Уникальный идентификатор акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} docOwner Отправитель акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} identity Идентификатор акта списания со склада (клиентский, к заполнению необязательный)
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} number Номер документа
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} actDate Дата составления
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} type Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} note Примечание
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} status Статус акта списания
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} rejectComment Комментарий для отказа на акт списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} version Версия протокола ЕГАИС
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export class ActWriteOffSortOrder extends SortOrder<ActWriteOffSortOrder> {

    uuid = this.addFieldSorter("UUID");
    docOwner = this.addFieldSorter("OWNER");
    identity = this.addFieldSorter("IDENTITY");
    number = this.addFieldSorter("NUMBER");
    actDate = this.addFieldSorter("ACT_DATE");
    type = this.addFieldSorter("TYPE_WRITE_OFF");
    note = this.addFieldSorter("NOTE");
    status = this.addFieldSorter("STATUS");
    rejectComment = this.addFieldSorter("REJECT_COMMENT");
    version = this.addFieldSorter("VERSION");
    replyId = this.addFieldSorter("REPLY_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:actWriteOff.ActWriteOffQuery
 * @classdesc Класс для формирования запроса на получение актов списания со склада.
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} uuid Уникальный идентификатор акта списания со склада
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} docOwner Отправитель акта списания со склада
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} identity Идентификатор акта списания со склада (клиентский, к заполнению необязательный)
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} number Номер документа
 * @property {FieldFilter<Date, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} actDate Дата составления
 * @property {FieldFilter<?module:actWriteOff#ActWriteOffType, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} type Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} note Примечание
 * @property {FieldFilter<module:actWriteOff#ActWriteOffStatus, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} status Статус акта списания
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} rejectComment Комментарий для отказа на акт списания со склада
 * @property {FieldFilter<Version, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} version Версия протокола ЕГАИС
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class ActWriteOffQuery extends FilterBuilder<ActWriteOffQuery, ActWriteOffSortOrder, ActWriteOff> {

    uuid = this.addFieldFilter<string>("UUID");
    docOwner = this.addFieldFilter<string>("OWNER");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    number = this.addFieldFilter<(string | null)>("NUMBER");
    actDate = this.addFieldFilter<Date>("ACT_DATE");
    type = this.addFieldFilter<(ActWriteOffType | null)>("TYPE_WRITE_OFF");
    note = this.addFieldFilter<(string | null)>("NOTE");
    status = this.addFieldFilter<ActWriteOffStatus>("STATUS");
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");
    version = this.addFieldFilter<Version>("VERSION");
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, executor('ActWriteOff', ActWriteOff.prototype));
    }

}


/**
 * @class module:actWriteOff.ActWriteOffPositionSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} uuid Уникальный идентификатор позиции акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} actWriteOffUuid Уникальный идентификатор акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} identity Идентификатор позиции акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} quantity Количество
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:actWriteOff.ActWriteOffPositionSortOrder>} productInfo Информация о продукции
 */
export class ActWriteOffPositionSortOrder extends SortOrder<ActWriteOffPositionSortOrder> {

    uuid = this.addFieldSorter("UUID");
    actWriteOffUuid = this.addFieldSorter("ACT_WRITE_OFF_UUID");
    identity = this.addFieldSorter("IDENTITY");
    quantity = this.addFieldSorter("QUANTITY");
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");
    informF2MarkInfoJson = this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ActWriteOffPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:actWriteOff.ActWriteOffPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций акта списания со склада.
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} uuid Уникальный идентификатор позиции акта списания со склада
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} actWriteOffUuid Уникальный идентификатор акта списания со склада
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} identity Идентификатор позиции акта списания со склада
 * @property {FieldFilter<number, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} quantity Количество
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoFilter<module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} productInfo Информация о продукции
 */
export class ActWriteOffPositionQuery extends FilterBuilder<ActWriteOffPositionQuery, ActWriteOffPositionSortOrder, ActWriteOffPosition> {

    uuid = this.addFieldFilter<string>("UUID");
    actWriteOffUuid = this.addFieldFilter<string>("ACT_WRITE_OFF_UUID");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    quantity = this.addFieldFilter<number>("QUANTITY", quantityConverter);
    informF2RegId = this.addFieldFilter<(string | null)>("INFORM_F2_REG_ID");
    informF2MarkInfoJson = this.addFieldFilter<(string | null)>("INFORM_F2_MARK_INFO_JSON");
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ActWriteOffPositionQuery, ActWriteOffPositionSortOrder, ActWriteOffPosition>());

    constructor() {
        super(() => this, executor('ActWriteOffPosition', ActWriteOffPosition.prototype, {productInfo: ProductInfo.prototype}));
    }

}

