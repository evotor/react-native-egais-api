import {FilterBuilder, SortOrder} from 'abstract-query-builder'
import WaybillAct, {WaybillActPosition, WaybillActPositionMark} from '../model/document/WaybillAct'
import {AcceptType, Version, WaybillActStatus, WaybillActType} from "../model/types"
import {quantityConverter} from "./converters"
import executor from "./executor"

/**
 * @class module:waybillAct.WaybillActSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} uuid Уникальный идентификатор акта
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} docOwner Кто подает документы
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} identity Идентификатор акта (клиентский)
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} acceptType Тип подтверждения: Принимаем/есть расхождения/отказываем
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} number Номер акта
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} creationDate Дата составления акта
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} wbRegId Идентификатор накладной в системе
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} note Заметки
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} type Тип приемки: Полная/частичная
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} version Версия протокола ЕГАИС
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} status Статус накладной
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} rejectComment Комментарий для отказа
 * @property {FieldSorter<module:waybillAct.WaybillActSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export class WaybillActSortOrder extends SortOrder<WaybillActSortOrder> {

    uuid = this.addFieldSorter("UUID");
    docOwner = this.addFieldSorter("OWNER");
    identity = this.addFieldSorter("IDENTITY");
    acceptType = this.addFieldSorter("ACCEPT_TYPE");
    number = this.addFieldSorter("NUMBER");
    creationDate = this.addFieldSorter("CREATION_DATE");
    wbRegId = this.addFieldSorter("WB_REG_ID");
    note = this.addFieldSorter("NOTE");
    type = this.addFieldSorter("TYPE");
    version = this.addFieldSorter("VERSION");
    status = this.addFieldSorter("STATUS");
    rejectComment = this.addFieldSorter("REJECT_COMMENT");
    replyId = this.addFieldSorter("REPLY_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:waybillAct.WaybillActQuery
 * @classdesc Класс для формирования запроса на получение актов ТТН.
 * @property {FieldFilter<string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} uuid Уникальный идентификатор акта
 * @property {FieldFilter<string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} docOwner Кто подает документы
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} identity Идентификатор акта (клиентский)
 * @property {FieldFilter<module:waybillAct#AcceptType, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} acceptType Тип подтверждения: Принимаем/есть расхождения/отказываем
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} number Номер акта
 * @property {FieldFilter<Date, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} creationDate Дата составления акта
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} wbRegId Идентификатор накладной в системе
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} note Заметки
 * @property {FieldFilter<?module:waybillAct#WaybillActType, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} type Тип акта расхождения к ТТН: Полный/Частичный
 * @property {FieldFilter<?Version, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} version Версия протокола ЕГАИС
 * @property {FieldFilter<module:waybillAct#WaybillActStatus, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} status Статус акта разногласия для ТТН
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} rejectComment Комментарий для отказа
 * @property {FieldFilter<?string, module:waybillAct.WaybillActQuery, module:waybillAct.WaybillActSortOrder, module:waybillAct.WaybillAct>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class WaybillActQuery extends FilterBuilder<WaybillActQuery, WaybillActSortOrder, WaybillAct> {

    uuid = this.addFieldFilter<string>("UUID");
    docOwner = this.addFieldFilter<string>("OWNER");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    acceptType = this.addFieldFilter<AcceptType>("ACCEPT_TYPE");
    number = this.addFieldFilter<(string | null)>("NUMBER");
    creationDate = this.addFieldFilter<Date>("CREATION_DATE");
    wbRegId = this.addFieldFilter<(string | null)>("WB_REG_ID");
    note = this.addFieldFilter<(string | null)>("NOTE");
    type = this.addFieldFilter<(WaybillActType | null)>("TYPE");
    version = this.addFieldFilter<(Version | null)>("VERSION");
    status = this.addFieldFilter<WaybillActStatus>("STATUS");
    rejectComment = this.addFieldFilter<(string | null)>("REJECT_COMMENT");
    replyId = this.addFieldFilter<(string | null)>("REPLY_ID");

    constructor() {
        super(() => this, executor('WayBillAct', WaybillAct.prototype));
    }

}

/**
 * @class module:waybillAct.WaybillActPositionSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} uuid Уникальный идентификатор позиции акта
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} waybillActUuid Уникальный идентификатор акта, содержащего позицию
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} identity Идентификатор позиции внутри накладной
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldSorter<module:waybillAct.WaybillActPositionSortOrder>} realQuantity Количество
 */
