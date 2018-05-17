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
var ProductInfo_1 = require("../model/dictionary/ProductInfo");
var ProductInfo_2 = require("./inner/ProductInfo");
var defaultExecutor_1 = require("./defaultExecutor");
/**
 * Класс для сортировки элементов в результе запроса
 */
var ActWriteOffSortOrder = /** @class */ (function (_super) {
    __extends(ActWriteOffSortOrder, _super);
    function ActWriteOffSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор акта списания со склада
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Отправитель акта списания со склада
         */
        _this.docOwner = _this.addFieldSorter("OWNER");
        /**
         * Идентификатор акта списания со склада (клиентский, к заполнению необязательный)
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
         * Комментарий для отказа на акт списания со склада
         */
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        /**
         * Версия протокола ЕГАИС
         */
        _this.version = _this.addFieldSorter("VERSION");
        /**
         * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
         */
        _this.replyId = _this.addFieldSorter("REPLY_ID");
        return _this;
    }
    return ActWriteOffSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActWriteOffSortOrder = ActWriteOffSortOrder;
/**
 * Класс для формирования запроса на получение актов списания со склада
 */
var ActWriteOffQuery = /** @class */ (function (_super) {
    __extends(ActWriteOffQuery, _super);
    function ActWriteOffQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ActWriteOff', ActWriteOff_1.default.prototype)) || this;
        /**
         * Уникальный идентификатор акта списания со склада
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Отправитель акта списания со склада
         */
        _this.docOwner = _this.addFieldFilter("OWNER");
        /**
         * Идентификатор акта списания со склада (клиентский, к заполнению необязательный)
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
         * Комментарий для отказа на акт списания со склада
         */
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        /**
         * Версия протокола ЕГАИС
         */
        _this.version = _this.addFieldFilter("VERSION");
        /**
         * Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
         */
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return ActWriteOffQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = ActWriteOffQuery;
/**
 * Класс для сортировки элементов в результе запроса
 */
var ActWriteOffPositionSortOrder = /** @class */ (function (_super) {
    __extends(ActWriteOffPositionSortOrder, _super);
    function ActWriteOffPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        /**
         * Уникальный идентификатор позиции акта списания со склада
         */
        _this.uuid = _this.addFieldSorter("UUID");
        /**
         * Уникальный идентификатор акта списания со склада
         */
        _this.actWriteOffUuid = _this.addFieldSorter("ACT_WRITE_OFF_UUID");
        /**
         * Идентификатор позиции акта списания со склада
         */
        _this.identity = _this.addFieldSorter("IDENTITY");
        /**
         * Количество
         */
        _this.quantity = _this.addFieldSorter("QUANTITY");
        /**
         * Регистрационный номер раздела справки 2
         */
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        /**
         * Информация о марках в формате JSON
         */
        _this.informF2MarkInfoJson = _this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_2.ProductInfoInnerSortOrder());
        return _this;
    }
    return ActWriteOffPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActWriteOffPositionSortOrder = ActWriteOffPositionSortOrder;
/**
 * Класс для формирования запроса на получение позиций акта списания со склада
 */
var ActWriteOffPositionQuery = /** @class */ (function (_super) {
    __extends(ActWriteOffPositionQuery, _super);
    function ActWriteOffPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, defaultExecutor_1.default('ActWriteOffPosition', ActWriteOff_1.ActWriteOffPosition.prototype, { productInfo: ProductInfo_1.default.prototype })) || this;
        /**
         * Уникальный идентификатор позиции акта списания со склада
         */
        _this.uuid = _this.addFieldFilter("UUID");
        /**
         * Уникальный идентификатор акта списания со склада
         */
        _this.actWriteOffUuid = _this.addFieldFilter("ACT_WRITE_OFF_UUID");
        /**
         * Идентификатор позиции акта списания со склада
         */
        _this.identity = _this.addFieldFilter("IDENTITY");
        /**
         * Количество
         */
        _this.quantity = _this.addFieldFilter("QUANTITY", function (v) { return v * 1000; });
        /**
         * Регистрационный номер раздела справки 2
         */
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        /**
         * Информация о марках в формате JSON
         */
        _this.informF2MarkInfoJson = _this.addFieldFilter("INFORM_F2_MARK_INFO_JSON");
        /**
         * Информация о продукции
         */
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_2.ProductInfoFilter());
        return _this;
    }
    return ActWriteOffPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ActWriteOffPositionQuery = ActWriteOffPositionQuery;
