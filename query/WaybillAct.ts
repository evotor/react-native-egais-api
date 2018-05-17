import {FilterBuilder, SortOrder} from 'abstract-query-builder'
import defaultExecutor from "./defaultExecutor"
import WaybillAct, {WaybillActPosition, WaybillActPositionMark} from '../model/document/WaybillAct'
import {AcceptType, Version, WaybillActStatus, WaybillActType} from "../model/types"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class WaybillActSortOrder extends SortOrder<WaybillActSortOrder> {

    /**
     * Уникальный идентификатор акта
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Кто подает документы
     */
    docOwner = this.addFieldSorter("OWNER");

    /**
     * Идентификатор акта (клиентский)
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Тип подтверждения: Принимаем/есть расхождения/отказываем
     */
    acceptType = this.addFieldSorter("ACCEPT_TYPE");

    /**
     * Номер акта
     */
    number = this.addFieldSorter("NUMBER");

    /**
     * Дата составления акта
     */
    creationDate = this.addFieldSorter("CREATION_DATE");

    /**
     * Идентификатор накладной в системе
     */
    wbRegId = this.addFieldSorter("WB_REG_ID");

    /**
     * Заметки
     */
    note = this.addFieldSorter("NOTE");

    /**
     * Тип приемки: Полная/частичная
     */
    type = this.addFieldSorter("TYPE");

    /**
     * Версия протокола ЕГАИС
     */
    version = this.addFieldSorter("VERSION");

    /**
     * Статус накладной
     */
    status = this.addFieldSorter("STATUS");

    /**
     * Комментарий для отказа
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
 * Класс для формирования запроса на получение актов ТТН
 */
export default class WaybillActQuery extends FilterBuilder<WaybillActQuery, WaybillActSortOrder, WaybillAct> {

    /**
     * Уникальный идентификатор акта
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Кто подает документы
     */
    docOwner = this.addFieldFilter<string>("OWNER");

    /**
     * Идентификатор акта (клиентский)
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Тип подтверждения: Принимаем/есть расхождения/отказываем
     */
    acceptType = this.addFieldFilter<AcceptType>("ACCEPT_TYPE");

    /**
     * Номер акта
     */
    number = this.addFieldFilter<(string | null)>("NUMBER");

    /**
     * Дата составления акта
     */
    creationDate = this.addFieldFilter<Date>("CREATION_DATE");

    /**
     * Идентификатор накладной в системе
     */
    wbRegId = this.addFieldFilter<(string | null)>("WB_REG_ID");

    /**
     * Заметки
     */
    note = this.addFieldFilter<(string | null)>("NOTE");

    /**
     * Тип приемки: Полная/частичная
     */
    type = this.addFieldFilter<(WaybillActType | null)>("TYPE");

    /**
     * Версия протокола ЕГАИС
     */
    version = this.addFieldFilter<(Version | null)>("VERSION");

    /**
     * Статус накладной
     */
    status = this.addFieldFilter<WaybillActStatus>("STATUS");

    /**
     * Комментарий для отказа
     */
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");

    /**
     * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
     */
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, defaultExecutor('WayBillAct', WaybillAct.prototype));
    }

}


/**
 * Класс для сортировки элементов в результе запроса
 */
export class WaybillActPositionSortOrder extends SortOrder<WaybillActPositionSortOrder> {

    /**
     * Уникальный идентификатор позиции
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Уникальный идентификатор акта, содержащего позицию
     */
    waybillActUuid = this.addFieldSorter("WAY_BILL_ACT_UUID");

    /**
     * Идентификатор позиции внутри накладной
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Регистрационный номер раздела справки 2
     */
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");

    /**
     * Количество
     */
    realQuantity = this.addFieldSorter("REAL_QUANTITY");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение позиицй акта ТТН
 */
export class WaybillActPositionQuery extends FilterBuilder<WaybillActPositionQuery, WaybillActPositionSortOrder, WaybillActPosition> {

    /**
     * Уникальный идентификатор позиции
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Уникальный идентификатор акта, содержащего позицию
     */
    waybillActUuid = this.addFieldFilter<string>("WAY_BILL_ACT_UUID");

    /**
     * Идентификатор позиции внутри накладной
     */
    identity = this.addFieldFilter<string>("IDENTITY");

    /**
     * Регистрационный номер раздела справки 2
     */
    informF2RegId = this.addFieldFilter<(string | null)>("INFORM_F2_REG_ID");

    /**
     * Количество
     */
    realQuantity = this.addFieldFilter<number>("REAL_QUANTITY", (v) => v * 1000);


    constructor() {
        super(() => this, defaultExecutor('WayBillActPosition', WaybillActPosition.prototype));
    }

}

/**
 * Класс для сортировки элементов в результе запроса
 */
export class WaybillActPositionMarkSortOrder extends SortOrder<WaybillActPositionMarkSortOrder> {

    /**
     * Уникальный идентификатор позиции акта ТТН
     */
    waybillActPositionUuid = this.addFieldSorter("WAY_BILL_ACT_POSITION_UUID");

    /**
     * Марка
     */
    mark = this.addFieldSorter("MARK");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение марок позиций акта ТТН
 */
export class WaybillActPositionMarkQuery extends FilterBuilder<WaybillActPositionMarkQuery, WaybillActPositionMarkSortOrder, WaybillActPositionMark> {

    /**
     * Уникальный идентификатор позиции акта ТТН
     */
    waybillActPositionUuid = this.addFieldFilter<(string | null)>("WAY_BILL_ACT_POSITION_UUID");

    /**
     * Марка
     */
    mark = this.addFieldFilter<string>("MARK");

    constructor() {
        super(() => this, defaultExecutor('WayBillActPositionMark', WaybillActPositionMark.prototype));
    }

}