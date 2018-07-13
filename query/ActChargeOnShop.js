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
var converters_1 = require("./converters");
var executor_1 = require("./executor");
/**
 * @class module:actChargeOn.ActChargeOnShopSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} uuid Уникальный идентификатор акта поставки
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} docOwner Кто подает документы
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} identity ID акта (клиентсикй)
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} number Номер документа
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} actDate Дата постановски на баланс
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} type Причина постановки на баланс (Пересортица/Излишки/Продукция, полученная до 01.01.2016)
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} actWriteOff Регистрационный номер акта списания по типу "Пересортица". Обязательно для заполнения для типа постановки на баланс "Пересортица".
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} note Примечание
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} status Статус документа
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} rejectComment Комментарий при отказе
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var ActChargeOnShopSortOrder = /** @class */ (function (_super) {
    __extends(ActChargeOnShopSortOrder, _super);
    function ActChargeOnShopSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.docOwner = _this.addFieldSorter("OWNER");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.number = _this.addFieldSorter("NUMBER");
        _this.actDate = _this.addFieldSorter("ACT_DATE");
        _this.type = _this.addFieldSorter("TYPE_ACT_CHARGE_ON_SHOP");
        _this.actWriteOff = _this.addFieldSorter("ACT_WRITE_OFF");
        _this.note = _this.addFieldSorter("NOTE");
        _this.status = _this.addFieldSorter("STATUS");
        _this.rejectComment = _this.addFieldSorter("REJECT_COMMENT");
        _this.replyId = _this.addFieldSorter("REPLY_ID");
        return _this;
    }
    return ActChargeOnShopSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActChargeOnShopSortOrder = ActChargeOnShopSortOrder;
/**
 * @class module:actChargeOn.ActChargeOnShopQuery
 * @classdesc Класс для формирования запроса на получение актов поставки.
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} uuid Уникальный идентификатор акта списания из магазина
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} docOwner Кто подает документы
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} identity ID акта (клиентсикй)
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} number Номер документа
 * @property {FieldFilter<Date, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} actDate Дата постановски на баланс
 * @property {FieldFilter<module:actChargeOn#ActChargeOnShopType, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} type Причина постановки на баланс (Пересортица/Излишки/Продукция, полученная до 01.01.2016)
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} actWriteOff Регистрационный номер акта списания по типу "Пересортица". Обязательно для заполнения для типа постановки на баланс "Пересортица".
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} note Примечание
 * @property {FieldFilter<module:actChargeOn#ActChargeOnShopStatus, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} status Статус документа
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} rejectComment Комментарий при отказе
 * @property {FieldFilter<?string, module:actChargeOn.ActChargeOnShopQuery, module:actChargeOn.ActChargeOnShopSortOrder, module:actChargeOn.ActChargeOnShop>} replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
var ActChargeOnShopQuery = /** @class */ (function (_super) {
    __extends(ActChargeOnShopQuery, _super);
    function ActChargeOnShopQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ActChargeOnShop', ActChargeOnShop_1.default.prototype)) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.docOwner = _this.addFieldFilter("OWNER");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.number = _this.addFieldFilter("NUMBER");
        _this.actDate = _this.addFieldFilter("ACT_DATE");
        _this.type = _this.addFieldFilter("TYPE_ACT_CHARGE_ON_SHOP");
        _this.actWriteOff = _this.addFieldFilter("ACT_WRITE_OFF");
        _this.note = _this.addFieldFilter("NOTE");
        _this.status = _this.addFieldFilter("STATUS");
        _this.rejectComment = _this.addFieldFilter("REJECT_COMMENT");
        _this.replyId = _this.addFieldFilter("REPLY_ID");
        return _this;
    }
    return ActChargeOnShopQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ActChargeOnShopQuery = ActChargeOnShopQuery;
/**
 * @class module:actChargeOn.ActChargeOnShopPositionSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} uuid Уникальный идентификатор позиции акта
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} actChargeOnShopUuid Идентификатор акта постановки, содержащего позицию
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} identity Идентификатор позиции внутри накладной
 * @property {FieldSorter<module:actChargeOn.ActChargeOnShopSortOrder>} quantity Количество
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:actChargeOn.ActChargeOnShopPositionSortOrder>} productInfo Информация о продукции
 */
var ActChargeOnShopPositionSortOrder = /** @class */ (function (_super) {
    __extends(ActChargeOnShopPositionSortOrder, _super);
    function ActChargeOnShopPositionSortOrder() {
        var _this = _super.call(this, function () { return _this; }) || this;
        _this.uuid = _this.addFieldSorter("UUID");
        _this.actChargeOnShopUuid = _this.addFieldSorter("ACT_CHARGE_ON_SHOP_UUID");
        _this.identity = _this.addFieldSorter("IDENTITY");
        _this.quantity = _this.addFieldSorter("QUANTITY");
        _this.productInfo = _this.addInnerSortOrder(new ProductInfo_2.ProductInfoInnerSortOrder());
        return _this;
    }
    return ActChargeOnShopPositionSortOrder;
}(abstract_query_builder_1.SortOrder));
exports.ActChargeOnShopPositionSortOrder = ActChargeOnShopPositionSortOrder;
/**
 * @class module:actChargeOn.ActChargeOnShopPositionQuery
 * @classdesc Класс для формирования запроса на получение позиций акта поставки.
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} uuid Уникальный идентификатор позиции акта
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} actChargeOnShopUuid Идентификатор акта постановки, содержащего позицию
 * @property {FieldFilter<string, module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} identity Идентификатор позиции внутри накладной
 * @property {FieldFilter<number, module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} quantity Количество
 * @property {module:productInfo.ProductInfoFilter<module:actChargeOn.ActChargeOnShopPositionQuery, module:actChargeOn.ActChargeOnShopPositionSortOrder, module:actChargeOn.ActChargeOnShopPosition>} productInfo Информация о продукции
 */
var ActChargeOnShopPositionQuery = /** @class */ (function (_super) {
    __extends(ActChargeOnShopPositionQuery, _super);
    function ActChargeOnShopPositionQuery() {
        var _this = _super.call(this, function () { return _this; }, executor_1.default('ActChargeOnShopPosition', ActChargeOnShop_1.ActChargeOnShopPosition.prototype, { productInfo: ProductInfo_1.default.prototype })) || this;
        _this.uuid = _this.addFieldFilter("UUID");
        _this.actChargeOnShopUuid = _this.addFieldFilter("ACT_CHARGE_ON_SHOP_UUID");
        _this.identity = _this.addFieldFilter("IDENTITY");
        _this.quantity = _this.addFieldFilter("QUANTITY", converters_1.quantityConverter);
        _this.productInfo = _this.addInnerFilterBuilder(new ProductInfo_2.ProductInfoFilter());
        return _this;
    }
    return ActChargeOnShopPositionQuery;
}(abstract_query_builder_1.FilterBuilder));
exports.ActChargeOnShopPositionQuery = ActChargeOnShopPositionQuery;
