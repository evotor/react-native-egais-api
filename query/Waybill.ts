import {FilterBuilder, SortOrder} from "abstract-query-builder"
import defaultExecutor from './defaultExecutor'
import Waybill, {WaybillPosition, WaybillPositionMark} from '../model/document/Waybill'
import {WaybillType, UnitType, WaybillStatus, WaybillResolution, Version, Direction} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class WaybillSortOrder extends SortOrder<WaybillSortOrder> {

    /**
     * UUID накладной.
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * Отправитель накладной.
     */
    docOwner = this.addFieldSorter("OWNER");

    /**
     * Идентификатор накладной (клиентский, к заполнению необязательный).
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Тип накладной.
     */
    type = this.addFieldSorter("TYPE");

    /**
     * тип упаковки.
     */
    unitType = this.addFieldSorter("UNIT_TYPE");

    /**
     * Номер документа.
     */
    number = this.addFieldSorter("NUMBER");

    /**
     * Дата составления.
     */
    date = this.addFieldSorter("DATE");

    /**
     * Дата отгрузки продукции.
     */
    shippingDate = this.addFieldSorter("SHIPPING_DATE");

    /**
     * Грузоотправитель.
     */
    shipperId = this.addFieldSorter("SHIPPER_ID");

    /**
     * Грузополучатель.
     */
    consigneeId = this.addFieldSorter("CONSIGNEE_ID");

    /**
     * Поставщик.
     */
    supplierId = this.addFieldSorter("SUPPLIER_ID");

    /**
     * Основание.
     */
    base = this.addFieldSorter("BASE");

    /**
     * Заметки.
     */
    note = this.addFieldSorter("NOTE");

    /**
     * Текущий статус накладной.
     */
    status = this.addFieldSorter("STATUS");

    /**
     * Резолюция накладной.
     */
    resolution = this.addFieldSorter("RESOLUTION");

    /**
     * uuid справки 2 для накладной.
     */
    ttnInformF2RegUuid = this.addFieldSorter("TTN_INFORM_F2_REG_UUID");

    /**
     * ИД накладной в системе ЕГАИС.
     */
    wbRegId = this.addFieldSorter("WB_REG_ID");

    /**
     * Направление документа в представлении УТМ (входящий/исходящий).
     */
    direction = this.addFieldSorter("DIRECTION");

    /**
     * Версия протокола ЕГАИС, по которому отправлена накладная.
     */
    version = this.addFieldSorter("VERSION");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение ТТН
 */
export default class WaybillQuery extends FilterBuilder<WaybillQuery, WaybillSortOrder, Waybill> {

    /**
     * UUID накладной.
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * Отправитель накладной.
     */
    docOwner = this.addFieldFilter<string>("OWNER");

    /**
     * Идентификатор накладной (клиентский, к заполнению необязательный).
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Тип накладной.
     */
    type = this.addFieldFilter<WaybillType>("TYPE");

    /**
     * тип упаковки.
     */
    unitType = this.addFieldFilter<UnitType | null>("UNIT_TYPE");

    /**
     * Номер документа.
     */
    number = this.addFieldFilter<string>("NUMBER");

    /**
     * Дата составления.
     */
    date = this.addFieldFilter<Date>("DATE");

    /**
     * Дата отгрузки продукции.
     */
    shippingDate = this.addFieldFilter<Date>("SHIPPING_DATE");

    /**
     * Грузоотправитель.
     */
    shipperId = this.addFieldFilter<string>("SHIPPER_ID");

    /**
     * Грузополучатель.
     */
    consigneeId = this.addFieldFilter<string>("CONSIGNEE_ID");

    /**
     * Поставщик.
     */
    supplierId = this.addFieldFilter<(string | null)>("SUPPLIER_ID");

    /**
     * Основание.
     */
    base = this.addFieldFilter<(string | null)>("BASE");

    /**
     * Заметки.
     */
    note = this.addFieldFilter<(string | null)>("NOTE");

    /**
     * Текущий статус накладной.
     */
    status = this.addFieldFilter<WaybillStatus>("STATUS");

    /**
     * Резолюция накладной.
     */
    resolution = this.addFieldFilter<WaybillResolution>("RESOLUTION");

    /**
     * uuid справки 2 для накладной.
     */
    ttnInformF2RegUuid = this.addFieldFilter<(string | null)>("TTN_INFORM_F2_REG_UUID");

    /**
     * ИД накладной в системе ЕГАИС.
     */
    wbRegId = this.addFieldFilter<(string | null)>("WB_REG_ID");

    /**
     * Направление документа в представлении УТМ (входящий/исходящий).
     */
    direction = this.addFieldFilter<Direction>("DIRECTION");

    /**
     * Версия протокола ЕГАИС, по которому отправлена накладная.
     */
    version = this.addFieldFilter<Version>("VERSION");

    constructor() {
        super(() => this, defaultExecutor('WayBill', Waybill.prototype));
    }

}

/**
 * Класс для сортировки элементов в результе запроса
 */
export class WaybillPositionSortOrder extends SortOrder<WaybillPositionSortOrder> {

    /**
     * UUID позиции накладной.
     */
    uuid = this.addFieldSorter("UUID");

    /**
     * UUID накладной.
     */
    waybillUuid = this.addFieldSorter("WAY_BILL_UUID");

    /**
     * Идентификатор внутри файла.
     */
    productIdentity = this.addFieldSorter("PRODUCT_INFO_IDENTITY");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<WaybillPositionSortOrder>());

    /**
     * Идентификатор упаковки.
     */
    packId = this.addFieldSorter("PACK_ID");

    /**
     * Количество.
     */
    quantity = this.addFieldSorter("QUANTITY");

    /**
     * Цена за единицу товара.
     */
    price = this.addFieldSorter("PRICE");

    /**
     * Номер партии.
     */
    party = this.addFieldSorter("PARTY");

    /**
     * Идентификатор позиции внутри накладной.
     */
    identity = this.addFieldSorter("IDENTITY");

    /**
     * Справка 1. Не может быть null
     */
    informF1RegId = this.addFieldSorter("INFORM_F1_REG_ID");

    /**
     * Регистрационный номер раздела справки 2, по которому продукция была получена отправителем.
     */
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение позиций ТТН
 */
export class WaybillPositionQuery extends FilterBuilder<WaybillPositionQuery, WaybillPositionSortOrder, WaybillPosition> {

    /**
     * UUID позиции накладной.
     */
    uuid = this.addFieldFilter<string>("UUID");

    /**
     * UUID накладной.
     */
    waybillUuid = this.addFieldFilter<string>("WAY_BILL_UUID");

    /**
     * Идентификатор внутри файла.
     */
    productIdentity = this.addFieldFilter<(string | null)>("PRODUCT_INFO_IDENTITY");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<WaybillPositionQuery, WaybillPositionSortOrder, WaybillPosition>());

    /**
     * Идентификатор упаковки.
     */
    packId = this.addFieldFilter<(string | null)>("PACK_ID");

    /**
     * Количество.
     */
    quantity = this.addFieldFilter<number>("QUANTITY", (v) => v * 1000);

    /**
     * Цена за единицу товара.
     */
    price = this.addFieldFilter<number>("PRICE", (v) => v * 100);

    /**
     * Номер партии.
     */
    party = this.addFieldFilter<(string | null)>("PARTY");

    /**
     * Идентификатор позиции внутри накладной.
     */
    identity = this.addFieldFilter<(string | null)>("IDENTITY");

    /**
     * Справка 1. Не может быть null
     */
    informF1RegId = this.addFieldFilter<(string | null)>("INFORM_F1_REG_ID");

    /**
     * Регистрационный номер раздела справки 2, по которому продукция была получена отправителем.
     */
    informF2RegId = this.addFieldFilter<(string | null)>("INFORM_F2_REG_ID");

    constructor() {
        super(() => this, defaultExecutor('WayBillPosition', WaybillPosition.prototype));
    }

}

/**
 * Класс для сортировки элементов в результе запроса
 */
export class WaybillPositionMarkSortOrder extends SortOrder<WaybillPositionMarkSortOrder> {

    /**
     * Уникальный идентификатор позиции в ТТН
     */
    waybillPositionUuid = this.addFieldSorter("WAY_BILL_POSITION_UUID");

    /**
     * Номер короба
     */
    boxNumber  = this.addFieldSorter("BOX_NUMBER");

    /**
     * Марка
     */
    mark = this.addFieldSorter("MARK");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение марок позиций ТТН
 */
export class WaybillPositionMarkQuery extends FilterBuilder<WaybillPositionMarkQuery, WaybillPositionMarkSortOrder, WaybillPositionMark> {

    /**
     * Уникальный идентификатор позиции в ТТН
     */
    waybillPositionUuid = this.addFieldFilter<(string | null)>("WAY_BILL_POSITION_UUID");

    /**
     * Номер короба
     */
    boxNumber  = this.addFieldFilter<(string | null)>("BOX_NUMBER");

    /**
     * Марка
     */
    mark = this.addFieldFilter<string>("MARK");

    constructor() {
        super(() => this, defaultExecutor('WayBillPositionMark', WaybillPositionMark.prototype));
    }

}