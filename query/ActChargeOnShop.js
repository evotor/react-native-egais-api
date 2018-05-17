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
var ActChargeOnShop_1 = require("../model/document/ActChargeOnShop");
var ProductInfo_1 = require("../model/dictionary/ProductInfo");
var ProductInfo_2 = require("./inner/ProductInfo");
var defaultExecutor_1 = require("./defaultExecutor");
/**
 * Класс для сортировки элементов в результе запроса
 */
var ActChargeOnShopSortOrder = /** @class */ (function (_super) {
    __extends(ActChargeOnShopSortOrder, _super);
    function ActChargeOnShopSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор акта списания из магазина
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Кто подает документы
         */
        _this.docOwner = _this.addFieldSorter("OWNER");
        /**
         * ID акта (клиентсикй)
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Номер документа
         */
        _this.number = _this.addFieldSorter("NUMBER");
        /**
         * Дата постановски на баланс
         */
        _this.actDate = _this.addFieldSorter("ACT_DATE");
        /**
         * Причина постановки на баланс (Пересортица/Излишки/Продукция, полученная до 01.01.2016)
         */
        _this.type = _this.addFieldSorter("TYPE_ACT_CHARGE_ON_SHOP");
        /**
         * Регистрационный номер акта списания по типу "Пересортица".
         * Обязательно для заполнения для типа постановки на баланс "Пересортица".
         */
        _this.actWriteOff = _this.addFieldSorter("ACT_WRITE_OFF");
        /**
         * Примечание
         */
        _this.note = _this.addFieldSorter("NOTE");
        /**
         * Статус документа
         */
        _this.status = _this.addFieldSorter("STATUS");
        /**
         * Комментарий при отказе
         */
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        /**
         * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
         */
        _this.replyId = _this.addFieldSorter("REPLY_ID");
        return _this;
    }
    return ActChargeOnShopSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActChargeOnShopSortOrder = ActChargeOnShopSortOrder;
/**
 * Класс для формирования запроса на получение актов поставки
 */
var ActChargeOnShopQuery = /** @class */ (function (_super) {
    __extends(ActChargeOnShopQuery, _super);
    function ActChargeOnShopQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ActChargeOnShop', ActChargeOnShop_1.default.prototype)) || this;
        /**
         * Уникальный идентификатор акта списания из магазина
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Кто подает документы
         */
        _this.docOwner = _this.addFieldFilter("OWNER");
        /**
         * ID акта (клиентсикй)
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Номер документа
         */
        _this.number = _this.addFieldFilter("NUMBER");
        /**
         * Дата постановски на баланс
         */
        _this.actDate = _this.addFieldFilter("ACT_DATE");
        /**
         * Причина постановки на баланс (Пересортица/Излишки/Продукция, полученная до 01.01.2016)
         */
        _this.type = _this.addFieldFilter("TYPE_ACT_CHARGE_ON_SHOP");
        /**
         * Регистрационный номер акта списания по типу "Пересортица".
         * Обязательно для заполнения для типа постановки на баланс "Пересортица".
         */
        _this.actWriteOff = _this.addFieldFilter("ACT_WRITE_OFF");
        /**
         * Примечание
         */
        _this.note = _this.addFieldFilter("NOTE");
        /**
         * Статус документа
         */
        _this.status = _this.addFieldFilter("STATUS");
        /**
         * Комментарий при отказе
         */
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        /**
         * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
         */
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return ActChargeOnShopQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ActChargeOnShopQuery = ActChargeOnShopQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var ActChargeOnShopPositionSortOrder = /** @class */ (function (_super) {
    __extends(ActChargeOnShopPositionSortOrder, _super);
    function ActChargeOnShopPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор позиции акта
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Идентификатор акта постановки, содержащего позицию
         */
        _this.actChargeOnShopUuid = _this.addFieldSorter("ACT_CHARGE_ON_SHOP_UUID");
        /**
         * Идентификатор позиции внутри накладной
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Количество
         */
        _this.quantity = _this.addFieldSorter("QUANTITY");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_2.ProductInfoInnerSortOrder());
        return _this;
    }
    return ActChargeOnShopPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActChargeOnShopPositionSortOrder = ActChargeOnShopPositionSortOrder;
var ActChargeOnShopPositionQuery = /** @class */ (function (_super) {
    __extends(ActChargeOnShopPositionQuery, _super);
    function ActChargeOnShopPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ActChargeOnShopPosition', ActChargeOnShop_1.ActChargeOnShopPosition.prototype, { productInfo: ProductInfo_1.default.prototype })) || this;
        /**
         * Уникальный идентификатор позиции акта
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Идентификатор акта постановки, содержащего позицию
         */
        _this.actChargeOnShopUuid = _this.addFieldFilter("ACT_CHARGE_ON_SHOP_UUID");
        /**
         * Идентификатор позиции внутри накладной
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Количество
         */
        _this.quantity = _this.addFieldFilter("QUANTITY", function (v) { return v * 1000; });
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_2.ProductInfoFilter());
        return _this;
    }
    return ActChargeOnShopPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ActChargeOnShopPositionQuery = ActChargeOnShopPositionQuery;
