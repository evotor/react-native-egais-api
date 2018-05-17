import {FilterBuilder, SortOrder} from "abstract-query-builder"
import OrgInfo, {OrgInfoAddress} from "../model/dictionary/OrgInfo"
import {OrgType, WaybillTypeUsed} from "../model/types"
import defaultExecutor from "./defaultExecutor"
import {OrgInfoAddressFilter, OrgInfoAddressSortOrder} from "./inner/OrgInfoAddress"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class OrgInfoSortOrder extends SortOrder<OrgInfoSortOrder> {

    /**
     * Тип организации (Юридическое лицо/Индивидуальный предприниматель/Иностранец (исключая таможенный союз)/Таможенный союз)
     */
    type = this.addFieldSorter("TYPE");

    /**
     * Код организации
     */
    clientRegId = this.addFieldSorter("CLIENT_REG_ID");

    /**
     * Наименование организации полное (в верхнем регистре)
     */
    fullName = this.addFieldSorter("FULL_NAME_UPPER_CASE");

    /**
     * Наименование организации краткое (в верхнем регистре)
     */
    shortName = this.addFieldSorter("SHORT_NAME_UPPER_CASE");

    /**
     * ИНН
     */
    inn = this.addFieldSorter("INN");

    /**
     * КПП
     */
    kpp = this.addFieldSorter("KPP");

    /**
     * УНП для респ.Беларусь
     */
    unp = this.addFieldSorter("UNP");

    /**
     * РНН(БИН/ИИН) для респ.Казахстан
     */
    rnn = this.addFieldSorter("RNN");

    /**
     * Фактический адрес
     */
    address = this.addInnerSortOrder(new OrgInfoAddressSortOrder<OrgInfoSortOrder>());

    /**
     * Статус: действующая или удалена
     */
    state = this.addFieldSorter("STATE");

    /**
     * Версия протокола для накладных: 1, 2 или 3
     */
    waybillVersion = this.addFieldSorter("VERSION_WB");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на информацию об организациях
 */
export class OrgInfoQuery extends FilterBuilder<OrgInfoQuery, OrgInfoSortOrder, OrgInfo> {

    /**
     * Тип организации (Юридическое лицо/Индивидуальный предприниматель/Иностранец (исключая таможенный союз)/Таможенный союз)
     */
    type = this.addFieldFilter<OrgType>("TYPE");

    /**
     * Код организации
     */
    clientRegId = this.addFieldFilter<string>("CLIENT_REG_ID");

    /**
     * Наименование организации полное (в верхнем регистре)
     */
    fullName = this.addFieldFilter<string>("FULL_NAME_UPPER_CASE");

    /**
     * Наименование организации краткое (в верхнем регистре)
     */
    shortName = this.addFieldFilter<(string | null)>("SHORT_NAME_UPPER_CASE");

    /**
     * ИНН
     */
    inn = this.addFieldFilter<(string | null)>("INN");

    /**
     * КПП
     */
    kpp = this.addFieldFilter<(string | null)>("KPP");

    /**
     * УНП для респ.Беларусь
     */
    unp = this.addFieldFilter<(string | null)>("UNP");

    /**
     * РНН(БИН/ИИН) для респ.Казахстан
     */
    rnn = this.addFieldFilter<(string | null)>("RNN");

    /**
     * Фактический адрес
     */
    address = this.addInnerFilterBuilder(new OrgInfoAddressFilter<OrgInfoQuery, OrgInfoSortOrder, OrgInfo>());

    /**
     * Статус: действующая или удалена
     */
    state = this.addFieldFilter<(string | null)>("STATE");

    /**
     * Версия протокола для накладных: 1, 2 или 3
     */
    waybillVersion = this.addFieldFilter<(WaybillTypeUsed | null)>("VERSION_WB");

    constructor() {
        super(() => this, defaultExecutor('OrgInfo', OrgInfo.prototype, {address: OrgInfoAddress.prototype}));
    }

}