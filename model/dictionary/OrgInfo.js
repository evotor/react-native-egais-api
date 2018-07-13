/**
 * Классы и типы для работы с информацией об организациях.
 * @module module:orgInfo
 */
import {OrgType, WaybillTypeUsed} from "../types"

/**
 * @class module:orgInfo.OrgInfoAddress
 * @classdesc Фактический адрес произвольной формы.
 * @param {?string} country Страна
 * @param {?string} index Индекс
 * @param {?string} regionCode Код региона
 * @param {?string} area Область
 * @param {?string} city Город
 * @param {?string} place Район
 * @param {?string} street Улица
 * @param {?string} house Дом
 * @param {?string} building Строение
 * @param {?string} liter Литера
 * @param {?string} description Описание
 */
export class OrgInfoAddress {
    constructor(country: (string | null),
                index: (string | null),
                regionCode: (string | null),
                area: (string | null),
                city: (string | null),
                place: (string | null),
                street: (string | null),
                house: (string | null),
                building: (string | null),
                liter: (string | null),
                description: (string | null)) {
        this.index = index;
        this.regionCode = regionCode;
        this.area = area;
        this.city = city;
        this.place = place;
        this.street = street;
        this.house = house;
        this.building = building;
        this.liter = liter;
        this.description = description;
    }
}

/**
 * @class module:orgInfo.OrgInfo
 * @classdesc Информация об организации.
 * @param {?module:orgInfo#OrgType} type
 * @param {string} clientRegId Код организации
 * @param {string} fullName Наименование организации полное
 * @param {?string} shortName Наименование организации краткое
 * @param {?string} inn ИНН
 * @param {?string} kpp КПП
 * @param {?string} unp УНП для респ.Беларусь
 * @param {?string} rnn РНН(БИН/ИИН) для респ.Казахстан
 * @param {?module:orgInfo.OrgInfoAddress} address Фактический адрес
 * @param {?string} state Статус: действующая или удалена
 * @param {?module:orgInfo#WaybillTypeUsed} versionWB Версия схемы накладной принимаемая организацией
 */
export default class OrgInfo {
    constructor(type: (OrgType | null),
                clientRegId: string,
                fullName: string,
                shortName: (string | null),
                inn: (string | null),
                kpp: (string | null),
                unp: (string | null),
                rnn: (string | null),
                address: (OrgInfoAddress | null),
                state: (string | null),
                waybillVersion: (WaybillTypeUsed | null)) {
        this.type = type;
        this.clientRegId = clientRegId;
        this.fullName = fullName;
        this.shortName = shortName;
        this.inn = inn;
        this.kpp = kpp;
        this.unp = unp;
        this.rnn = rnn;
        this.address = address;
        this.state = state;
        this.waybillVersion = waybillVersion;
    }
}