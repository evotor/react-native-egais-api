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
var defaultExecutor_1 = require("./defaultExecutor");
var Waybill_1 = require("../model/document/Waybill");
var ProductInfo_1 = require("./inner/ProductInfo");
/**
 * Класс для сортировки элементов в результе запроса
 */
var WaybillSortOrder = /** @class */ (function (_super) {
    __extends(WaybillSortOrder, _super);
    function WaybillSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * UUID накладной.
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Отправитель накладной.
         */
        _this.docOwner = _this.addFieldSorter("OWNER");
        /**
         * Идентификатор накладной (клиентский, к заполнению необязательный).
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Тип накладной.
         */
        _this.type = _this.addFieldSorter("TYPE");
        /**
         * тип упаковки.
         */
        _this.unitType = _this.addFieldSorter("UNIT_TYPE");
        /**
         * Номер документа.
         */
        _this.number = _this.addFieldSorter("NUMBER");
        /**
         * Дата составления.
         */
        _this.date = _this.addFieldSorter("DATE");
        /**
         * Дата отгрузки продукции.
         */
        _this.shippingDate = _this.addFieldSorter("SHIPPING_DATE");
        /**
         * Грузоотправитель.
         */
        _this.shipperId = _this.addFieldSorter("SHIPPER_ID");
        /**
         * Грузополучатель.
         */
        _this.consigneeId = _this.addFieldSorter("CONSIGNEE_ID");
        /**
         * Поставщик.
         */
        _this.supplierId = _this.addFieldSorter("SUPPLIER_ID");
        /**
         * Основание.
         */
        _this.base = _this.addFieldSorter("BASE");
        /**
         * Заметки.
         */
        _this.note = _this.addFieldSorter("NOTE");
        /**
         * Текущий статус накладной.
         */
        _this.status = _this.addFieldSorter("STATUS");
        /**
         * Резолюция накладной.
         */
        _this.resolution = _this.addFieldSorter("RESOLUTION");
        /**
         * uuid справки 2 для накладной.
         */
        _this.ttnInformF2RegUuid = _this.addFieldSorter("TTN_INFORM_F2_REG_UUID");
        /**
         * ИД накладной в системе ЕГАИС.
         */
        _this.wbRegId = _this.addFieldSorter("WB_REG_ID");
        /**
         * Направление документа в представлении УТМ (входящий/исходящий).
         */
        _this.direction = _this.addFieldSorter("DIRECTION");
        /**
         * Версия протокола ЕГАИС, по которому отправлена накладная.
         */
        _this.version = _this.addFieldSorter("VERSION");
        return _this;
    }
    return WaybillSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillSortOrder = WaybillSortOrder;
/**
 * Класс для формирования запроса на получение ТТН
 */
var WaybillQuery = /** @class */ (function (_super) {
    __extends(WaybillQuery, _super);
    function WaybillQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('WayBill', Waybill_1.default.prototype)) || this;
        /**
         * UUID накладной.
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Отправитель накладной.
         */
        _this.docOwner = _this.addFieldFilter("OWNER");
        /**
         * Идентификатор накладной (клиентский, к заполнению необязательный).
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Тип накладной.
         */
        _this.type = _this.addFieldFilter("TYPE");
        /**
         * тип упаковки.
         */
        _this.unitType = _this.addFieldFilter("UNIT_TYPE");
        /**
         * Номер документа.
         */
        _this.number = _this.addFieldFilter("NUMBER");
        /**
         * Дата составления.
         */
        _this.date = _this.addFieldFilter("DATE");
        /**
         * Дата отгрузки продукции.
         */
        _this.shippingDate = _this.addFieldFilter("SHIPPING_DATE");
        /**
         * Грузоотправитель.
         */
        _this.shipperId = _this.addFieldFilter("SHIPPER_ID");
        /**
         * Грузополучатель.
         */
        _this.consigneeId = _this.addFieldFilter("CONSIGNEE_ID");
        /**
         * Поставщик.
         */
        _this.supplierId = _this.addFieldFilter("SUPPLIER_ID");
        /**
         * Основание.
         */
        _this.base = _this.addFieldFilter("BASE");
        /**
         * Заметки.
         */
        _this.note = _this.addFieldFilter("NOTE");
        /**
         * Текущий статус накладной.
         */
        _this.status = _this.addFieldFilter("STATUS");
        /**
         * Резолюция накладной.
         */
        _this.resolution = _this.addFieldFilter("RESOLUTION");
        /**
         * uuid справки 2 для накладной.
         */
        _this.ttnInformF2RegUuid = _this.addFieldFilter("TTN_INFORM_F2_REG_UUID");
        /**
         * ИД накладной в системе ЕГАИС.
         */
        _this.wbRegId = _this.addFieldFilter("WB_REG_ID");
        /**
         * Направление документа в представлении УТМ (входящий/исходящий).
         */
        _this.direction = _this.addFieldFilter("DIRECTION");
        /**
         * Версия протокола ЕГАИС, по которому отправлена накладная.
         */
        _this.version = _this.addFieldFilter("VERSION");
        return _this;
    }
    return WaybillQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = WaybillQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var WaybillPositionSortOrder = /** @class */ (function (_super) {
    __extends(WaybillPositionSortOrder, _super);
    function WaybillPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * UUID позиции накладной.
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * UUID накладной.
         */
        _this.waybillUuid = _this.addFieldSorter("WAY_BILL_UUID");
        /**
         * Идентификатор внутри файла.
         */
        _this.productIdentity = _this.addFieldSorter("PRODUCT_INFO_IDENTITY");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        /**
         * Идентификатор упаковки.
         */
        _this.packId = _this.addFieldSorter("PACK_ID");
        /**
         * Количество.
         */
        _this.quantity = _this.addFieldSorter("QUANTITY");
        /**
         * Цена за единицу товара.
         */
        _this.price = _this.addFieldSorter("PRICE");
        /**
         * Номер партии.
         */
        _this.party = _this.addFieldSorter("PARTY");
        /**
         * Идентификатор позиции внутри накладной.
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Справка 1. Не может быть null
         */
        _this.informF1RegId = _this.addFieldSorter("INFORM_F1_REG_ID");
        /**
         * Регистрационный номер раздела справки 2, по которому продукция была получена отправителем.
         */
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        return _this;
    }
    return WaybillPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillPositionSortOrder = WaybillPositionSortOrder;
/**
 * Класс для формирования запроса на получение позиций ТТН
 */
var WaybillPositionQuery = /** @class */ (function (_super) {
    __extends(WaybillPositionQuery, _super);
    function WaybillPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('WayBillPosition', Waybill_1.WaybillPosition.prototype)) || this;
        /**
         * UUID позиции накладной.
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * UUID накладной.
         */
        _this.waybillUuid = _this.addFieldFilter("WAY_BILL_UUID");
        /**
         * Идентификатор внутри файла.
         */
        _this.productIdentity = _this.addFieldFilter("PRODUCT_INFO_IDENTITY");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        /**
         * Идентификатор упаковки.
         */
        _this.packId = _this.addFieldFilter("PACK_ID");
        /**
         * Количество.
         */
        _this.quantity = _this.addFieldFilter("QUANTITY", function (v) { return v * 1000; });
        /**
         * Цена за единицу товара.
         */
        _this.price = _this.addFieldFilter("PRICE", function (v) { return v * 100; });
        /**
         * Номер партии.
         */
        _this.party = _this.addFieldFilter("PARTY");
        /**
         * Идентификатор позиции внутри накладной.
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Справка 1. Не может быть null
         */
        _this.informF1RegId = _this.addFieldFilter("INFORM_F1_REG_ID");
        /**
         * Регистрационный номер раздела справки 2, по которому продукция была получена отправителем.
         */
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        return _this;
    }
    return WaybillPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.WaybillPositionQuery = WaybillPositionQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var WaybillPositionMarkSortOrder = /** @class */ (function (_super) {
    __extends(WaybillPositionMarkSortOrder, _super);
    function WaybillPositionMarkSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор позиции в ТТН
         */
        _this.waybillPositionUuid = _this.addFieldSorter("WAY_BILL_POSITION_UUID");
        /**
         * Номер короба
         */
        _this.boxNumber = _this.addFieldSorter("BOX_NUMBER");
        /**
         * Марка
         */
        _this.mark = _this.addFieldSorter("MARK");
        return _this;
    }
    return WaybillPositionMarkSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.WaybillPositionMarkSortOrder = WaybillPositionMarkSortOrder;
/**
 * Класс для формирования запроса на получение марок позиций ТТН
 */
var WaybillPositionMarkQuery = /** @class */ (function (_super) {
    __extends(WaybillPositionMarkQuery, _super);
    function WaybillPositionMarkQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('WayBillPositionMark', Waybill_1.WaybillPositionMark.prototype)) || this;
        /**
         * Уникальный идентификатор позиции в ТТН
         */
        _this.waybillPositionUuid = _this.addFieldFilter("WAY_BILL_POSITION_UUID");
        /**
         * Номер короба
         */
        _this.boxNumber = _this.addFieldFilter("BOX_NUMBER");
        /**
         * Марка
         */
        _this.mark = _this.addFieldFilter("MARK");
        return _this;
    }
    return WaybillPositionMarkQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.WaybillPositionMarkQuery = WaybillPositionMarkQuery;
