import {FilterBuilder, SortOrder} from "abstract-query-builder"
import OrgInfo, {OrgInfoAddress} from "../model/dictionary/OrgInfo"
import {OrgType, WaybillTypeUsed} from "../model/types"
import executor from "./executor"
import {OrgInfoAddressFilter, OrgInfoAddressSortOrder} from "./inner/OrgInfoAddress"

/**
 * @class module:orgInfo.OrgInfoSortOrder
 * @classdesc Класс для сортировки элементов в результате запроса.
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} type Тип организации (Юридическое лицо/Индивидуальный предприниматель/Иностранец (исключая таможенный союз)/Таможенный союз)
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} clientRegId Код организации
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} fullName Наименование организации полное (в верхнем регистре)
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} shortName Наименование организации краткое (в верхнем регистре)
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} inn ИНН
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} kpp КПП
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} unp УНП для респ.Беларусь
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} rnn РНН(БИН/ИИН) для респ.Казахстан
 * @property {module:orgInfo.OrgInfoAddressSortOrder<module:orgInfo.OrgInfoSortOrder>} address Фактический адрес
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} state Статус: действующая или удалена
 * @property {FieldSorter<module:orgInfo.OrgInfoSortOrder>} waybillVersion Версия протокола для накладных: 1, 2 или 3
 */
export class OrgInfoSortOrder extends SortOrder<OrgInfoSortOrder> {

    type = this.addFieldSorter("TYPE");
    clientRegId = this.addFieldSorter("CLIENT_REG_ID");
    fullName = this.addFieldSorter("FULL_NAME_UPPER_CASE");
    shortName = this.addFieldSorter("SHORT_NAME_UPPER_CASE");
    inn = this.addFieldSorter("INN");
    kpp = this.addFieldSorter("KPP");
    unp = this.addFieldSorter("UNP");
    rnn = this.addFieldSorter("RNN");
    address = this.addInnerSortOrder(new OrgInfoAddressSortOrder<OrgInfoSortOrder>());
    state = this.addFieldSorter("STATE");
    waybillVersion = this.addFieldSorter("VERSION_WB");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:orgInfo.OrgInfoQuery
 * @classdesc Класс для формирования запроса на информацию об организациях.
 * @property {FieldFilter<module:orgInfo#OrgType, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} type Тип организации (Юридическое лицо/Индивидуальный предприниматель/Иностранец (исключая таможенный союз)/Таможенный союз)
 * @property {FieldFilter<string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} clientRegId Код организации
 * @property {FieldFilter<string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} fullName Наименование организации полное (в верхнем регистре)
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} shortName Наименование организации краткое (в верхнем регистре)
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} inn ИНН
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} kpp КПП
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} unp УНП для респ.Беларусь
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} rnn РНН(БИН/ИИН) для респ.Казахстан
 * @property {module:orgInfo.OrgInfoAddressFilter<module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} address Фактический адрес
 * @property {FieldFilter<?string, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} state Статус: действующая или удалена
 * @property {FieldFilter<?module:orgInfo#WaybillTypeUsed, module:orgInfo.OrgInfoQuery, module:orgInfo.OrgInfoSortOrder, module:orgInfo.OrgInfo>} waybillVersion Версия протокола для накладных: 1, 2 или 3
 */
export class OrgInfoQuery extends FilterBuilder<OrgInfoQuery, OrgInfoSortOrder, OrgInfo> {

    type = this.addFieldFilter<OrgType>("TYPE");
    clientRegId = this.addFieldFilter<string>("CLIENT_REG_ID");
    fullName = this.addFieldFilter<string>("FULL_NAME_UPPER_CASE");
    shortName = this.addFieldFilter<(string | null)>("SHORT_NAME_UPPER_CASE");
    inn = this.addFieldFilter<(string | null)>("INN");
    kpp = this.addFieldFilter<(string | null)>("KPP");
    unp = this.addFieldFilter<(string | null)>("UNP");
    rnn = this.addFieldFilter<(string | null)>("RNN");
    address = this.addInnerFilterBuilder(new OrgInfoAddressFilter<OrgInfoQuery, OrgInfoSortOrder, OrgInfo>());
    state = this.addFieldFilter<(string | null)>("STATE");
    waybillVersion = this.addFieldFilter<(WaybillTypeUsed | null)>("VERSION_WB");

    constructor() {
        super(() => this, executor('OrgInfo', OrgInfo.prototype, {address: OrgInfoAddress.prototype}));
    }

}