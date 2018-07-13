
/**
 * Перечисление версий ЕГАИС.
 * @enum {string} Version
 * @property {string} V1
 * @property {string} V2
 * @property {string} V3
 */
export enum Version {
    V1 = "V1",
    V2 = "V2",
    V3 = "V3"
}

/**
 * Перечисление типов организаций.
 * @enum {string} OrgType
 * @property {string} UL Юридическое лицо
 * @property {string} FL Индивидуальный предприниматель
 * @property {string} FO Иностранец (исключая таможенный союз)
 * @property {string} TS Таможенный союз
 * @memberOf module:orgInfo#
 */
export enum OrgType {
    UL = "UL",
    FL = "FL",
    FO = "FO",
    TS = "TS"
}

/**
 * Перечисление поддерживаемых клиентом версий формата ТТН.
 * @enum {string} WaybillTypeUsed
 * @property {string} WAYBILL_V1 Версия 1
 * @property {string} WAYBILL_V2 Версия 2
 * @property {string} WAYBILL_V3 Версия 3
 * @memberOf module:orgInfo#
 */
export enum WaybillTypeUsed {
    WAYBILL_V1 = "WAYBILL_V1",
    WAYBILL_V2 = "WAYBILL_V2",
    WAYBILL_V3 = "WAYBILL_V3"
}

/**
 * Перечисление типов продукции.
 * @enum {string} OrgType
 * @property {string} AP Алкогольная продукция (АП)
 * @property {string} SSP Спиртосодержащая продукция (ССП)
 * @property {string} SSNP ССНП
 * @property {string} SPIRT Спирт
 * @memberOf module:productInfo#
 */
export enum ProductType {
    AP = "AP",
    SSP = "SSP",
    SSNP = "SSNP",
    SPIRT = "SPIRT"
}

/**
 * Перечисление направлений документа в представлении УТМ.
 * @enum {string} Direction
 * @property {string} IN Входящий
 * @property {string} OUT Исходящий
 * @memberOf module:waybill#
 */
export enum Direction {
    IN = "IN",
    OUT = "OUT"
}

/**
 * Перечисление типов резолюций ТТН.
 * @enum {string} WaybillResolution
 * @property {string} UNKNOWN Неизвестная
 * @property {string} REJECTED Отклонённая
 * @property {string} ACCEPTED Принятая
 * @memberOf module:waybill#
 */
export enum WaybillResolution {
    UNKNOWN = "UNKNOWN",
    REJECTED = "REJECTED",
    ACCEPTED = "ACCEPTED"
}

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
export enum WaybillStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    WAIT_UTM_ANSWER = "WAIT_UTM_ANSWER",
    NOT_CONFIRMED = "NOT_CONFIRMED",
    ERROR = "ERROR",
    FINISH = "FINISH"
}

/**
 * Перечисление типов товарно-транспортной накладной (ТТН).
 * @enum {string} WaybillType
 * @property {string} INVOICE_FROM_ME Расход
 * @property {string} RETURN_TO_ME Возврат мне
 * @property {string} INVOICE_TO_ME Приход
 * @property {string} RETURN_FROM_ME Возврат от меня
 * @memberOf module:waybill#
 */
export enum WaybillType {
    INVOICE_FROM_ME = "INVOICE_FROM_ME",
    RETURN_TO_ME = "RETURN_TO_ME",
    INVOICE_TO_ME = "INVOICE_TO_ME",
    RETURN_FROM_ME = "RETURN_FROM_ME"

}

/**
 * Перечисление типов поставки.
 * @enum {string} UnitType
 * @property {string} PACKED Упакованная
 * @property {string} UNPACKED Неупакованная
 * @memberOf module:waybill#
 */
export enum UnitType {
    PACKED = "PACKED",
    UNPACKED = "UNPACKED"

}

/**
 * Перечисление статусов справки 2.
 * @enum {string} TtnInformF2RegStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @memberOf module:waybill#
 */
export enum TtnInformF2RegStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH"
}

/**
 * Тип подтверждения акта ТТН.
 * @enum {string} AcceptType
 * @property {string} ACCEPTED Принятие
 * @property {string} DIFFERENCES Есть расхождения
 * @property {string} REJECTED Отказ
 * @memberOf module:waybillAct#
 */
