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
var converters_1 = require("./converters");
var executor_1 = require("./executor");
/**
 * @class module:transfer.TransferFromShopSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} uuid Уникальный идентификатор
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} owner Кто подает документы
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} identity Идентификатор документа (клиентский)
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} transferNumber Номер документа
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} transferDate Дата составления
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} note Примечание
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} status Статус обработки документа
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} rejectComment Комментарий для отказа
 * @property {FieldSorter<module:transfer.TransferFromShopSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var TransferFromShopSortOrder = /** @class */ (function (_super) {
    __extends(TransferFromShopSortOrder, _super);
    function TransferFromShopSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.owner = _this.addFieldSorter("OWNER");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.transferNumber = _this.addFieldSorter("NUMBER");
        _this.transferDate = _this.addFieldSorter("ACT_DATE");
        _this.note = _this.addFieldSorter("NOTE");
        _this.status = _this.addFieldSorter("STATUS");
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        _this.replyId = _this.addFieldSorter("REPLY_ID");
        return _this;
    }
    return TransferFromShopSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TransferFromShopSortOrder = TransferFromShopSortOrder;
/**
 * @class module:transfer.TransferFromShopQuery
 * @classdesc Класс для формирования запроса на получение документов передачи продукции из торгового зала на склад.
 * @property {FieldFilter<string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} uuid Уникальный идентификатор
 * @property {FieldFilter<string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} owner Кто подает документы
 * @property {FieldFilter<?string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} identity Идентификатор документа (клиентский)
 * @property {FieldFilter<string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} transferNumber Номер документа
 * @property {FieldFilter<?Date, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} transferDate Дата составления
 * @property {FieldFilter<?string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} note Примечание
 * @property {FieldFilter<module:transfer#TransferStatus, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} status Статус обработки документа
 * @property {FieldFilter<?string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} rejectComment Комментарий для отказа
 * @property {FieldFilter<?string, module:transfer.TransferFromShopQuery, module:transfer.TransferFromShopSortOrder, module:transfer.TransferFromShop>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var TransferFromShopQuery = /** @class */ (function (_super) {
    __extends(TransferFromShopQuery, _super);
    function TransferFromShopQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('TransferFromShop', TransferFromShop_1.default.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.owner = _this.addFieldFilter("OWNER");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.transferNumber = _this.addFieldFilter("NUMBER");
        _this.transferDate = _this.addFieldFilter("TRANSFER_DATE");
        _this.note = _this.addFieldFilter("NOTE");
        _this.status = _this.addFieldFilter("STATUS");
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return TransferFromShopQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = TransferFromShopQuery;
/**
 * @class module:transfer.TransferFromShopPositionSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} transferFromShopUuid Уникальный идентификатор документа передачи
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} identity Идентификатор позиции внутри акта
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} productCode Регистрационный код продукции
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} quantity Количество
 * @property {FieldSorter<module:transfer.TransferFromShopPositionSortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:transfer.TransferFromShopPositionSortOrder>} productInfo Информация о продукции
 */
var TransferFromShopPositionSortOrder = /** @class */ (function (_super) {
    __extends(TransferFromShopPositionSortOrder, _super);
    function TransferFromShopPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.transferFromShopUuid = _this.addFieldSorter("TRANSFER_FROM_SHOP_ID");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.productCode = _this.addFieldSorter("PRODUCT_CODE");
        _this.quantity = _this.addFieldSorter("QUANTITY");
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        return _this;
    }
    return TransferFromShopPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TransferFromShopPositionSortOrder = TransferFromShopPositionSortOrder;
/**
 * @class module:transfer.TransferFromShopPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций документа передачи продукции из торгового зала на склад.
 * @property {FieldFilter<string, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} transferFromShopUuid Уникальный идентификатор документа передачи
 * @property {FieldFilter<?string, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} identity Идентификатор позиции внутри акта
 * @property {FieldFilter<string, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} productCode Регистрационный код продукции
 * @property {FieldFilter<number, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} quantity Количество
 * @property {FieldFilter<?string, module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} informF2RegId Регистрационный номер раздела справки 2
 * @property {module:productInfo.ProductInfoFilter<module:transfer.TransferFromShopPositionQuery, module:transfer.TransferFromShopPositionSortOrder, module:transfer.TransferFromShopPosition>} productInfo Информация о продукции
 */
var TransferFromShopPositionQuery = /** @class */ (function (_super) {
    __extends(TransferFromShopPositionQuery, _super);
    function TransferFromShopPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('TransferFromShopPosition', TransferFromShop_1.TransferFromShopPosition.prototype)) || this;
        _this.transferFromShopUuid = _this.addFieldFilter("TRANSFER_FROM_SHOP_ID");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.productCode = _this.addFieldFilter("PRODUCT_CODE");
        _this.quantity = _this.addFieldFilter("QUANTITY", converters_1.quantityConverter);
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        return _this;
    }
    return TransferFromShopPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.TransferFromShopPositionQuery = TransferFromShopPositionQuery;
