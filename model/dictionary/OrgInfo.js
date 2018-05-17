import {OrgType, WaybillTypeUsed} from "../types"

/**
 * Фактический адрес произвольной формы
 *
 * @property country Страна
 * @property index Индекс
 * @property regionCode Код региона
 * @property area Область
 * @property city Город
 * @property place Район
 * @property street Улица
 * @property house Дом
 * @property building Строение
 * @property liter Литера
 * @property description Описание
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
 *  Информация об организации
 *
 * @property type
 * @property clientRegId Код организации
 * @property fullName Наименование организации полное
 * @property shortName Наименование организации краткое
 * @property inn ИНН
 * @property kpp КПП
 * @property unp УНП для респ.Беларусь
 * @property rnn РНН(БИН/ИИН) для респ.Казахстан
 * @property address Фактический адрес
 * @param state Статус: действующая или удалена
 * @param versionWB Версия схемы накладной принимаемая организацией
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