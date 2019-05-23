import {FilterBuilder, SortOrder} from "abstract-query-builder"
import TtnInformF2Reg, {TtnInformF2RegPosition} from "../model/document/TtnInformF2Reg"
import {TtnInformF2RegStatus} from "../model/types"
import executor from "./executor"

/**
 * @class module:waybill.TtnInformF2RegSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} uuid Уникальный идентификатор справки 2 информации о предыдущих отгрузках
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} owner Кто подает документы
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} identity Идентификатор документа (клиентский)
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} wbRegId ИД накладной в системе (присвоенный)
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} egaisFixNumber Номер фиксации накладной(отгрузки) в ЕГАИС
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} egaisFixDate Дата составления накладной(отгрузки) в ЕГАИС
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} wbNumber Номер накладной
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} wbDate Дата составления накладной
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} shipperId Грузоотправитель
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} consigneeId Грузоотправитель
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} supplierId Поставщик
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} waybillId Уникальный идентификатор ТТН
 * @property {FieldSorter<module:waybill.TtnInformF2RegSortOrder>} status Текущий статус справки 2
 */
export class TtnInformF2RegSortOrder extends SortOrder<TtnInformF2RegSortOrder> {

    uuid = this.addFieldSorter("UUID");
    owner = this.addFieldSorter("OWNER");
    identity = this.addFieldSorter("IDENTITY");
    wbRegId = this.addFieldSorter("WB_REG_ID");
    egaisFixNumber = this.addFieldSorter("EGAIS_FIX_NUMBER");
    egaisFixDate = this.addFieldSorter("EGAIS_FIX_DATE");
    wbNumber = this.addFieldSorter("WB_NUMBER");
    wbDate = this.addFieldSorter("WB_DATE");
    shipperId = this.addFieldSorter("SHIPPER_ID");
    consigneeId = this.addFieldSorter("CONSIGNEE_ID");
    supplierId = this.addFieldSorter("SUPPLIER_ID");
    waybillId = this.addFieldSorter("WAY_BILL_ID");
    status = this.addFieldSorter("STATUS");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:waybill.TtnInformF2RegQuery
 * @classdesc Класс для формирования запроса на получение справок 2 к ТТН.
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} uuid Уникальный идентификатор справки 2 информации о предыдущих отгрузках
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} owner Кто подает документы
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} identity Идентификатор документа (клиентский)
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} wbRegId ИД накладной в системе (присвоенный)
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} egaisFixNumber Номер фиксации накладной(отгрузки) в ЕГАИС
 * @property {FieldFilter<Date, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} egaisFixDate Дата составления накладной(отгрузки) в ЕГАИС
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} wbNumber Номер накладной
 * @property {FieldFilter<Date, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} wbDate Дата составления накладной
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} shipperId Грузоотправитель
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} consigneeId Грузоотправитель
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} supplierId Поставщик
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} waybillId Уникальный идентификатор ТТН
 * @property {FieldFilter<module:waybill#TtnInformF2RegStatus, module:waybill.TtnInformF2RegQuery, module:waybill.TtnInformF2RegSortOrder, module:waybill.TtnInformF2Reg>} status Текущий статус справки 2
 */
export default class TtnInformF2RegQuery extends FilterBuilder<TtnInformF2RegQuery, TtnInformF2RegSortOrder, TtnInformF2Reg> {

    uuid = this.addFieldFilter<string>("UUID");
    owner = this.addFieldFilter<string>("OWNER");
    identity = this.addFieldFilter<string>("IDENTITY");
    wbRegId = this.addFieldFilter<string>("WB_REG_ID");
    egaisFixNumber = this.addFieldFilter<string>("EGAIS_FIX_NUMBER");
    egaisFixDate = this.addFieldFilter<Date>("EGAIS_FIX_DATE");
    wbNumber = this.addFieldFilter<string>("WB_NUMBER");
    wbDate = this.addFieldFilter<Date>("WB_DATE");
    shipperId = this.addFieldFilter<string>("SHIPPER_ID");
    consigneeId = this.addFieldFilter<string>("CONSIGNEE_ID");
    supplierId = this.addFieldFilter<string>("SUPPLIER_ID");
    waybillId = this.addFieldFilter<string>("WAY_BILL_ID");
    status = this.addFieldFilter<TtnInformF2RegStatus>("STATUS");

    constructor() {
        super(() => this, executor('TtnInformF2Reg', TtnInformF2Reg.prototype));
    }

}

/**
 * @class module:waybill.TtnInformF2RegPositionSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:waybill.TtnInformF2RegPositionSortOrder>} uuid Уникальный идентификатор позиции
 * @property {FieldSorter<module:waybill.TtnInformF2RegPositionSortOrder>} ttnInformF2RegUuid Уникальный идентификатор справки 2
 * @property {FieldSorter<module:waybill.TtnInformF2RegPositionSortOrder>} identity Идентификатор позиции внутри накладной
 * @property {FieldSorter<module:waybill.TtnInformF2RegPositionSortOrder>} informF2RegId Регистрационный номер записи справки 2
 */
export class TtnInformF2RegPositionSortOrder extends SortOrder<TtnInformF2RegPositionSortOrder> {

    uuid = this.addFieldSorter("UUID");
    ttnInformF2RegUuid = this.addFieldSorter("TTN_INFORM_F2_REG_ID");
    identity = this.addFieldSorter("IDENTITY");
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:waybill.TtnInformF2RegPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций акта списания из магазина.
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegPositionQuery, module:waybill.TtnInformF2RegPositionSortOrder, module:waybill.TtnInformF2RegPosition>} uuid Уникальный идентификатор позиции
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegPositionQuery, module:waybill.TtnInformF2RegPositionSortOrder, module:waybill.TtnInformF2RegPosition>} ttnInformF2RegUuid Уникальный идентификатор справки 2
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegPositionQuery, module:waybill.TtnInformF2RegPositionSortOrder, module:waybill.TtnInformF2RegPosition>} identity Идентификатор позиции внутри накладной
 * @property {FieldFilter<string, module:waybill.TtnInformF2RegPositionQuery, module:waybill.TtnInformF2RegPositionSortOrder, module:waybill.TtnInformF2RegPosition>} informF2RegId Регистрационный номер записи справки 2
 */
export class TtnInformF2RegPositionQuery extends FilterBuilder<TtnInformF2RegPositionQuery, TtnInformF2RegPositionSortOrder, TtnInformF2RegPosition> {

    uuid = this.addFieldFilter<string>("UUID");
    ttnInformF2RegUuid = this.addFieldFilter<string>("TTN_INFORM_F2_REG_ID");
    identity = this.addFieldFilter<string>("IDENTITY");
    informF2RegId = this.addFieldFilter<string>("INFORM_F2_REG_ID");

    constructor() {
        super(() => this, executor('TtnInformF2RegPosition', TtnInformF2RegPosition.prototype));
    }

}