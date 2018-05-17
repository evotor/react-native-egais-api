import {TtnInformF2RegStatus} from "../types";

/**
 * Справка 2 Информация о предыдущих отгрузках
 *
 * @property uuid уникальный идентификатор
 * @property docOwner кто подает документы
 * @property identity ИД накладной(клиентский, исходной накладной, если заполнялся)
 * @property wbRegId ИД накладной в системе (присвоенный)
 * @property egaisFixNumber Номер фиксации накладной(отгрузки) в ЕГАИС
 * @property egaisFixDate Дата составления накладной(отгрузки) в ЕГАИС
 * @property wbNumber Номер накладной
 * @property wbDate Дата составления накладной
 * @property shipperId Грузоотправитель
 * @property consigneeId Грузополучатель
 * @property supplierId Поставщик
 * @property wayBillId уникальный идентификатор ТТН
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
 * Позиция в Справке 2 Информации о предыдущих отгрузках
 * @property uuid Уникальный идентификатор позиции
 * @property ttnInformF2RegUuid Уникальный идентификатор справки Б
 * @property identity Идентификатор позиции внутри накладной
 * @property informF2RegId Регистрационный номер записи справки Б
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