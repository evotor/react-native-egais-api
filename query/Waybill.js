"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_query_builder_1 = require("abstract-query-builder");
var Waybill_1 = require("../model/document/Waybill");
var ProductInfo_1 = require("./inner/ProductInfo");
var converters_1 = require("./converters");
var executor_1 = require("./executor");
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
var WaybillSortOrder = /** @class */ (function (_super) {
    __extends(WaybillSortOrder, _super);
    function WaybillSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.docOwner = _this.addFieldSorter("OWNER");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.type = _this.addFieldSorter("TYPE");
        _this.unitType = _this.addFieldSorter("UNIT_TYPE");
        _this.number = _this.addFieldSorter("NUMBER");
        _this.date = _this.addFieldSorter("DATE");
        _this.shippingDate = _this.addFieldSorter("SHIPPING_DATE");
        _this.shipperId = _this.addFieldSorter("SHIPPER_ID");
        _this.consigneeId = _this.addFieldSorter("CONSIGNEE_ID");
        _this.supplierId = _this.addFieldSorter("SUPPLIER_ID");
        _this.base = _this.addFieldSorter("BASE");
        _this.note = _this.addFieldSorter("NOTE");
        _this.status = _this.addFieldSorter("STATUS");
        _this.resolution = _this.addFieldSorter("RESOLUTION");
        _this.ttnInformF2RegUuid = _this.addFieldSorter("TTN_INFORM_F2_REG_UUID");
        _this.wbRegId = _this.addFieldSorter("WB_REG_ID");
        _this.direction = _this.addFieldSorter("DIRECTION");
        _this.version = _this.addFieldSorter("VERSION");
        return _this;
    }
    return WaybillSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillSortOrder = WaybillSortOrder;
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
var WaybillQuery = /** @class */ (function (_super) {
    __extends(WaybillQuery, _super);
    function WaybillQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('WayBill', Waybill_1.default.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.docOwner = _this.addFieldFilter("OWNER");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.type = _this.addFieldFilter("TYPE");
        _this.unitType = _this.addFieldFilter("UNIT_TYPE");
        _this.number = _this.addFieldFilter("NUMBER");
        _this.date = _this.addFieldFilter("DATE");
        _this.shippingDate = _this.addFieldFilter("SHIPPING_DATE");
        _this.shipperId = _this.addFieldFilter("SHIPPER_ID");
        _this.consigneeId = _this.addFieldFilter("CONSIGNEE_ID");
        _this.supplierId = _this.addFieldFilter("SUPPLIER_ID");
        _this.base = _this.addFieldFilter("BASE");
        _this.note = _this.addFieldFilter("NOTE");
        _this.status = _this.addFieldFilter("STATUS");
        _this.resolution = _this.addFieldFilter("RESOLUTION");
        _this.ttnInformF2RegUuid = _this.addFieldFilter("TTN_INFORM_F2_REG_UUID");
        _this.wbRegId = _this.addFieldFilter("WB_REG_ID");
        _this.direction = _this.addFieldFilter("DIRECTION");
        _this.version = _this.addFieldFilter("VERSION");
        return _this;
    }
    return WaybillQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = WaybillQuery;
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
var WaybillPositionSortOrder = /** @class */ (function (_super) {
    __extends(WaybillPositionSortOrder, _super);
    function WaybillPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.waybillUuid = _this.addFieldSorter("WAY_BILL_UUID");
        _this.productIdentity = _this.addFieldSorter("PRODUCT_INFO_IDENTITY");
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        _this.packId = _this.addFieldSorter("PACK_ID");
        _this.quantity = _this.addFieldSorter("QUANTITY");
        _this.price = _this.addFieldSorter("PRICE");
        _this.party = _this.addFieldSorter("PARTY");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.informF1RegId = _this.addFieldSorter("INFORM_F1_REG_ID");
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        return _this;
    }
    return WaybillPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillPositionSortOrder = WaybillPositionSortOrder;
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
var WaybillPositionQuery = /** @class */ (function (_super) {
    __extends(WaybillPositionQuery, _super);
    function WaybillPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('WayBillPosition', Waybill_1.WaybillPosition.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.waybillUuid = _this.addFieldFilter("WAY_BILL_UUID");
        _this.productIdentity = _this.addFieldFilter("PRODUCT_INFO_IDENTITY");
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        _this.packId = _this.addFieldFilter("PACK_ID");
        _this.quantity = _this.addFieldFilter("QUANTITY", converters_1.quantityConverter);
        _this.price = _this.addFieldFilter("PRICE", converters_1.priceConverter);
        _this.party = _this.addFieldFilter("PARTY");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.informF1RegId = _this.addFieldFilter("INFORM_F1_REG_ID");
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        return _this;
    }
    return WaybillPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.WaybillPositionQuery = WaybillPositionQuery;
/**
 * @class module:waybill.WaybillPositionMarkSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:waybill.WaybillPositionMarkSortOrder>} waybillPositionUuid Уникальный идентификатор позиции в ТТН
 * @property {FieldSorter<module:waybill.WaybillPositionMarkSortOrder>} boxNumber Номер короба
 * @property {FieldSorter<module:waybill.WaybillPositionMarkSortOrder>} mark Марка
 */
var WaybillPositionMarkSortOrder = /** @class */ (function (_super) {
    __extends(WaybillPositionMarkSortOrder, _super);
    function WaybillPositionMarkSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.waybillPositionUuid = _this.addFieldSorter("WAY_BILL_POSITION_UUID");
        _this.boxNumber = _this.addFieldSorter("BOX_NUMBER");
        _this.mark = _this.addFieldSorter("MARK");
        return _this;
    }
    return WaybillPositionMarkSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillPositionMarkSortOrder = WaybillPositionMarkSortOrder;
/**
 * @class module:waybill.WaybillPositionMarkQuery
 * @classdesc Класс для формирования запроса на получение марок позиций ТТН.
 * @property {FieldFilter<?string, module:waybill.WaybillPositionMarkQuery, module:waybill.WaybillPositionMarkSortOrder, module:waybill.WaybillPositionMark>} waybillPositionUuid Уникальный идентификатор позиции в ТТН
 * @property {FieldFilter<?string, module:waybill.WaybillPositionMarkQuery, module:waybill.WaybillPositionMarkSortOrder, module:waybill.WaybillPositionMark>} boxNumber Номер короба
 * @property {FieldFilter<string, module:waybill.WaybillPositionMarkQuery, module:waybill.WaybillPositionMarkSortOrder, module:waybill.WaybillPositionMark>} mark Марка
 */
var WaybillPositionMarkQuery = /** @class */ (function (_super) {
    __extends(WaybillPositionMarkQuery, _super);
    function WaybillPositionMarkQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('WayBillPositionMark', Waybill_1.WaybillPositionMark.prototype)) || this;
        _this.waybillPositionUuid = _this.addFieldFilter("WAY_BILL_POSITION_UUID");
        _this.boxNumber = _this.addFieldFilter("BOX_NUMBER");
        _this.mark = _this.addFieldFilter("MARK");
        return _this;
    }
    return WaybillPositionMarkQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.WaybillPositionMarkQuery = WaybillPositionMarkQuery;
