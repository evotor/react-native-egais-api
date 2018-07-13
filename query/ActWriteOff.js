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
var converters_1 = require("./converters");
var executor_1 = require("./executor");
/**
 * @class module:actWriteOff.ActWriteOffSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} uuid Уникальный идентификатор акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} docOwner Отправитель акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} identity Идентификатор акта списания со склада (клиентский, к заполнению необязательный)
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} number Номер документа
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} actDate Дата составления
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} type Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} note Примечание
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} status Статус акта списания
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} rejectComment Комментарий для отказа на акт списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} version Версия протокола ЕГАИС
 * @property {FieldSorter<module:actWriteOff.ActWriteOffSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var ActWriteOffSortOrder = /** @class */ (function (_super) {
    __extends(ActWriteOffSortOrder, _super);
    function ActWriteOffSortOrder() {
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
        _this.version = _this.addFieldSorter("VERSION");
        _this.replyId = _this.addFieldSorter("REPLY_ID");
        return _this;
    }
    return ActWriteOffSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActWriteOffSortOrder = ActWriteOffSortOrder;
/**
 * @class module:actWriteOff.ActWriteOffQuery
 * @classdesc Класс для формирования запроса на получение актов списания со склада.
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} uuid Уникальный идентификатор акта списания со склада
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} docOwner Отправитель акта списания со склада
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} identity Идентификатор акта списания со склада (клиентский, к заполнению необязательный)
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} number Номер документа
 * @property {FieldFilter<Date, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} actDate Дата составления
 * @property {FieldFilter<?module:actWriteOff#ActWriteOffType, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} type Причина списания (Пересортица/Недостача/Уценка/Порча/Потери/Проверки/Арест/Иные цели/Реализация)
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} note Примечание
 * @property {FieldFilter<module:actWriteOff#ActWriteOffStatus, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} status Статус акта списания
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} rejectComment Комментарий для отказа на акт списания со склада
 * @property {FieldFilter<Version, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} version Версия протокола ЕГАИС
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffQuery, module:actWriteOff.ActWriteOffSortOrder, module:actWriteOff.ActWriteOff>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var ActWriteOffQuery = /** @class */ (function (_super) {
    __extends(ActWriteOffQuery, _super);
    function ActWriteOffQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ActWriteOff', ActWriteOff_1.default.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.docOwner = _this.addFieldFilter("OWNER");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.number = _this.addFieldFilter("NUMBER");
        _this.actDate = _this.addFieldFilter("ACT_DATE");
        _this.type = _this.addFieldFilter("TYPE_WRITE_OFF");
        _this.note = _this.addFieldFilter("NOTE");
        _this.status = _this.addFieldFilter("STATUS");
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        _this.version = _this.addFieldFilter("VERSION");
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return ActWriteOffQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.default = ActWriteOffQuery;
/**
 * @class module:actWriteOff.ActWriteOffPositionSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} uuid Уникальный идентификатор позиции акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} actWriteOffUuid Уникальный идентификатор акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} identity Идентификатор позиции акта списания со склада
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} quantity Количество
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldSorter<module:actWriteOff.ActWriteOffPositionSortOrder>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:actWriteOff.ActWriteOffPositionSortOrder>} productInfo Информация о продукции
 */
var ActWriteOffPositionSortOrder = /** @class */ (function (_super) {
    __extends(ActWriteOffPositionSortOrder, _super);
    function ActWriteOffPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.actWriteOffUuid = _this.addFieldSorter("ACT_WRITE_OFF_UUID");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.quantity = _this.addFieldSorter("QUANTITY");
        _this.informF2RegId = _this.addFieldSorter("INFORM_F2_REG_ID");
        _this.informF2MarkInfoJson = _this.addFieldSorter("INFORM_F2_MARK_INFO_JSON");
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_2.ProductInfoInnerSortOrder());
        return _this;
    }
    return ActWriteOffPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActWriteOffPositionSortOrder = ActWriteOffPositionSortOrder;
/**
 * @class module:actWriteOff.ActWriteOffPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций акта списания со склада.
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} uuid Уникальный идентификатор позиции акта списания со склада
 * @property {FieldFilter<string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} actWriteOffUuid Уникальный идентификатор акта списания со склада
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} identity Идентификатор позиции акта списания со склада
 * @property {FieldFilter<number, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} quantity Количество
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldFilter<?string, module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} informF2MarkInfoJson Информация о марках в формате JSON
 * @property {module:productInfo.ProductInfoFilter<module:actWriteOff.ActWriteOffPositionQuery, module:actWriteOff.ActWriteOffPositionSortOrder, module:actWriteOff.ActWriteOffPosition>} productInfo Информация о продукции
 */
var ActWriteOffPositionQuery = /** @class */ (function (_super) {
    __extends(ActWriteOffPositionQuery, _super);
    function ActWriteOffPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ActWriteOffPosition', ActWriteOff_1.ActWriteOffPosition.prototype, { productInfo: ProductInfo_1.default.prototype })) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.actWriteOffUuid = _this.addFieldFilter("ACT_WRITE_OFF_UUID");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.quantity = _this.addFieldFilter("QUANTITY", converters_1.quantityConverter);
        _this.informF2RegId = _this.addFieldFilter("INFORM_F2_REG_ID");
        _this.informF2MarkInfoJson = _this.addFieldFilter("INFORM_F2_MARK_INFO_JSON");
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_2.ProductInfoFilter());
        return _this;
    }
    return ActWriteOffPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ActWriteOffPositionQuery = ActWriteOffPositionQuery;