export class WaybillActPositionSortOrder extends SortOrder<WaybillActPositionSortOrder> {

    uuid = this.addFieldSorter("UUID");
    waybillActUuid = this.addFieldSorter("WAY_BILL_ACT_UUID");
    identity = this.addFieldSorter("IDENTITY");
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");
    realQuantity = this.addFieldSorter("REAL_QUANTITY");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:waybillAct.WaybillActPositionQuery
 * @classdesc Класс для формирования запроса на получение позиицй акта ТТН.
 * @property {FieldFilter<string, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} uuid Уникальный идентификатор позиции акта
 * @property {FieldFilter<string, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} waybillActUuid Уникальный идентификатор акта, содержащего позицию
 * @property {FieldFilter<string, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} identity Идентификатор позиции внутри накладной
 * @property {FieldFilter<?string, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldFilter<number, module:waybillAct.WaybillActPositionQuery, module:waybillAct.WaybillActPositionSortOrder, module:waybillAct.WaybillActPosition>} realQuantity Количество
 */
export class WaybillActPositionQuery extends FilterBuilder<WaybillActPositionQuery, WaybillActPositionSortOrder, WaybillActPosition> {

    uuid = this.addFieldFilter<string>("UUID");
    waybillActUuid = this.addFieldFilter<string>("WAY_BILL_ACT_UUID");
    identity = this.addFieldFilter<string>("IDENTITY");
    informF2RegId = this.addFieldFilter<(string | null)>("INFORM_F2_REG_ID");
    realQuantity = this.addFieldFilter<number>("REAL_QUANTITY", quantityConverter);


    constructor() {
        super(() => this, executor('WayBillActPosition', WaybillActPosition.prototype));
    }

}

/**
 * @class module:waybillAct.WaybillActPositionMarkSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybillAct.WaybillActPositionMarkSortOrder>} waybillActPositionUuid Уникальный идентификатор позиции акта ТТН
 * @property {FieldSorter<module:waybillAct.WaybillActPositionMarkSortOrder>} mark Марка
 */
export class WaybillActPositionMarkSortOrder extends SortOrder<WaybillActPositionMarkSortOrder> {

    waybillActPositionUuid = this.addFieldSorter("WAY_BILL_ACT_POSITION_UUID");
    mark = this.addFieldSorter("MARK");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:waybillAct.WaybillActPositionMarkQuery
 * @classdesc Класс для формирования запроса на получение марок позиций акта ТТН.
 * @property {FieldFilter<?string, module:waybillAct.WaybillActPositionMarkQuery, module:waybillAct.WaybillActPositionMarkSortOrder, module:waybillAct.WaybillActPositionMark>} waybillActPositionUuid Уникальный идентификатор позиции акта ТТН
 * @property {FieldFilter<string, module:waybillAct.WaybillActPositionMarkQuery, module:waybillAct.WaybillActPositionMarkSortOrder, module:waybillAct.WaybillActPositionMark>} mark Марка
 */
export class WaybillActPositionMarkQuery extends FilterBuilder<WaybillActPositionMarkQuery, WaybillActPositionMarkSortOrder, WaybillActPositionMark> {

    waybillActPositionUuid = this.addFieldFilter<(string | null)>("WAY_BILL_ACT_POSITION_UUID");
    mark = this.addFieldFilter<string>("MARK");

    constructor() {
        super(() => this, executor('WayBillActPositionMark', WaybillActPositionMark.prototype));
    }

}