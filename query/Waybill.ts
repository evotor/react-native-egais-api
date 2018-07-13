import {FilterBuilder, SortOrder} from "abstract-query-builder"
import Waybill, {WaybillPosition, WaybillPositionMark} from '../model/document/Waybill'
import {WaybillType, UnitType, WaybillStatus, WaybillResolution, Version, Direction} from "../model/types"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"
import {quantityConverter, priceConverter} from "./converters"
import executor from './executor'

/**
 * @class module:waybill.WaybillSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} uuid UUID накладной
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} docOwner Отправитель накладной
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} identity дентификатор накладной (клиентский, к заполнению необязательный)
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} type Тип накладной
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} unitType Тип упаковки
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} number Номер документа
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} date Дата составления
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} shippingDate Дата отгрузки продукции
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} shipperId Грузоотправитель
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} consigneeId Грузополучатель
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} supplierId Поставщик
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} base Основание
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} note Заметки
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} status Текущий статус накладной
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} resolution Резолюция накладной
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} ttnInformF2RegUuid Uuid справки 2 для накладной
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} wbRegId ИД накладной в системе ЕГАИС
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} direction Направление документа в представлении УТМ (входящий/исходящий)
 * @property {FieldSorter<module:waybill.WaybillSortOrder>} version Версия протокола ЕГАИС, по которому отправлена накладная
 */
export class WaybillSortOrder extends SortOrder<WaybillSortOrder> {

