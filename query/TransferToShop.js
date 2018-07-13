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
var TransferToShop_1 = require("../model/document/TransferToShop");
var ProductInfo_1 = require("./inner/ProductInfo");
var converters_1 = require("./converters");
var executor_1 = require("./executor");
/**
 * @class module:transfer.TransferToShopSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} uuid Уникальный идентификатор
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} owner Кто подает документы
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} identity Идентификатор документа (клиентский)
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} transferNumber Номер документа
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} transferDate Дата составления
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} note Примечание
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} status Статус обработки документа
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} rejectComment Комментарий для отказа
 * @property {FieldSorter<module:transfer.TransferToShopSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var TransferToShopSortOrder = /** @class */ (function (_super) {
    __extends(TransferToShopSortOrder, _super);
    function TransferToShopSortOrder() {
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
    return TransferToShopSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TransferToShopSortOrder = TransferToShopSortOrder;
/**
 * @class module:transfer.TransferToShopQuery
 * @classdesc Класс для формирования запроса на получение документов передачи продукции со склада в торговый зал.
 * @property {FieldFilter<string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} uuid Уникальный идентификатор
 * @property {FieldFilter<string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} owner Кто подает документы
 * @property {FieldFilter<?string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} identity Идентификатор документа (клиентский)
 * @property {FieldFilter<string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} transferNumber Номер документа
 * @property {FieldFilter<?Date, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} transferDate Дата составления
 * @property {FieldFilter<?string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} note Примечание
 * @property {FieldFilter<module:transfer#TransferStatus, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} status Статус обработки документа
 * @property {FieldFilter<?string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} rejectComment Комментарий для отказа
 * @property {FieldFilter<?string, module:transfer.TransferToShopQuery, module:transfer.TransferToShopSortOrder, module:transfer.TransferToShop>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var TransferToShopQuery = /** @class */ (function (_super) {
    __extends(TransferToShopQuery, _super);
    function TransferToShopQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('TransferToShop', TransferToShop_1.default.prototype)) || this;
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
    return TransferToShopQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = TransferToShopQuery;
/**
 * @class module:transfer.TransferToShopPositionSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} transferFromShopUuid Уникальный идентификатор документа передачи
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} identity Идентификатор позиции внутри акта
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} productCode Регистрационный код продукции
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} quantity Количество
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldSorter<module:transfer.TransferToShopPositionSortOrder>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:transfer.TransferToShopPositionSortOrder>} productInfo Информация о продукции
 */
var TransferToShopPositionSortOrder = /** @class */ (function (_super) {
    __extends(TransferToShopPositionSortOrder, _super);
    function TransferToShopPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.transferToShopUuid = _this.addFieldSorter("TRANSFER_TO_SHOP_ID");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.productCode = _this.addFieldSorter("PRODUCT_CODE");
        _this.quantity = _this.addFieldSorter("QUANTITY");
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        _this.informF2MarkInfoJson = _this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        return _this;
    }
    return TransferToShopPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.TransferToShopPositionSortOrder = TransferToShopPositionSortOrder;
/**
 * @class module:transfer.TransferToShopPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций документа передачи продукции со склада в торговый зал.
 * @property {FieldFilter<string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} transferFromShopUuid Уникальный идентификатор документа передачи
 * @property {FieldFilter<?string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} identity Идентификатор позиции внутри акта
 * @property {FieldFilter<string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} productCode Регистрационный код продукции
 * @property {FieldFilter<number, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} quantity Количество
 * @property {FieldFilter<?string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldFilter<?string, module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoFilter<module:transfer.TransferToShopPositionQuery, module:transfer.TransferToShopPositionSortOrder, module:transfer.TransferToShopPosition>} productInfo Информация о продукции
 */
var TransferToShopPositionQuery = /** @class */ (function (_super) {
    __extends(TransferToShopPositionQuery, _super);
    function TransferToShopPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('TransferToShopPosition', TransferToShop_1.TransferToShopPosition.prototype)) || this;
        _this.transferToShopUuid = _this.addFieldFilter("TRANSFER_TO_SHOP_ID");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.productCode = _this.addFieldFilter("PRODUCT_CODE");
        _this.quantity = _this.addFieldFilter("QUANTITY", converters_1.quantityConverter);
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        _this.informF2MarkInfoJson = _this.addFieldFilter("INFORM_F2_MARK_INFO_JSON");
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        return _this;
    }
    return TransferToShopPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.TransferToShopPositionQuery = TransferToShopPositionQuery;
