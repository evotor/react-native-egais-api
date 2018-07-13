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
var ActWriteOffShop_1 = require("../model/document/ActWriteOffShop");
var ProductInfo_1 = require("./inner/ProductInfo");
var converters_1 = require("./converters");
var executor_1 = require("./executor");
/**
 * @class module:actWriteOff.ActWriteOffShopSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} uuid Уникальный идентификатор акта списания из магазина
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} docOwner Отправитель акта списания из магазина
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} identity Идентификатор акта списания из магазина (клиентский, к заполнению необязательный)
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} number Номер документа
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} actDate Дата составления
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} type Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} note Примечание
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} status Статус акта списания
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} rejectComment Комментарий для отказа на акт списания из магазина
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var ActWriteOffShopSortOrder = /** @class */ (function (_super) {
    __extends(ActWriteOffShopSortOrder, _super);
    function ActWriteOffShopSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.docOwner = _this.addFieldSorter("OWNER");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.number = _this.addFieldSorter("NUMBER");
        _this.actDate = _this.addFieldSorter("ACT_DATE");
        _this.type = _this.addFieldSorter("TYPE_WRITE_OFF");
        _this.note = _this.addFieldSorter("NOTE");
        _this.status = _this.addFieldSorter("STATUS");
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        _this.replyId = _this.addFieldSorter("REPLY_ID");
        return _this;
    }
    return ActWriteOffShopSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActWriteOffShopSortOrder = ActWriteOffShopSortOrder;
/**
 * @class module:actWriteOff.ActWriteOffShopQuery
 * @classdesc Класс для формирования запроса на получение актов списания из магазина.
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} uuid Уникальный идентификатор акта списания из магазина
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} docOwner Отправитель акта списания из магазина
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} identity Идентификатор акта списания из магазина (клиентский, к заполнению необязательный)
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} number Номер документа
 * @property {FieldFilter<Date, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} actDate Дата составления
 * @property {FieldFilter<module:actWriteOff#ActWriteOffType, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} type Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} note Примечание
 * @property {FieldFilter<module:actWriteOff#ActWriteOffStatus, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} status Статус акта списания
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} rejectComment Комментарий для отказа на акт списания из магазина
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopQuery, module:actWriteOff.ActWriteOffShopSortOrder, module:actWriteOff.ActWriteOffShop>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var ActWriteOffShopQuery = /** @class */ (function (_super) {
    __extends(ActWriteOffShopQuery, _super);
    function ActWriteOffShopQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ActWriteOffShop', ActWriteOffShop_1.default.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.docOwner = _this.addFieldFilter("OWNER");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.number = _this.addFieldFilter("NUMBER");
        _this.actDate = _this.addFieldFilter("ACT_DATE");
        _this.type = _this.addFieldFilter("TYPE_WRITE_OFF");
        _this.note = _this.addFieldFilter("NOTE");
        _this.status = _this.addFieldFilter("STATUS");
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return ActWriteOffShopQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = ActWriteOffShopQuery;
/**
 * @class module:actWriteOff.ActWriteOffShopPositionSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} uuid Уникальный идентификатор позиции акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} actWriteOffShopUuid Уникальный идентификатор акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} identity Идентификатор позиции акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} quantity Количество
 * @property {FieldSorter<module:actWriteOff.ActWriteOffShopPositionSortOrder>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:actWriteOff.ActWriteOffShopPositionSortOrder>} productInfo Информация о продукции
 */
var ActWriteOffShopPositionSortOrder = /** @class */ (function (_super) {
    __extends(ActWriteOffShopPositionSortOrder, _super);
    function ActWriteOffShopPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.actWriteOffShopUuid = _this.addFieldSorter("ACT_WRITE_OFF_SHOP_UUID");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.quantity = _this.addFieldSorter("QUANTITY");
        _this.informF2MarkInfoJson = _this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        return _this;
    }
    return ActWriteOffShopPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActWriteOffShopPositionSortOrder = ActWriteOffShopPositionSortOrder;
/**
 * @class module:actWriteOff.ActWriteOffShopPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций акта списания из магазина.
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} uuid Уникальный идентификатор позиции акта списания со склада
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} actWriteOffShopUuid Уникальный идентификатор акта списания со склада
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} identity Идентификатор позиции акта списания со склада
 * @property {FieldFilter<number, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} quantity Количество
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoFilter<module:actWriteOff.ActWriteOffShopPositionQuery, module:actWriteOff.ActWriteOffShopPositionSortOrder, module:actWriteOff.ActWriteOffShopPosition>} productInfo Информация о продукции
 */
var ActWriteOffShopPositionQuery = /** @class */ (function (_super) {
    __extends(ActWriteOffShopPositionQuery, _super);
    function ActWriteOffShopPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ActWriteOffShopPosition', ActWriteOffShop_1.ActWriteOffShopPosition.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.actWriteOffShopUuid = _this.addFieldFilter("ACT_WRITE_OFF_SHOP_UUID");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.quantity = _this.addFieldFilter("QUANTITY", converters_1.quantityConverter);
        _this.informF2MarkInfoJson = _this.addFieldFilter("INFORM_F2_MARK_INFO_JSON");
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        return _this;
    }
    return ActWriteOffShopPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ActWriteOffShopPositionQuery = ActWriteOffShopPositionQuery;
