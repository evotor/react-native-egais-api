"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Перечисление версий ЕГАИС.
 * @enum {string} Version
 * @property {string} V1
 * @property {string} V2
 * @property {string} V3
 */
var Version;
(function (Version) {
    Version["V1"] = "V1";
    Version["V2"] = "V2";
    Version["V3"] = "V3";
})(Version = exports.Version || (exports.Version = {}));
/**
 * Перечисление типов организаций.
 * @enum {string} OrgType
 * @property {string} UL Юридическое лицо
 * @property {string} FL Индивидуальный предприниматель
 * @property {string} FO Иностранец (исключая таможенный союз)
 * @property {string} TS Таможенный союз
 * @memberOf module:orgInfo#
 */
var OrgType;
(function (OrgType) {
    OrgType["UL"] = "UL";
    OrgType["FL"] = "FL";
    OrgType["FO"] = "FO";
    OrgType["TS"] = "TS";
})(OrgType = exports.OrgType || (exports.OrgType = {}));
/**
 * Перечисление поддерживаемых клиентом версий формата ТТН.
 * @enum {string} WaybillTypeUsed
 * @property {string} WAYBILL_V1 Версия 1
 * @property {string} WAYBILL_V2 Версия 2
 * @property {string} WAYBILL_V3 Версия 3
 * @memberOf module:orgInfo#
 */
var WaybillTypeUsed;
(function (WaybillTypeUsed) {
    WaybillTypeUsed["WAYBILL_V1"] = "WAYBILL_V1";
    WaybillTypeUsed["WAYBILL_V2"] = "WAYBILL_V2";
    WaybillTypeUsed["WAYBILL_V3"] = "WAYBILL_V3";
})(WaybillTypeUsed = exports.WaybillTypeUsed || (exports.WaybillTypeUsed = {}));
/**
 * Перечисление типов продукции.
 * @enum {string} OrgType
 * @property {string} AP Алкогольная продукция (АП)
 * @property {string} SSP Спиртосодержащая продукция (ССП)
 * @property {string} SSNP ССНП
 * @property {string} SPIRT Спирт
 * @memberOf module:productInfo#
 */
