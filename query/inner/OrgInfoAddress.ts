import {InnerFilterBuilder, InnerSortOrder, SortOrder} from "abstract-query-builder"

/**
 * @class module:orgInfo.OrgInfoAddressSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @template S Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<S>} country Страна
 * @property {FieldSorter<S>} index Индекс
 * @property {FieldSorter<S>} regionCode Код региона
 * @property {FieldSorter<S>} area Область
 * @property {FieldSorter<S>} city Город
 * @property {FieldSorter<S>} place Район
 * @property {FieldSorter<S>} street Улица
 * @property {FieldSorter<S>} house Дом
 * @property {FieldSorter<S>} building Строение
 * @property {FieldSorter<S>} liter Литера
 * @property {FieldSorter<S>} description Описание
 */
export class OrgInfoAddressSortOrder<S extends SortOrder<S>> extends InnerSortOrder<S> {

    country = this.addFieldSorter("ADDRESS_COUNTRY");
    index = this.addFieldSorter("ADDRESS_INDEX");
    regionCode = this.addFieldSorter("ADDRESS_REGION_CODE");
    area = this.addFieldSorter("ADDRESS_AREA");
    city = this.addFieldSorter("ADDRESS_CITY");
    place = this.addFieldSorter("ADDRESS_PLACE");
    street = this.addFieldSorter("ADDRESS_STREET");
    house = this.addFieldSorter("ADDRESS_HOUSE");
    building = this.addFieldSorter("ADDRESS_BUILDING");
    liter = this.addFieldSorter("ADDRESS_LITER");
    description = this.addFieldSorter("ADDRESS_DESCRIPTION");

}

/**
 * @class module:orgInfo.OrgInfoAddressFilter
 * @classdesc Класс для фильтрации информации об адресе организации.
 * @template Q Класс для формирования запроса.
 * @template S Класс для сортировки элементов в результе запроса.
 * @template R Результат запроса.
 * @property {FieldFilter<?string, Q, S, R>} country Страна
 * @property {FieldFilter<?string, Q, S, R>} index Индекс
 * @property {FieldFilter<?string, Q, S, R>} regionCode Код региона
 * @property {FieldFilter<?string, Q, S, R>} area Область
 * @property {FieldFilter<?string, Q, S, R>} city Город
 * @property {FieldFilter<?string, Q, S, R>} place Район
 * @property {FieldFilter<?string, Q, S, R>} street Улица
 * @property {FieldFilter<?string, Q, S, R>} house Дом
 * @property {FieldFilter<?string, Q, S, R>} building Строение
 * @property {FieldFilter<?string, Q, S, R>} liter Литера
 * @property {FieldFilter<?string, Q, S, R>} description Описание
 */
export class OrgInfoAddressFilter<Q, S extends SortOrder<S>, R> extends InnerFilterBuilder<Q, S, R> {

    country = this.addFieldFilter<(string | null)>("ADDRESS_COUNTRY");
    index = this.addFieldFilter<(string | null)>("ADDRESS_INDEX");
    regionCode = this.addFieldFilter<(string | null)>("ADDRESS_REGION_CODE");
    area = this.addFieldFilter<(string | null)>("ADDRESS_AREA");
    city = this.addFieldFilter<(string | null)>("ADDRESS_CITY");
    place = this.addFieldFilter<(string | null)>("ADDRESS_PLACE");
    street = this.addFieldFilter<(string | null)>("ADDRESS_STREET");
    house = this.addFieldFilter<(string | null)>("ADDRESS_HOUSE");
    building = this.addFieldFilter<(string | null)>("ADDRESS_BUILDING");
    liter = this.addFieldFilter<(string | null)>("ADDRESS_LITER");
    description = this.addFieldFilter<(string | null)>("ADDRESS_DESCRIPTION");

}

