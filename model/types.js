"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Version;
(function (Version) {
    Version["V1"] = "V1";
    Version["V2"] = "V2";
    Version["V3"] = "V3";
})(Version = exports.Version || (exports.Version = {}));
/**
 * Тип организации
 */
var OrgType;
(function (OrgType) {
    /**
     * Юридическое лицо
     */
    OrgType["UL"] = "UL";
    /**
     * Индивидуальный предприниматель
     */
    OrgType["FL"] = "FL";
    /**
     * Иностранец (исключая таможенный союз)
     */
    OrgType["FO"] = "FO";
    /**
     * Таможенный союз
     */
    OrgType["TS"] = "TS";
})(OrgType = exports.OrgType || (exports.OrgType = {}));
/**
 * Тип продукции
 */
var ProductType;
(function (ProductType) {
    /**
     * Алкогольная продукция (АП)
     */
    ProductType["AP"] = "AP";
    /**
     * Спиртосодержащая продукция (ССП)
     */
    ProductType["SSP"] = "SSP";
    /**
     * ССНП
     */
    ProductType["SSNP"] = "SSNP";
    /**
     * Спирт
     */
    ProductType["SPIRT"] = "SPIRT";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
/**
 * Поддерживаемая клиентом версия формата ТТН
 */
var WaybillTypeUsed;
(function (WaybillTypeUsed) {
    /**
     * Версия 1
     */
    WaybillTypeUsed["WAYBILL_V1"] = "WAYBILL_V1";
    /**
     * Версия 2
     */
    WaybillTypeUsed["WAYBILL_V2"] = "WAYBILL_V2";
    /**
     * Версия 3
     */
    WaybillTypeUsed["WAYBILL_V3"] = "WAYBILL_V3";
})(WaybillTypeUsed = exports.WaybillTypeUsed || (exports.WaybillTypeUsed = {}));
/**
 * Направление документа в представлении УТМ (входящий/исходящий)
 */
var Direction;
(function (Direction) {
    Direction["IN"] = "IN";
    Direction["OUT"] = "OUT";
})(Direction = exports.Direction || (exports.Direction = {}));
var WaybillResolution;
(function (WaybillResolution) {
    WaybillResolution["UNKNOWN"] = "UNKNOWN";
    WaybillResolution["REJECTED"] = "REJECTED";
    WaybillResolution["ACCEPTED"] = "ACCEPTED";
})(WaybillResolution = exports.WaybillResolution || (exports.WaybillResolution = {}));
var WaybillStatus;
(function (WaybillStatus) {
    WaybillStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    WaybillStatus["WAIT_UTM_ANSWER"] = "WAIT_UTM_ANSWER";
    WaybillStatus["NOT_CONFIRMED"] = "NOT_CONFIRMED";
    WaybillStatus["ERROR"] = "ERROR";
    WaybillStatus["FINISH"] = "FINISH";
})(WaybillStatus = exports.WaybillStatus || (exports.WaybillStatus = {}));
/**
 * Тип товарно-транспортной накладной (ТТН)
 */
var WaybillType;
(function (WaybillType) {
    /**
     * расход
     */
    WaybillType["INVOICE_FROM_ME"] = "INVOICE_FROM_ME";
    /**
     * возврат мне
     */
    WaybillType["RETURN_TO_ME"] = "RETURN_TO_ME";
    /**
     * приход
     */
    WaybillType["INVOICE_TO_ME"] = "INVOICE_TO_ME";
    /**
     * возврат от меня
     */
    WaybillType["RETURN_FROM_ME"] = "RETURN_FROM_ME";
})(WaybillType = exports.WaybillType || (exports.WaybillType = {}));
/**
 * Тип поставки
 */
var UnitType;
(function (UnitType) {
    /**
     * упакованная
     */
    UnitType["PACKED"] = "PACKED";
    /**
     * неупакованная
     */
    UnitType["UNPACKED"] = "UNPACKED";
})(UnitType = exports.UnitType || (exports.UnitType = {}));
var TtnInformF2RegStatus;
(function (TtnInformF2RegStatus) {
    TtnInformF2RegStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    TtnInformF2RegStatus["FINISH"] = "FINISH";
})(TtnInformF2RegStatus = exports.TtnInformF2RegStatus || (exports.TtnInformF2RegStatus = {}));
var AcceptType;
(function (AcceptType) {
    AcceptType["ACCEPTED"] = "ACCEPTED";
    AcceptType["DIFFERENCES"] = "DIFFERENCES";
    AcceptType["REJECTED"] = "REJECTED";
})(AcceptType = exports.AcceptType || (exports.AcceptType = {}));
var WaybillActType;
(function (WaybillActType) {
    WaybillActType["FULL"] = "FULL";
    WaybillActType["PART"] = "PART";
})(WaybillActType = exports.WaybillActType || (exports.WaybillActType = {}));
var WaybillActStatus;
(function (WaybillActStatus) {
    WaybillActStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    WaybillActStatus["FINISH"] = "FINISH";
    WaybillActStatus["REJECTED"] = "REJECTED";
})(WaybillActStatus = exports.WaybillActStatus || (exports.WaybillActStatus = {}));
var ActChargeOnShopType;
(function (ActChargeOnShopType) {
    ActChargeOnShopType["RESORTING"] = "RESORTING";
    ActChargeOnShopType["OVERAGE"] = "OVERAGE";
    ActChargeOnShopType["RECEIVED_BEFORE_01_01_2016"] = "RECEIVED_BEFORE_01_01_2016";
})(ActChargeOnShopType = exports.ActChargeOnShopType || (exports.ActChargeOnShopType = {}));
var ActChargeOnShopStatus;
(function (ActChargeOnShopStatus) {
    ActChargeOnShopStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    ActChargeOnShopStatus["FINISH"] = "FINISH";
    ActChargeOnShopStatus["REJECTED"] = "REJECTED";
})(ActChargeOnShopStatus = exports.ActChargeOnShopStatus || (exports.ActChargeOnShopStatus = {}));
var ActWriteOffType;
(function (ActWriteOffType) {
    ActWriteOffType["RESORTING"] = "RESORTING";
    ActWriteOffType["OVERAGE"] = "OVERAGE";
    ActWriteOffType["RECEIVED_BEFORE_01_01_2016"] = "RECEIVED_BEFORE_01_01_2016";
})(ActWriteOffType = exports.ActWriteOffType || (exports.ActWriteOffType = {}));
var ActWriteOffStatus;
(function (ActWriteOffStatus) {
    ActWriteOffStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    ActWriteOffStatus["FINISH"] = "FINISH";
    ActWriteOffStatus["REJECTED"] = "REJECTED";
})(ActWriteOffStatus = exports.ActWriteOffStatus || (exports.ActWriteOffStatus = {}));
/**
 * Тип заключения фиксации
 */
var ConclusionType;
(function (ConclusionType) {
    ConclusionType["ACCEPTED"] = "ACCEPTED";
    ConclusionType["REJECTED"] = "REJECTED";
})(ConclusionType = exports.ConclusionType || (exports.ConclusionType = {}));
/**
 * Статус тикета подтверждения
 */
var ConfirmTicketStatus;
(function (ConfirmTicketStatus) {
    ConfirmTicketStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    ConfirmTicketStatus["FINISH"] = "FINISH";
    ConfirmTicketStatus["REJECTED"] = "REJECTED";
})(ConfirmTicketStatus = exports.ConfirmTicketStatus || (exports.ConfirmTicketStatus = {}));
/**
 * Тип исходного документа
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
 * Тип результата выполнения операции
 */
var OperationResult;
(function (OperationResult) {
    OperationResult["ACCEPTED"] = "ACCEPTED";
    OperationResult["REJECTED"] = "REJECTED";
})(OperationResult = exports.OperationResult || (exports.OperationResult = {}));
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["NOT_PROCESSED"] = "NOT_PROCESSED";
    TransferStatus["FINISH"] = "FINISH";
    TransferStatus["REJECTED"] = "REJECTED";
})(TransferStatus = exports.TransferStatus || (exports.TransferStatus = {}));
