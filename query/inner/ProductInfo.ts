import {InnerFilterBuilder, InnerSortOrder, SortOrder} from "abstract-query-builder"
import {ProductType} from "../../model/types"

/**
 * @class module:productInfo.ProductInfoInnerSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @template S Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<S>} type Тип продукции (АП | ССП | ССНП | Спирт)
 * @property {FieldSorter<S>} fullName Наименование продукции полное (в верхнем регистре)
 * @property {FieldSorter<S>} shortName Наименование продукции краткое (в верхнем регистре)
 * @property {FieldSorter<S>} alcCode Код продукции согласно ЕГАИС
 * @property {FieldSorter<S>} capacity Емкость упаковки продукции согласно ЕГАИС
 * @property {FieldSorter<S>} alcVolume Содержание этилового спирта, %
 * @property {FieldSorter<S>} producerId Производитель
 * @property {FieldSorter<S>} importerId Импортер
 * @property {FieldSorter<S>} productVCode Код вида продукции
 */
export class ProductInfoInnerSortOrder<S extends SortOrder<S>> extends InnerSortOrder<S> {

    type = this.addFieldSorter("TYPE");
    fullName = this.addFieldSorter("FULL_NAME_UPPER_CASE");
    shortName = this.addFieldSorter("SHORT_NAME_UPPER_CASE");
    alcCode = this.addFieldSorter("ALC_CODE");
    capacity = this.addFieldSorter("CAPACITY");
    alcVolume = this.addFieldSorter("ALC_VOLUME");
    producerId = this.addFieldSorter("PRODUCER_CLIENT_REG_ID");
    importerId = this.addFieldSorter("IMPORTER_CLIENT_REG_ID");
    productVCode = this.addFieldSorter("PRODUCT_V_CODE");

}

/**
 * @class module:productInfo.ProductInfoFilter
 * @classdesc Класс для фильтрации информации о продукции.
 * @template Q Класс для формирования запроса.
 * @template S Класс для сортировки элементов в результе запроса.
 * @template R Результат запроса.
 * @property {FieldFilter<module:productInfo#ProductType, Q, S, R>} type Тип продукции (АП | ССП | ССНП | Спирт)
 * @property {FieldFilter<?string, Q, S, R>} fullName Наименование продукции полное (в верхнем регистре)
 * @property {FieldFilter<?string, Q, S, R>} shortName Наименование продукции краткое (в верхнем регистре)
 * @property {FieldFilter<string, Q, S, R>} alcCode Код продукции согласно ЕГАИС
 * @property {FieldFilter<?string, Q, S, R>} capacity Емкость упаковки продукции согласно ЕГАИС
 * @property {FieldFilter<?string, Q, S, R>} alcVolume Содержание этилового спирта, %
 * @property {FieldFilter<?string, Q, S, R>} producerId Производитель
 * @property {FieldFilter<?string, Q, S, R>} importerId Импортер
 * @property {FieldFilter<?string, Q, S, R>} productVCode Код вида продукции
 */
export class ProductInfoFilter<Q, S extends SortOrder<S>, R> extends InnerFilterBuilder<Q, S, R> {

    type = this.addFieldFilter<ProductType>("TYPE");
    fullName = this.addFieldFilter<(string | null)>("FULL_NAME_UPPER_CASE");
    shortName = this.addFieldFilter<(string | null)>("SHORT_NAME_UPPER_CASE");
    alcCode = this.addFieldFilter<string>("ALC_CODE");
    capacity = this.addFieldFilter<(string | null)>("CAPACITY");
    alcVolume = this.addFieldFilter<(string | null)>("ALC_VOLUME");
    producerId = this.addFieldFilter<(string | null)>("PRODUCER_CLIENT_REG_ID");
    importerId = this.addFieldFilter<(string | null)>("IMPORTER_CLIENT_REG_ID");
    productVCode = this.addFieldFilter<(string | null)>("PRODUCT_V_CODE");

}