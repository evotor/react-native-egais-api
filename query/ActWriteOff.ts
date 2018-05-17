import {FilterBuilder, SortOrder} from "abstract-query-builder"
import ActWriteOff, {ActWriteOffPosition} from '../model/document/ActWriteOff'
import ProductInfo from "../model/dictionary/ProductInfo"
import {ActWriteOffStatus, ActWriteOffType, Version} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"
import defaultExecutor from './defaultExecutor'

/**
 * Класс для сортировки элементов в результе запроса
 */
export class ActWriteOffSortOrder extends SortOrder<ActWriteOffSortOrder> {

    /**
     * Уникальный идентификатор акта списания со склада
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Отправитель акта списания со склада
     */
    docOwner = this.addFieldSorter("OWNER");

    /**
     * Идентификатор акта списания со склада (клиентский, к заполнению необязательный)
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
     * Комментарий для отказа на акт списания со склада
     */
    rejectComment = this.addFieldSorter("REJECT_COMMENT");

    /**
     * Версия протокола ЕГАИС
     */
    version = this.addFieldSorter("VERSION");

    /**
     * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
     */
    replyId = this.addFieldSorter("REPLY_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение актов списания со склада
 */
export default class ActWriteOffQuery extends FilterBuilder<ActWriteOffQuery, ActWriteOffSortOrder, ActWriteOff> {

    /**
     * Уникальный идентификатор акта списания со склада
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Отправитель акта списания со склада
     */
    docOwner = this.addFieldFilter<string>("OWNER");

    /**
     * Идентификатор акта списания со склада (клиентский, к заполнению необязательный)
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
     * Комментарий для отказа на акт списания со склада
     */
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");

    /**
     * Версия протокола ЕГАИС
     */
    version = this.addFieldFilter<Version>("VERSION");

    /**
     * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
     */
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, defaultExecutor('ActWriteOff', ActWriteOff.prototype));
    }

}


/**
 * Класс для сортировки элементов в результе запроса
 */
export class ActWriteOffPositionSortOrder extends SortOrder<ActWriteOffPositionSortOrder> {

    /**
     * Уникальный идентификатор позиции акта списания со склада
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Уникальный идентификатор акта списания со склада
     */
    actWriteOffUuid = this.addFieldSorter("ACT_WRITE_OFF_UUID");

    /**
     * Идентификатор позиции акта списания со склада
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Количество
     */
    quantity = this.addFieldSorter("QUANTITY");

    /**
     * Регистрационный номер раздела справки 2
     */
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");

    /**
     * Информация о марках в формате JSON
     */
    informF2MarkInfoJson = this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ActWriteOffPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение позиций акта списания со склада
 */
export class ActWriteOffPositionQuery extends FilterBuilder<ActWriteOffPositionQuery, ActWriteOffPositionSortOrder, ActWriteOffPosition> {

    /**
     * Уникальный идентификатор позиции акта списания со склада
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Уникальный идентификатор акта списания со склада
     */
    actWriteOffUuid = this.addFieldFilter<string>("ACT_WRITE_OFF_UUID");

    /**
     * Идентификатор позиции акта списания со склада
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Количество
     */
    quantity = this.addFieldFilter<number>("QUANTITY", (v) => v * 1000);

    /**
     * Регистрационный номер раздела справки 2
     */
    informF2RegId = this.addFieldFilter<(string | null)>("INFORM_F2_REG_ID");

    /**
     * Информация о марках в формате JSON
     */
    informF2MarkInfoJson = this.addFieldFilter<(string | null)>("INFORM_F2_MARK_INFO_JSON");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ActWriteOffPositionQuery, ActWriteOffPositionSortOrder, ActWriteOffPosition>());

    constructor() {
        super(() => this, defaultExecutor('ActWriteOffPosition', ActWriteOffPosition.prototype, {productInfo: ProductInfo.prototype}));
    }

}

