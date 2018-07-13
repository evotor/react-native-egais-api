import {TtnInformF2RegStatus} from "../types";

/**
 * @class module:waybill.TtnInformF2Reg
 * @classdesc Справка 2 Информация о предыдущих отгрузках.
 * @param {string} uuid уникальный идентификатор
 * @param {?string} docOwner кто подает документы
 * @param {?string} identity ИД накладной(клиентский, исходной накладной, если заполнялся)
 * @param {string} wbRegId ИД накладной в системе (присвоенный)
 * @param {?string} egaisFixNumber Номер фиксации накладной(отгрузки) в ЕГАИС
 * @param {?string} egaisFixDate Дата составления накладной(отгрузки) в ЕГАИС
 * @param {?string} wbNumber Номер накладной
 * @param {?Date} wbDate Дата составления накладной
 * @param {?string} shipperId Грузоотправитель
 * @param {?string} consigneeId Грузополучатель
 * @param {?string} supplierId Поставщик
 * @param {?string} wayBillId Уникальный идентификатор ТТН
 * @param {?string} status Статус
 */
export default class TtnInformF2Reg {
    constructor(uuid: string,
                docOwner: string,
                identity: (string | null),
                wbRegId: string,
                egaisFixNumber: (string | null),
                egaisFixDate: (Date | null),
                wbNumber: (string | null),
                wbDate: (Date | null),
                shipperId: (string | null),
                consigneeId: (string | null),
                supplierId: (string | null),
                waybillId: (string | null),
                status: TtnInformF2RegStatus) {
        this.uuid = uuid;
        this.docOwner = docOwner;
        this.identity = identity;
        this.wbRegId = wbRegId;
        this.egaisFixNumber = egaisFixNumber;
        this.egaisFixDate = egaisFixDate;
        this.wbNumber = wbNumber;
        this.wbDate = wbDate;
        this.shipperId = shipperId;
        this.consigneeId = consigneeId;
        this.supplierId = supplierId;
        this.waybillId = waybillId;
        this.status = status;
    }
}

/**
 * @class module:waybill.TtnInformF2RegPosition
 * @classdesc Позиция в Справке 2 Информации о предыдущих отгрузках.
 * @param {string} uuid Уникальный идентификатор позиции
 * @param {string} ttnInformF2RegUuid Уникальный идентификатор справки Б
 * @param {string} identity Идентификатор позиции внутри накладной
 * @param {string} informF2RegId Регистрационный номер записи справки Б
 */
export class TtnInformF2RegPosition {
    constructor(uuid: string,
                ttnInformF2RegUuid: string,
                identity: string,
                informF2RegId: string) {
        this.uuid = uuid;
        this.ttnInformF2RegUuid = ttnInformF2RegUuid;
        this.identity = identity;
        this.informF2RegId = informF2RegId;
    }
}