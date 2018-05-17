import {InnerFilterBuilder, InnerSortOrder, SortOrder} from "abstract-query-builder"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class OrgInfoAddressSortOrder<S extends SortOrder<S>> extends InnerSortOrder<S> {

    /**
     * Страна
     */
    country = this.addFieldSorter("ADDRESS_COUNTRY");

    /**
     * Индекс
     */
    index = this.addFieldSorter("ADDRESS_INDEX");

    /**
     * Код региона
     */
    regionCode = this.addFieldSorter("ADDRESS_REGION_CODE");

    /**
     * Область
     */
    area = this.addFieldSorter("ADDRESS_AREA");

    /**
     * Город
     */
    city = this.addFieldSorter("ADDRESS_CITY");

    /**
     * Район
     */
    place = this.addFieldSorter("ADDRESS_PLACE");

    /**
     * Улица
     */
    street = this.addFieldSorter("ADDRESS_STREET");

    /**
     * Дом
     */
    house = this.addFieldSorter("ADDRESS_HOUSE");

    /**
     * Строение
     */
    building = this.addFieldSorter("ADDRESS_BUILDING");

    /**
     * Литера
     */
    liter = this.addFieldSorter("ADDRESS_LITER");

    /**
     * Описание
     */
    description = this.addFieldSorter("ADDRESS_DESCRIPTION");

}

/**
 * Класс для фильтрации информации о товаре
 */
export class OrgInfoAddressFilter<Q, S extends SortOrder<S>, R> extends InnerFilterBuilder<Q, S, R> {


    /**
     * Страна
     */
    country = this.addFieldFilter<(string | null)>("ADDRESS_COUNTRY");

    /**
     * Индекс
     */
    index = this.addFieldFilter<(string | null)>("ADDRESS_INDEX");

    /**
     * Код региона
     */
    regionCode = this.addFieldFilter<(string | null)>("ADDRESS_REGION_CODE");

    /**
     * Область
     */
    area = this.addFieldFilter<(string | null)>("ADDRESS_AREA");

    /**
     * Город
     */
    city = this.addFieldFilter<(string | null)>("ADDRESS_CITY");

    /**
     * Район
     */
    place = this.addFieldFilter<(string | null)>("ADDRESS_PLACE");

    /**
     * Улица
     */
    street = this.addFieldFilter<(string | null)>("ADDRESS_STREET");

    /**
     * Дом
     */
    house = this.addFieldFilter<(string | null)>("ADDRESS_HOUSE");

    /**
     * Строение
     */
    building = this.addFieldFilter<(string | null)>("ADDRESS_BUILDING");

    /**
     * Литера
     */
    liter = this.addFieldFilter<(string | null)>("ADDRESS_LITER");

    /**
     * Описание
     */
    description = this.addFieldFilter<(string | null)>("ADDRESS_DESCRIPTION");

}

