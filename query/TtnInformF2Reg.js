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
var TtnInformF2Reg_1 = require("../model/document/TtnInformF2Reg");
var ProductInfo_1 = require("./inner/ProductInfo");
var defaultExecutor_1 = require("./defaultExecutor");
/**
 * Класс для сортировки элементов в результе запроса
 */
var TtnInformF2RegSortOrder = /** @class */ (function (_super) {
    __extends(TtnInformF2RegSortOrder, _super);
    function TtnInformF2RegSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор справки 2 информации о предыдущих отгрузках
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Кто подает документы
         */
        _this.owner = _this.addFieldSorter("OWNER");
        /**
         * Идентификатор документа (клиентский)
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * ИД накладной в системе (присвоенный)
         */
        _this.wbRegId = _this.addFieldSorter("WB_REG_ID");
        /**
         * Номер фиксации накладной(отгрузки) в ЕГАИС
         */
        _this.egaisFixNumber = _this.addFieldSorter("EGAIS_FIX_NUMBER");
        /**
         * Дата составления накладной(отгрузки) в ЕГАИС
         */
        _this.egaisFixDate = _this.addFieldSorter("EGAIS_FIX_DATE");
        /**
         * Номер накладной
         */
        _this.wbNumber = _this.addFieldSorter("WB_NUMBER");
        /**
         * Дата составления накладной
         */
        _this.wbDate = _this.addFieldSorter("WB_DATE");
        /**
         * Грузоотправитель
         */
        _this.shipperId = _this.addFieldSorter("SHIPPER_ID");
        /**
         * Грузополучатель
         */
        _this.consigneeId = _this.addFieldSorter("CONSIGNEE_ID");
        /**
         * Поставщик
         */
        _this.supplierId = _this.addFieldSorter("SUPPLIER_ID");
        /**
         * Уникальный идентификатор ТТН
         */
        _this.waybillId = _this.addFieldSorter("WAY_BILL_ID");
        /**
         * Текущий статус справки 2
         */
        _this.status = _this.addFieldSorter("STATUS");
        return _this;
    }
    return TtnInformF2RegSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TtnInformF2RegSortOrder = TtnInformF2RegSortOrder;
/**
 * Класс для формирования запроса на получение актов списания из магазина
 */
var TtnInformF2RegQuery = /** @class */ (function (_super) {
    __extends(TtnInformF2RegQuery, _super);
    function TtnInformF2RegQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('TtnInformF2Reg', TtnInformF2Reg_1.default.prototype)) || this;
        /**
         * Уникальный идентификатор справки 2 информации о предыдущих отгрузках
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Кто подает документы
         */
        _this.owner = _this.addFieldFilter("OWNER");
        /**
         * Идентификатор документа (клиентский)
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * ИД накладной в системе (присвоенный)
         */
        _this.wbRegId = _this.addFieldFilter("WB_REG_ID");
        /**
         * Номер фиксации накладной(отгрузки) в ЕГАИС
         */
        _this.egaisFixNumber = _this.addFieldFilter("EGAIS_FIX_NUMBER");
        /**
         * Дата составления накладной(отгрузки) в ЕГАИС
         */
        _this.egaisFixDate = _this.addFieldFilter("EGAIS_FIX_DATE");
        /**
         * Номер накладной
         */
        _this.wbNumber = _this.addFieldFilter("WB_NUMBER");
        /**
         * Дата составления накладной
         */
        _this.wbDate = _this.addFieldFilter("WB_DATE");
        /**
         * Грузоотправитель
         */
        _this.shipperId = _this.addFieldFilter("SHIPPER_ID");
        /**
         * Грузополучатель
         */
        _this.consigneeId = _this.addFieldFilter("CONSIGNEE_ID");
        /**
         * Поставщик
         */
        _this.supplierId = _this.addFieldFilter("SUPPLIER_ID");
        /**
         * Уникальный идентификатор ТТН
         */
        _this.waybillId = _this.addFieldFilter("WAY_BILL_ID");
        /**
         * Текущий статус справки 2
         */
        _this.status = _this.addFieldFilter("STATUS");
        return _this;
    }
    return TtnInformF2RegQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = TtnInformF2RegQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var TtnInformF2RegPositionSortOrder = /** @class */ (function (_super) {
    __extends(TtnInformF2RegPositionSortOrder, _super);
    function TtnInformF2RegPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор документа передачи
         */
        _this.transferFromShopUuid = _this.addFieldSorter("TRANSFER_FROM_SHOP_ID");
        /**
         * Идентификатор позиции внутри акта
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Регистрационный код продукции
         */
        _this.productCode = _this.addFieldSorter("PRODUCT_CODE");
        /**
         * Количество
         */
        _this.quantity = _this.addFieldSorter("QUANTITY");
        /**
         * Регистрационный номер раздела справки 2
         */
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        return _this;
    }
    return TtnInformF2RegPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TtnInformF2RegPositionSortOrder = TtnInformF2RegPositionSortOrder;
/**
 * Класс для формирования запроса на получение позиций акта списания из магазина
 */
var TtnInformF2RegPositionQuery = /** @class */ (function (_super) {
    __extends(TtnInformF2RegPositionQuery, _super);
    function TtnInformF2RegPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('TtnInformF2RegPosition', TtnInformF2Reg_1.TtnInformF2RegPosition.prototype)) || this;
        /**
         * Уникальный идентификатор позиции
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Уникальный идентификатор справки 2
         */
        _this.ttnInformF2RegUuid = _this.addFieldFilter("TTN_INFORM_F2_REG_ID");
        /**
         * Идентификатор позиции внутри накладной
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Регистрационный номер записи справки 2
         */
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        return _this;
    }
    return TtnInformF2RegPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.TtnInformF2RegPositionQuery = TtnInformF2RegPositionQuery;
