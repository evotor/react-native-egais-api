import {InnerFilterBuilder, InnerSortOrder, SortOrder} from "abstract-query-builder"
import {ProductType} from "../../model/types"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class ProductInfoInnerSortOrder<S extends SortOrder<S>> extends InnerSortOrder<S> {

    /**
     * Тип продукции (АП | ССП | ССНП | Спирт).
     */
    type = this.addFieldSorter("TYPE");

    /**
     * Наименование продукции полное (в верхнем регистре).
     */
    fullName = this.addFieldSorter("FULL_NAME_UPPER_CASE");

    /**
     * Наименование продукции краткое (в верхнем регистре).
     */
    shortName = this.addFieldSorter("SHORT_NAME_UPPER_CASE");

    /**
     * Код продукции согласно ЕГАИС.
     */
    alcCode = this.addFieldSorter("ALC_CODE");

    /**
     * Емкость упаковки продукции согласно ЕГАИС.
     */
    capacity = this.addFieldSorter("CAPACITY");

    /**
     * Содержание этилового спирта, %.
     */
    alcVolume = this.addFieldSorter("ALC_VOLUME");

    /**
     * Производитель.
     */
    producerId = this.addFieldSorter("PRODUCER_CLIENT_REG_ID");

    /**
     * Импортер.
     */
    importerId = this.addFieldSorter("IMPORTER_CLIENT_REG_ID");

    /**
     * Код вида продукции.
     */
    productVCode = this.addFieldSorter("PRODUCT_V_CODE");

}

/**
 * Класс для фильтрации информации о продукции
 */
export class ProductInfoFilter<Q, S extends SortOrder<S>, R> extends InnerFilterBuilder<Q, S, R> {

    /**
     * Тип продукции (АП | ССП | ССНП | Спирт).
     */
    type = this.addFieldFilter<ProductType>("TYPE");

    /**
     * Наименование продукции полное (в верхнем регистре).
     */
    fullName = this.addFieldFilter<(string | null)>("FULL_NAME_UPPER_CASE");

    /**
     * Наименование продукции краткое (в верхнем регистре).
     */
    shortName = this.addFieldFilter<(string | null)>("SHORT_NAME_UPPER_CASE");

    /**
     * Код продукции согласно ЕГАИС.
     */
    alcCode = this.addFieldFilter<string>("ALC_CODE");

    /**
     * Емкость упаковки продукции согласно ЕГАИС.
     */
    capacity = this.addFieldFilter<(string | null)>("CAPACITY");

    /**
     * Содержание этилового спирта, %.
     */
    alcVolume = this.addFieldFilter<(string | null)>("ALC_VOLUME");

    /**
     * Производитель.
     */
    producerId = this.addFieldFilter<(string | null)>("PRODUCER_CLIENT_REG_ID");

    /**
     * Импортер.
     */
    importerId = this.addFieldFilter<(string | null)>("IMPORTER_CLIENT_REG_ID");

    /**
     * Код вида продукции.
     */
    productVCode = this.addFieldFilter<(string | null)>("PRODUCT_V_CODE");

}