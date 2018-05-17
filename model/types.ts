export enum Version {
    V1 = "V1",
    V2 = "V2",
    V3 = "V3"
}

/**
 * Тип организации
 */
export enum OrgType {

    /**
     * Юридическое лицо
     */
    UL = "UL",

    /**
     * Индивидуальный предприниматель
     */
    FL = "FL",

    /**
     * Иностранец (исключая таможенный союз)
     */
    FO = "FO",

    /**
     * Таможенный союз
     */
    TS = "TS"

}

/**
 * Тип продукции
 */
export enum ProductType {

    /**
     * Алкогольная продукция (АП)
     */
    AP = "AP",

    /**
     * Спиртосодержащая продукция (ССП)
     */
    SSP = "SSP",

    /**
     * ССНП
     */
    SSNP = "SSNP",

    /**
     * Спирт
     */
    SPIRT = "SPIRT"

}

/**
 * Поддерживаемая клиентом версия формата ТТН
 */
export enum WaybillTypeUsed {

    /**
     * Версия 1
     */
    WAYBILL_V1 = "WAYBILL_V1",

    /**
     * Версия 2
     */
    WAYBILL_V2 = "WAYBILL_V2",

    /**
     * Версия 3
     */
    WAYBILL_V3 = "WAYBILL_V3"

}

/**
 * Направление документа в представлении УТМ (входящий/исходящий)
 */
export enum Direction {
    IN = "IN",
    OUT = "OUT"
}

export enum WaybillResolution {
    UNKNOWN = "UNKNOWN",
    REJECTED = "REJECTED",
    ACCEPTED = "ACCEPTED"
}

export enum WaybillStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    WAIT_UTM_ANSWER = "WAIT_UTM_ANSWER",
    NOT_CONFIRMED = "NOT_CONFIRMED",
    ERROR = "ERROR",
    FINISH = "FINISH"
}

/**
 * Тип товарно-транспортной накладной (ТТН)
 */
export enum WaybillType {

    /**
     * расход
     */
    INVOICE_FROM_ME = "INVOICE_FROM_ME",

    /**
     * возврат мне
     */
    RETURN_TO_ME = "RETURN_TO_ME",

    /**
     * приход
     */
    INVOICE_TO_ME = "INVOICE_TO_ME",

    /**
     * возврат от меня
     */
    RETURN_FROM_ME = "RETURN_FROM_ME"

}

/**
 * Тип поставки
 */
export enum UnitType {

    /**
     * упакованная
     */
    PACKED = "PACKED",

    /**
     * неупакованная
     */
    UNPACKED = "UNPACKED"

}

export enum TtnInformF2RegStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH"
}

export enum AcceptType {
    ACCEPTED = "ACCEPTED",
    DIFFERENCES = "DIFFERENCES",
    REJECTED = "REJECTED"
}

export enum WaybillActType {
    FULL = "FULL",
    PART = "PART"
}

export enum WaybillActStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED"
}

export enum ActChargeOnShopType {
    RESORTING = "RESORTING",
    OVERAGE = "OVERAGE",
    RECEIVED_BEFORE_01_01_2016 = "RECEIVED_BEFORE_01_01_2016"
}

export enum ActChargeOnShopStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED"
}

export enum ActWriteOffType {
    RESORTING = "RESORTING",
    OVERAGE = "OVERAGE",
    RECEIVED_BEFORE_01_01_2016 = "RECEIVED_BEFORE_01_01_2016"
}

export enum ActWriteOffStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED"
}

/**
 * Тип заключения фиксации
 */
export enum ConclusionType {
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}

/**
 * Статус тикета подтверждения
 */
export enum ConfirmTicketStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED",
}

/**
 * Тип исходного документа
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
 * Тип результата выполнения операции
 */
export enum OperationResult {
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}

export enum TransferStatus {
    NOT_PROCESSED = "NOT_PROCESSED",
    FINISH = "FINISH",
    REJECTED = "REJECTED",
}