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
var TransferFromShop_1 = require("../model/document/TransferFromShop");
var ProductInfo_1 = require("./inner/ProductInfo");
var defaultExecutor_1 = require("./defaultExecutor");
/**
 * Класс для сортировки элементов в результе запроса
 */
var TransferFromShopSortOrder = /** @class */ (function (_super) {
    __extends(TransferFromShopSortOrder, _super);
    function TransferFromShopSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор
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
         * Номер документа
         */
        _this.transferNumber = _this.addFieldSorter("NUMBER");
        /**
         * Дата составления
         */
        _this.transferDate = _this.addFieldSorter("ACT_DATE");
        /**
         * Примечание
         */
        _this.note = _this.addFieldSorter("NOTE");
        /**
         * Статус обработки документа
         */
        _this.status = _this.addFieldSorter("STATUS");
        /**
         * Комментарий для отказа на акт списания из магазина
         */
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        /**
         * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
         */
        _this.replyId = _this.addFieldSorter("REPLY_ID");
        return _this;
    }
    return TransferFromShopSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TransferFromShopSortOrder = TransferFromShopSortOrder;
/**
 * Класс для формирования запроса на получение актов списания из магазина
 */
var TransferFromShopQuery = /** @class */ (function (_super) {
    __extends(TransferFromShopQuery, _super);
    function TransferFromShopQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('TransferFromShop', TransferFromShop_1.default.prototype)) || this;
        /**
         * Уникальный идентификатор
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
         * Номер документа
         */
        _this.transferNumber = _this.addFieldFilter("NUMBER");
        /**
         * Дата составления
         */
        _this.transferDate = _this.addFieldFilter("TRANSFER_DATE");
        /**
         * Примечание
         */
        _this.note = _this.addFieldFilter("NOTE");
        /**
         * Статус обработки документа
         */
        _this.status = _this.addFieldFilter("STATUS");
        /**
         * Комментарий для отказа
         */
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        /**
         * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
         */
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return TransferFromShopQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = TransferFromShopQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var TransferFromShopPositionSortOrder = /** @class */ (function (_super) {
    __extends(TransferFromShopPositionSortOrder, _super);
    function TransferFromShopPositionSortOrder() {
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
    return TransferFromShopPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TransferFromShopPositionSortOrder = TransferFromShopPositionSortOrder;
/**
 * Класс для формирования запроса на получение позиций акта списания из магазина
 */
var TransferFromShopPositionQuery = /** @class */ (function (_super) {
    __extends(TransferFromShopPositionQuery, _super);
    function TransferFromShopPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('TransferFromShopPosition', TransferFromShop_1.TransferFromShopPosition.prototype)) || this;
        /**
         * Уникальный идентификатор документа передачи
         */
        _this.transferFromShopUuid = _this.addFieldFilter("TRANSFER_FROM_SHOP_ID");
        /**
         * Идентификатор позиции внутри акта
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Регистрационный код продукции
         */
        _this.productCode = _this.addFieldFilter("PRODUCT_CODE");
        /**
         * Количество
         */
        _this.quantity = _this.addFieldFilter("QUANTITY", function (v) { return v * 1000; });
        /**
         * Регистрационный номер раздела справки 2
         */
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        return _this;
    }
    return TransferFromShopPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.TransferFromShopPositionQuery = TransferFromShopPositionQuery;
