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
var ActWriteOff_1 = require("../model/document/ActWriteOff");
var ProductInfo_1 = require("./inner/ProductInfo");
var defaultExecutor_1 = require("./defaultExecutor");
/**
 * Класс для сортировки элементов в результе запроса
 */
var ActWriteOffShopSortOrder = /** @class */ (function (_super) {
    __extends(ActWriteOffShopSortOrder, _super);
    function ActWriteOffShopSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор акта списания из магазина
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Отправитель акта списания из магазина
         */
        _this.docOwner = _this.addFieldSorter("OWNER");
        /**
         * Идентификатор акта списания из магазина (клиентский, к заполнению необязательный)
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Номер документа
         */
        _this.number = _this.addFieldSorter("NUMBER");
        /**
         * Дата составления
         */
        _this.actDate = _this.addFieldSorter("ACT_DATE");
        /**
         * Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
         */
        _this.type = _this.addFieldSorter("TYPE_WRITE_OFF");
        /**
         * Примечание
         */
        _this.note = _this.addFieldSorter("NOTE");
        /**
         * Статус акта списания
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
    return ActWriteOffShopSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActWriteOffShopSortOrder = ActWriteOffShopSortOrder;
/**
 * Класс для формирования запроса на получение актов списания из магазина
 */
var ActWriteOffShopQuery = /** @class */ (function (_super) {
    __extends(ActWriteOffShopQuery, _super);
    function ActWriteOffShopQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ActWriteOffShop', ActWriteOff_1.ActWriteOffShop.prototype)) || this;
        /**
         * Уникальный идентификатор акта списания из магазина
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Отправитель акта списания из магазина
         */
        _this.docOwner = _this.addFieldFilter("OWNER");
        /**
         * Идентификатор акта списания из магазина (клиентский, к заполнению необязательный)
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Номер документа
         */
        _this.number = _this.addFieldFilter("NUMBER");
        /**
         * Дата составления
         */
        _this.actDate = _this.addFieldFilter("ACT_DATE");
        /**
         * Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
         */
        _this.type = _this.addFieldFilter("TYPE_WRITE_OFF");
        /**
         * Примечание
         */
        _this.note = _this.addFieldFilter("NOTE");
        /**
         * Статус акта списания
         */
        _this.status = _this.addFieldFilter("STATUS");
        /**
         * Комментарий для отказа на акт списания из магазина
         */
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        /**
         * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
         */
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return ActWriteOffShopQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = ActWriteOffShopQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var ActWriteOffShopPositionSortOrder = /** @class */ (function (_super) {
    __extends(ActWriteOffShopPositionSortOrder, _super);
    function ActWriteOffShopPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор позиции акта списания со склада
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Уникальный идентификатор акта списания со склада
         */
        _this.actWriteOffShopUuid = _this.addFieldSorter("ACT_WRITE_OFF_SHOP_UUID");
        /**
         * Идентификатор позиции акта списания со склада
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Количество
         */
        _this.quantity = _this.addFieldSorter("QUANTITY");
        /**
         * Информация о марках в формате JSON
         */
        _this.informF2MarkInfoJson = _this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_1.ProductInfoInnerSortOrder());
        return _this;
    }
    return ActWriteOffShopPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActWriteOffShopPositionSortOrder = ActWriteOffShopPositionSortOrder;
/**
 * Класс для формирования запроса на получение позиций акта списания из магазина
 */
var ActWriteOffShopPositionQuery = /** @class */ (function (_super) {
    __extends(ActWriteOffShopPositionQuery, _super);
    function ActWriteOffShopPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ActWriteOffShopPosition', ActWriteOff_1.ActWriteOffShopPosition.prototype)) || this;
        /**
         * Уникальный идентификатор позиции акта списания из магазина
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Уникальный идентификатор акта списания из магазина
         */
        _this.actWriteOffShopUuid = _this.addFieldFilter("ACT_WRITE_OFF_SHOP_UUID");
        /**
         * Идентификатор позиции акта списания из магазина (клиентский, к заполнению необязательный)
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Количество
         */
        _this.quantity = _this.addFieldFilter("QUANTITY", function (v) { return v * 1000; });
        /**
         * Информация о марках в формате JSON
         */
        _this.informF2MarkInfoJson = _this.addFieldFilter("INFORM_F2_MARK_INFO_JSON");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_1.ProductInfoFilter());
        return _this;
    }
    return ActWriteOffShopPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ActWriteOffShopPositionQuery = ActWriteOffShopPositionQuery;