var ProductType;
(function (ProductType) {
    ProductType["AP"] = "AP";
    ProductType["SSP"] = "SSP";
    ProductType["SSNP"] = "SSNP";
    ProductType["SPIRT"] = "SPIRT";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
/**
 * Перечисление направлений документа в представлении УТМ.
 * @enum {string} Direction
 * @property {string} IN Входящий
 * @property {string} OUT Исходящий
 * @memberOf module:waybill#
 */
var Direction;
(function (Direction) {
    Direction["IN"] = "IN";
    Direction["OUT"] = "OUT";
})(Direction = exports.Direction || (exports.Direction = {}));
/**
 * Перечисление типов резолюций ТТН.
 * @enum {string} WaybillResolution
 * @property {string} UNKNOWN Неизвестная
 * @property {string} REJECTED Отклонённая
 * @property {string} ACCEPTED Принятая
 * @memberOf module:waybill#
 */
var WaybillResolution;
(function (WaybillResolution) {
    WaybillResolution["UNKNOWN"] = "UNKNOWN";
    WaybillResolution["REJECTED"] = "REJECTED";
    WaybillResolution["ACCEPTED"] = "ACCEPTED";
})(WaybillResolution = exports.WaybillResolution || (exports.WaybillResolution = {}));
/**
 * Перечисление типов состояний ТТН.
 * @enum {string} WaybillStatus
 * @property {string} NOT_PROCESSED
 * @property {string} WAIT_UTM_ANSWER
 * @property {string} NOT_CONFIRMED
 * @property {string} ERROR
 * @property {string} FINISH
 * @memberOf module:waybill#
 */
var WaybillStatus;
(function (WaybillStatus) {
    WaybillStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    WaybillStatus["WAIT_UTM_ANSWER"] = "WAIT_UTM_ANSWER";
    WaybillStatus["NOT_CONFIRMED"] = "NOT_CONFIRMED";
    WaybillStatus["ERROR"] = "ERROR";
    WaybillStatus["FINISH"] = "FINISH";
})(WaybillStatus = exports.WaybillStatus || (exports.WaybillStatus = {}));
/**
 * Перечисление типов товарно-транспортной накладной (ТТН).
 * @enum {string} WaybillType
 * @property {string} INVOICE_FROM_ME Расход
 * @property {string} RETURN_TO_ME Возврат мне
 * @property {string} INVOICE_TO_ME Приход
 * @property {string} RETURN_FROM_ME Возврат от меня
 * @memberOf module:waybill#
 */
var WaybillType;
(function (WaybillType) {
    WaybillType["INVOICE_FROM_ME"] = "INVOICE_FROM_ME";
    WaybillType["RETURN_TO_ME"] = "RETURN_TO_ME";
    WaybillType["INVOICE_TO_ME"] = "INVOICE_TO_ME";
    WaybillType["RETURN_FROM_ME"] = "RETURN_FROM_ME";
})(WaybillType = exports.WaybillType || (exports.WaybillType = {}));
/**
 * Перечисление типов поставки.
 * @enum {string} UnitType
 * @property {string} PACKED Упакованная
 * @property {string} UNPACKED Неупакованная
 * @memberOf module:waybill#
 */
var UnitType;
(function (UnitType) {
    UnitType["PACKED"] = "PACKED";
    UnitType["UNPACKED"] = "UNPACKED";
})(UnitType = exports.UnitType || (exports.UnitType = {}));
/**
 * Перечисление статусов справки 2.
 * @enum {string} TtnInformF2RegStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @memberOf module:waybill#
 */
var TtnInformF2RegStatus;
(function (TtnInformF2RegStatus) {
    TtnInformF2RegStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    TtnInformF2RegStatus["FINISH"] = "FINISH";
})(TtnInformF2RegStatus = exports.TtnInformF2RegStatus || (exports.TtnInformF2RegStatus = {}));
/**
 * Тип подтверждения акта ТТН.
 * @enum {string} AcceptType
 * @property {string} ACCEPTED Принятие
 * @property {string} DIFFERENCES Есть расхождения
 * @property {string} REJECTED Отказ
 * @memberOf module:waybillAct#
 */
var AcceptType;
(function (AcceptType) {
    AcceptType["ACCEPTED"] = "ACCEPTED";
    AcceptType["DIFFERENCES"] = "DIFFERENCES";
    AcceptType["REJECTED"] = "REJECTED";
})(AcceptType = exports.AcceptType || (exports.AcceptType = {}));
/**
 * Тип акта расхождения к ТТН.
 * @enum {string} WaybillActType
 * @property {string} FULL Полный
 * @property {string} PART частичный
 * @memberOf module:waybillAct#
 */
var WaybillActType;
(function (WaybillActType) {
    WaybillActType["FULL"] = "FULL";
    WaybillActType["PART"] = "PART";
})(WaybillActType = exports.WaybillActType || (exports.WaybillActType = {}));
/**
 * Статус акта разногласия для ТТН.
 * @enum {string} WaybillActStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:waybillAct#
 */
var WaybillActStatus;
(function (WaybillActStatus) {
    WaybillActStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    WaybillActStatus["FINISH"] = "FINISH";
    WaybillActStatus["REJECTED"] = "REJECTED";
})(WaybillActStatus = exports.WaybillActStatus || (exports.WaybillActStatus = {}));
/**
 * Причина постановки на баланс.
 * @enum {string} ActChargeOnShopType
 * @property {string} RESORTING Пересортица
 * @property {string} OVERAGE Излишки
 * @property {string} RECEIVED_BEFORE_01_01_2016 Продукция, полученная до 01.01.2016
 * @memberOf module:actChargeOn#
 */
var ActChargeOnShopType;
(function (ActChargeOnShopType) {
    ActChargeOnShopType["RESORTING"] = "RESORTING";
    ActChargeOnShopType["OVERAGE"] = "OVERAGE";
    ActChargeOnShopType["RECEIVED_BEFORE_01_01_2016"] = "RECEIVED_BEFORE_01_01_2016";
})(ActChargeOnShopType = exports.ActChargeOnShopType || (exports.ActChargeOnShopType = {}));
/**
 * Статус постановки на баланс.
 * @enum {string} ActChargeOnShopStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:actChargeOn#
 */
var ActChargeOnShopStatus;
(function (ActChargeOnShopStatus) {
    ActChargeOnShopStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    ActChargeOnShopStatus["FINISH"] = "FINISH";
    ActChargeOnShopStatus["REJECTED"] = "REJECTED";
})(ActChargeOnShopStatus = exports.ActChargeOnShopStatus || (exports.ActChargeOnShopStatus = {}));
/**
 * Причина списания.
 * @enum {string} ActWriteOffType
 * @property {string} RESORTING Пересортица
 * @property {string} OVERAGE Излишки
 * @property {string} RECEIVED_BEFORE_01_01_2016 Продукция, полученная до 01.01.2016
 * @memberOf module:actWriteOff#
 */
var ActWriteOffType;
(function (ActWriteOffType) {
    ActWriteOffType["RESORTING"] = "RESORTING";
    ActWriteOffType["OVERAGE"] = "OVERAGE";
    ActWriteOffType["RECEIVED_BEFORE_01_01_2016"] = "RECEIVED_BEFORE_01_01_2016";
})(ActWriteOffType = exports.ActWriteOffType || (exports.ActWriteOffType = {}));
/**
 * Статус списания.
 * @enum {string} ActWriteOffStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:actWriteOff#
 */
var ActWriteOffStatus;
(function (ActWriteOffStatus) {
    ActWriteOffStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    ActWriteOffStatus["FINISH"] = "FINISH";
    ActWriteOffStatus["REJECTED"] = "REJECTED";
})(ActWriteOffStatus = exports.ActWriteOffStatus || (exports.ActWriteOffStatus = {}));
/**
 * Тип заключения фиксации.
 * @enum {string} ConclusionType
 * @property {string} ACCEPTED
 * @property {string} REJECTED
 * @memberOf module:ticket#
 */
var ConclusionType;
(function (ConclusionType) {
    ConclusionType["ACCEPTED"] = "ACCEPTED";
    ConclusionType["REJECTED"] = "REJECTED";
})(ConclusionType = exports.ConclusionType || (exports.ConclusionType = {}));
/**
 * Статус тикета подтверждения.
 * @enum {string} ConfirmTicketStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:ticket#
 */
var ConfirmTicketStatus;
(function (ConfirmTicketStatus) {
    ConfirmTicketStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    ConfirmTicketStatus["FINISH"] = "FINISH";
    ConfirmTicketStatus["REJECTED"] = "REJECTED";
})(ConfirmTicketStatus = exports.ConfirmTicketStatus || (exports.ConfirmTicketStatus = {}));
/**
 * Тип исходного документа.
 * @enum {string} DocType
 * @property {string} WAY_BILL Товарно-транспортная накладная
 * @property {string} WAY_BILL_ACT Акт разногласий для товарно-транспортной накладной
 * @property {string} TRANSFER_TO_SHOP Акт передачи продукции со склада в торговый зал
 * @property {string} TRANSFER_FROM_SHOP Акт передачи продукции из торгового зала на склад
 * @property {string} CONFIRM_TICKET Подтверждение акта разногласий для Товарно-Транспортной Накладной
 * @property {string} QUERY_AP
 * @property {string} QUERY_RESTS
 * @property {string} QUERY_RESTS_SHOP
 * @property {string} QUERY_CLIENTS
 * @property {string} QUERY_RESEND_DOC
 * @property {string} ACT_WRITE_OFF Акт списания
 * @property {string} INFO_VERSION_TTN
 * @property {string} ACT_CHARGE_ON_SHOP Акт постановки на баланс
 * @property {string} ACT_WRITE_OFF_SHOP Акт списания из магазина
 * @memberOf module:ticket#
 */
var DocType;
(function (DocType) {
    DocType["WAY_BILL"] = "WAY_BILL";
    DocType["WAY_BILL_ACT"] = "WAY_BILL_ACT";
    DocType["TRANSFER_TO_SHOP"] = "TRANSFER_TO_SHOP";
    DocType["TRANSFER_FROM_SHOP"] = "TRANSFER_FROM_SHOP";
    DocType["CONFIRM_TICKET"] = "CONFIRM_TICKET";
    DocType["QUERY_AP"] = "QUERY_AP";
    DocType["QUERY_RESTS"] = "QUERY_RESTS";
    DocType["QUERY_RESTS_SHOP"] = "QUERY_RESTS_SHOP";
    DocType["QUERY_CLIENTS"] = "QUERY_CLIENTS";
    DocType["QUERY_RESEND_DOC"] = "QUERY_RESEND_DOC";
    DocType["ACT_WRITE_OFF"] = "ACT_WRITE_OFF";
    DocType["INFO_VERSION_TTN"] = "INFO_VERSION_TTN";
    DocType["ACT_CHARGE_ON_SHOP"] = "ACT_CHARGE_ON_SHOP";
    DocType["ACT_WRITE_OFF_SHOP"] = "ACT_WRITE_OFF_SHOP";
})(DocType = exports.DocType || (exports.DocType = {}));
/**
 * Тип результата выполнения операции.
 * @enum {string} OperationResult
 * @property {string} ACCEPTED
 * @property {string} REJECTED
 * @memberOf module:ticket#
 */
var OperationResult;
(function (OperationResult) {
    OperationResult["ACCEPTED"] = "ACCEPTED";
    OperationResult["REJECTED"] = "REJECTED";
})(OperationResult = exports.OperationResult || (exports.OperationResult = {}));
/**
 * Статус перемещения.
 * @enum {string} TransferStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:transfer#
 */
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    TransferStatus["FINISH"] = "FINISH";
    TransferStatus["REJECTED"] = "REJECTED";
})(TransferStatus = exports.TransferStatus || (exports.TransferStatus = {}));