export enum AcceptType {
    ACCEPTED = "ACCEPTED",
    DIFFERENCES = "DIFFERENCES",
    REJECTED = "REJECTED"
}

/**
 * Тип акта расхождения к ТТН.
 * @enum {string} WaybillActType
 * @property {string} FULL Полный
 * @property {string} PART частичный
 * @memberOf module:waybillAct#
 */
export enum WaybillActType {
    FULL = "FULL",
    PART = "PART"
}

/**
 * Статус акта разногласия для ТТН.
 * @enum {string} WaybillActStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:waybillAct#
 */
export enum WaybillActStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED"
}

/**
 * Причина постановки на баланс.
 * @enum {string} ActChargeOnShopType
 * @property {string} RESORTING Пересортица
 * @property {string} OVERAGE Излишки
 * @property {string} RECEIVED_BEFORE_01_01_2016 Продукция, полученная до 01.01.2016
 * @memberOf module:actChargeOn#
 */
export enum ActChargeOnShopType {
    RESORTING = "RESORTING",
    OVERAGE = "OVERAGE",
    RECEIVED_BEFORE_01_01_2016 = "RECEIVED_BEFORE_01_01_2016"
}

/**
 * Статус постановки на баланс.
 * @enum {string} ActChargeOnShopStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:actChargeOn#
 */
export enum ActChargeOnShopStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED"
}

/**
 * Причина списания.
 * @enum {string} ActWriteOffType
 * @property {string} RESORTING Пересортица
 * @property {string} OVERAGE Излишки
 * @property {string} RECEIVED_BEFORE_01_01_2016 Продукция, полученная до 01.01.2016
 * @memberOf module:actWriteOff#
 */
export enum ActWriteOffType {
    RESORTING = "RESORTING",
    OVERAGE = "OVERAGE",
    RECEIVED_BEFORE_01_01_2016 = "RECEIVED_BEFORE_01_01_2016"
}

/**
 * Статус списания.
 * @enum {string} ActWriteOffStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:actWriteOff#
 */
export enum ActWriteOffStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED"
}

/**
 * Тип заключения фиксации.
 * @enum {string} ConclusionType
 * @property {string} ACCEPTED
 * @property {string} REJECTED
 * @memberOf module:ticket#
 */
export enum ConclusionType {
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}

/**
 * Статус тикета подтверждения.
 * @enum {string} ConfirmTicketStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:ticket#
 */
export enum ConfirmTicketStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED",
}

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
export enum DocType {
    WAY_BILL = "WAY_BILL",
    WAY_BILL_ACT = "WAY_BILL_ACT",
    TRANSFER_TO_SHOP = "TRANSFER_TO_SHOP",
    TRANSFER_FROM_SHOP = "TRANSFER_FROM_SHOP",
    CONFIRM_TICKET = "CONFIRM_TICKET",
    QUERY_AP = "QUERY_AP",
    QUERY_RESTS = "QUERY_RESTS",
    QUERY_RESTS_SHOP = "QUERY_RESTS_SHOP",
    QUERY_CLIENTS = "QUERY_CLIENTS",
    QUERY_RESEND_DOC = "QUERY_RESEND_DOC",
    ACT_WRITE_OFF = "ACT_WRITE_OFF",
    INFO_VERSION_TTN = "INFO_VERSION_TTN",
    ACT_CHARGE_ON_SHOP = "ACT_CHARGE_ON_SHOP",
    ACT_WRITE_OFF_SHOP = "ACT_WRITE_OFF_SHOP"
}

/**
 * Тип результата выполнения операции.
 * @enum {string} OperationResult
 * @property {string} ACCEPTED
 * @property {string} REJECTED
 * @memberOf module:ticket#
 */
export enum OperationResult {
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}

/**
 * Статус перемещения.
 * @enum {string} TransferStatus
 * @property {string} NOT_PROCESSED
 * @property {string} FINISH
 * @property {string} REJECTED
 * @memberOf module:transfer#
 */
export enum TransferStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED",
}