    uuid = this.addFieldSorter("UUID");
    docOwner = this.addFieldSorter("OWNER");
    identity = this.addFieldSorter("IDENTITY");
    type = this.addFieldSorter("TYPE");
    unitType = this.addFieldSorter("UNIT_TYPE");
    number = this.addFieldSorter("NUMBER");
    date = this.addFieldSorter("DATE");
    shippingDate = this.addFieldSorter("SHIPPING_DATE");
    shipperId = this.addFieldSorter("SHIPPER_ID");
    consigneeId = this.addFieldSorter("CONSIGNEE_ID");
    supplierId = this.addFieldSorter("SUPPLIER_ID");
    base = this.addFieldSorter("BASE");
    note = this.addFieldSorter("NOTE");
    status = this.addFieldSorter("STATUS");
    resolution = this.addFieldSorter("RESOLUTION");
    ttnInformF2RegUuid = this.addFieldSorter("TTN_INFORM_F2_REG_UUID");
    wbRegId = this.addFieldSorter("WB_REG_ID");
    direction = this.addFieldSorter("DIRECTION");
    version = this.addFieldSorter("VERSION");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:waybill.WaybillQuery
 * @classdesc Класс для формирования запроса на получение товарно-транспортных накладных.
 * @property {FieldFilter<string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} uuid UUID накладной
 * @property {FieldFilter<string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} docOwner Отправитель накладной
 * @property {FieldFilter<?string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} identity дентификатор накладной (клиентский, к заполнению необязательный)
 * @property {FieldFilter<module:waybill#WaybillType, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} type Тип накладной
 * @property {FieldFilter<?module:waybill#UnitType, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} unitType Тип упаковки
 * @property {FieldFilter<string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} number Номер документа
 * @property {FieldFilter<Date, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} date Дата составления
 * @property {FieldFilter<Date, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} shippingDate Дата отгрузки продукции
 * @property {FieldFilter<string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} shipperId Грузоотправитель
 * @property {FieldFilter<string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} consigneeId Грузополучатель
 * @property {FieldFilter<?string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} supplierId Поставщик
 * @property {FieldFilter<?string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} base Основание
 * @property {FieldFilter<?string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} note Заметки
 * @property {FieldFilter<module:waybill#WaybillStatus, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} status Текущий статус накладной
 * @property {FieldFilter<module:waybill#WaybillResolution, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} resolution Резолюция накладной
 * @property {FieldFilter<?string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} ttnInformF2RegUuid Uuid справки 2 для накладной
 * @property {FieldFilter<?string, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} wbRegId ИД накладной в системе ЕГАИС
 * @property {FieldFilter<module:waybill#Direction, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} direction Направление документа в представлении УТМ (входящий/исходящий)
 * @property {FieldFilter<Version, module:waybill.WaybillQuery, module:waybill.WaybillSortOrder, module:waybill.Waybill>} version Версия протокола ЕГАИС, по которому отправлена накладная
 */
export default class WaybillQuery extends FilterBuilder<WaybillQuery, WaybillSortOrder, Waybill> {

    uuid = this.addFieldFilter<string>("UUID");
    docOwner = this.addFieldFilter<string>("OWNER");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    type = this.addFieldFilter<WaybillType>("TYPE");
    unitType = this.addFieldFilter<UnitType | null>("UNIT_TYPE");
    number = this.addFieldFilter<string>("NUMBER");
    date = this.addFieldFilter<Date>("DATE");
    shippingDate = this.addFieldFilter<Date>("SHIPPING_DATE");
    shipperId = this.addFieldFilter<string>("SHIPPER_ID");
    consigneeId = this.addFieldFilter<string>("CONSIGNEE_ID");
    supplierId = this.addFieldFilter<(string | null)>("SUPPLIER_ID");
    base = this.addFieldFilter<(string | null)>("BASE");
    note = this.addFieldFilter<(string | null)>("NOTE");
    status = this.addFieldFilter<WaybillStatus>("STATUS");
    resolution = this.addFieldFilter<WaybillResolution>("RESOLUTION");
    ttnInformF2RegUuid = this.addFieldFilter<(string | null)>("TTN_INFORM_F2_REG_UUID");
    wbRegId = this.addFieldFilter<(string | null)>("WB_REG_ID");
    direction = this.addFieldFilter<Direction>("DIRECTION");
    version = this.addFieldFilter<Version>("VERSION");

    constructor() {
        super(() => this, executor('WayBill', Waybill.prototype));
    }

}

/**
 * @class module:waybill.WaybillPositionSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} uuid UUID позиции накладной
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} waybillUuid UUID накладной
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} productIdentity Идентификатор внутри файла
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:waybill.WaybillPositionSortOrder>} productInfo Информация о продукции
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} packId Идентификатор упаковки
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} quantity Количество
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} price Цена за единицу товара
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} party Номер партии
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} identity Идентификатор позиции внутри накладной
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} informF1RegId Справка 1. Не может быть null
 * @property {FieldSorter<module:waybill.WaybillPositionSortOrder>} informF2RegId Регистрационный номер раздела справки 2, по которому продукция была получена отправителем
 */
export class WaybillPositionSortOrder extends SortOrder<WaybillPositionSortOrder> {

    uuid = this.addFieldSorter("UUID");
    waybillUuid = this.addFieldSorter("WAY_BILL_UUID");
    productIdentity = this.addFieldSorter("PRODUCT_INFO_IDENTITY");
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<WaybillPositionSortOrder>());
    packId = this.addFieldSorter("PACK_ID");
    quantity = this.addFieldSorter("QUANTITY");
    price = this.addFieldSorter("PRICE");
    party = this.addFieldSorter("PARTY");
    identity = this.addFieldSorter("IDENTITY");
    informF1RegId = this.addFieldSorter("INFORM_F1_REG_ID");
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:waybill.WaybillPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций ТТН.
 * @property {FieldFilter<string, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} uuid UUID позиции накладной
 * @property {FieldFilter<string, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} waybillUuid UUID накладной
 * @property {FieldFilter<?string, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} productIdentity Идентификатор внутри файла
 * @property {module:productInfo.ProductInfoFilter<module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} productInfo Информация о продукции
 * @property {FieldFilter<?string, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} packId Идентификатор упаковки
 * @property {FieldFilter<number, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} quantity Количество
 * @property {FieldFilter<number, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} price Цена за единицу товара
 * @property {FieldFilter<?string, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} party Номер партии
 * @property {FieldFilter<?string, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} identity Идентификатор позиции внутри накладной
 * @property {FieldFilter<?string, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} informF1RegId Справка 1. Не может быть null
 * @property {FieldFilter<?string, module:waybill.WaybillPositionQuery, module:waybill.WaybillPositionSortOrder, module:waybill.WaybillPosition>} informF2RegId Регистрационный номер раздела справки 2, по которому продукция была получена отправителем
 */
export class WaybillPositionQuery extends FilterBuilder<WaybillPositionQuery, WaybillPositionSortOrder, WaybillPosition> {

    uuid = this.addFieldFilter<string>("UUID");
    waybillUuid = this.addFieldFilter<string>("WAY_BILL_UUID");
    productIdentity = this.addFieldFilter<(string | null)>("PRODUCT_INFO_IDENTITY");
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<WaybillPositionQuery, WaybillPositionSortOrder, WaybillPosition>());
    packId = this.addFieldFilter<(string | null)>("PACK_ID");
    quantity = this.addFieldFilter<number>("QUANTITY", quantityConverter);
    price = this.addFieldFilter<number>("PRICE", priceConverter);
    party = this.addFieldFilter<(string | null)>("PARTY");
    identity = this.addFieldFilter<(string | null)>("IDENTITY");
    informF1RegId = this.addFieldFilter<(string | null)>("INFORM_F1_REG_ID");
    informF2RegId = this.addFieldFilter<(string | null)>("INFORM_F2_REG_ID");

    constructor() {
        super(() => this, executor('WayBillPosition', WaybillPosition.prototype));
    }

}

/**
 * @class module:waybill.WaybillPositionMarkSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybill.WaybillPositionMarkSortOrder>} waybillPositionUuid Уникальный идентификатор позиции в ТТН
 * @property {FieldSorter<module:waybill.WaybillPositionMarkSortOrder>} boxNumber Номер короба
 * @property {FieldSorter<module:waybill.WaybillPositionMarkSortOrder>} mark Марка
 */
export class WaybillPositionMarkSortOrder extends SortOrder<WaybillPositionMarkSortOrder> {

    waybillPositionUuid = this.addFieldSorter("WAY_BILL_POSITION_UUID");
    boxNumber  = this.addFieldSorter("BOX_NUMBER");
    mark = this.addFieldSorter("MARK");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:waybill.WaybillPositionMarkQuery
 * @classdesc Класс для формирования запроса на получение марок позиций ТТН.
 * @property {FieldFilter<?string, module:waybill.WaybillPositionMarkQuery, module:waybill.WaybillPositionMarkSortOrder, module:waybill.WaybillPositionMark>} waybillPositionUuid Уникальный идентификатор позиции в ТТН
 * @property {FieldFilter<?string, module:waybill.WaybillPositionMarkQuery, module:waybill.WaybillPositionMarkSortOrder, module:waybill.WaybillPositionMark>} boxNumber Номер короба
 * @property {FieldFilter<string, module:waybill.WaybillPositionMarkQuery, module:waybill.WaybillPositionMarkSortOrder, module:waybill.WaybillPositionMark>} mark Марка
 */
export class WaybillPositionMarkQuery extends FilterBuilder<WaybillPositionMarkQuery, WaybillPositionMarkSortOrder, WaybillPositionMark> {

    waybillPositionUuid = this.addFieldFilter<(string | null)>("WAY_BILL_POSITION_UUID");
    boxNumber  = this.addFieldFilter<(string | null)>("BOX_NUMBER");
    mark = this.addFieldFilter<string>("MARK");

    constructor() {
        super(() => this, executor('WayBillPositionMark', WaybillPositionMark.prototype));
    }

}