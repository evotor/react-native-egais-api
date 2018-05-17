import {FilterBuilder, SortOrder} from "abstract-query-builder"
import TtnInformF2Reg, {TtnInformF2RegPosition} from "../model/document/TtnInformF2Reg"
import {TtnInformF2RegStatus} from "../model/types"
import {ProductInfoInnerSortOrder} from "./inner/ProductInfo";
import defaultExecutor from "./defaultExecutor"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class TtnInformF2RegSortOrder extends SortOrder<TtnInformF2RegSortOrder> {

    /**
     * Уникальный идентификатор справки 2 информации о предыдущих отгрузках
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
     * ИД накладной в системе (присвоенный)
     */
    wbRegId = this.addFieldSorter("WB_REG_ID");

    /**
     * Номер фиксации накладной(отгрузки) в ЕГАИС
     */
    egaisFixNumber = this.addFieldSorter("EGAIS_FIX_NUMBER");

    /**
     * Дата составления накладной(отгрузки) в ЕГАИС
     */
    egaisFixDate = this.addFieldSorter("EGAIS_FIX_DATE");

    /**
     * Номер накладной
     */
    wbNumber = this.addFieldSorter("WB_NUMBER");

    /**
     * Дата составления накладной
     */
    wbDate = this.addFieldSorter("WB_DATE");

    /**
     * Грузоотправитель
     */
    shipperId = this.addFieldSorter("SHIPPER_ID");

    /**
     * Грузополучатель
     */
    consigneeId = this.addFieldSorter("CONSIGNEE_ID");

    /**
     * Поставщик
     */
    supplierId = this.addFieldSorter("SUPPLIER_ID");

    /**
     * Уникальный идентификатор ТТН
     */
    waybillId = this.addFieldSorter("WAY_BILL_ID");

    /**
     * Текущий статус справки 2
     */
    status = this.addFieldSorter("STATUS");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение актов списания из магазина
 */
export default class TtnInformF2RegQuery extends FilterBuilder<TtnInformF2RegQuery, TtnInformF2RegSortOrder, TtnInformF2Reg> {

    /**
     * Уникальный идентификатор справки 2 информации о предыдущих отгрузках
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Кто подает документы
     */
    owner = this.addFieldFilter<string>("OWNER");

    /**
     * Идентификатор документа (клиентский)
     */
    identity = this.addFieldFilter<string>("IDENTITY");

    /**
     * ИД накладной в системе (присвоенный)
     */
    wbRegId = this.addFieldFilter<string>("WB_REG_ID");

    /**
     * Номер фиксации накладной(отгрузки) в ЕГАИС
     */
    egaisFixNumber = this.addFieldFilter<string>("EGAIS_FIX_NUMBER");

    /**
     * Дата составления накладной(отгрузки) в ЕГАИС
     */
    egaisFixDate = this.addFieldFilter<Date>("EGAIS_FIX_DATE");

    /**
     * Номер накладной
     */
    wbNumber = this.addFieldFilter<string>("WB_NUMBER");

    /**
     * Дата составления накладной
     */
    wbDate = this.addFieldFilter<Date>("WB_DATE");

    /**
     * Грузоотправитель
     */
    shipperId = this.addFieldFilter<string>("SHIPPER_ID");

    /**
     * Грузополучатель
     */
    consigneeId = this.addFieldFilter<string>("CONSIGNEE_ID");

    /**
     * Поставщик
     */
    supplierId = this.addFieldFilter<string>("SUPPLIER_ID");

    /**
     * Уникальный идентификатор ТТН
     */
    waybillId = this.addFieldFilter<string>("WAY_BILL_ID");

    /**
     * Текущий статус справки 2
     */
    status = this.addFieldFilter<TtnInformF2RegStatus>("STATUS");

    constructor() {
        super(() => this, defaultExecutor('TtnInformF2Reg', TtnInformF2Reg.prototype));
    }

}

/**
 * Класс для сортировки элементов в результе запроса
 */
export class TtnInformF2RegPositionSortOrder extends SortOrder<TtnInformF2RegPositionSortOrder> {

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
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<TtnInformF2RegPositionSortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение позиций акта списания из магазина
 */
export class TtnInformF2RegPositionQuery extends FilterBuilder<TtnInformF2RegPositionQuery, TtnInformF2RegPositionSortOrder, TtnInformF2RegPosition> {

    /**
     * Уникальный идентификатор позиции
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Уникальный идентификатор справки 2
     */
    ttnInformF2RegUuid = this.addFieldFilter<string>("TTN_INFORM_F2_REG_ID");

    /**
     * Идентификатор позиции внутри накладной
     */
    identity = this.addFieldFilter<string>("IDENTITY");

    /**
     * Регистрационный номер записи справки 2
     */
    informF2RegId = this.addFieldFilter<string>("INFORM_F2_REG_ID");

    constructor() {
        super(() => this, defaultExecutor('TtnInformF2RegPosition', TtnInformF2RegPosition.prototype));
    }

}