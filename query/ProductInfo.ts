import {FilterBuilder, SortOrder} from "abstract-query-builder"
import ProductInfo from "../model/dictionary/ProductInfo"
import {ProductType} from "../model/types"
import executor from "./executor"

/**
 * @class module:productInfo.ProductInfoSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} type Тип продукции (АП | ССП | ССНП | Спирт)
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} fullName Наименование продукции полное (в верхнем регистре)
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} shortName Наименование продукции краткое (в верхнем регистре)
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} alcCode Код продукции согласно ЕГАИС
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} capacity Емкость упаковки продукции согласно ЕГАИС
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} alcVolume Содержание этилового спирта, %
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} producerId Производитель
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} importerId Импортер
 * @property {FieldSorter<module:productInfo.ProductInfoSortOrder>} productVCode Код вида продукции
 */
export class ProductInfoSortOrder extends SortOrder<ProductInfoSortOrder> {

    type = this.addFieldSorter("TYPE");
    fullName = this.addFieldSorter("FULL_NAME_UPPER_CASE");
    shortName = this.addFieldSorter("SHORT_NAME_UPPER_CASE");
    alcCode = this.addFieldSorter("ALC_CODE");
    capacity = this.addFieldSorter("CAPACITY");
    alcVolume = this.addFieldSorter("ALC_VOLUME");
    producerId = this.addFieldSorter("PRODUCER_CLIENT_REG_ID");
    importerId = this.addFieldSorter("IMPORTER_CLIENT_REG_ID");
    productVCode = this.addFieldSorter("PRODUCT_V_CODE");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:productInfo.ProductInfoQuery
 * @classdesc Класс для формирования запроса на получение информации о продукции.
 * @property {FieldFilter<module:productInfo#ProductType, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} type Тип продукции (АП | ССП | ССНП | Спирт)
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} fullName Наименование продукции полное (в верхнем регистре)
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} shortName Наименование продукции краткое (в верхнем регистре)
 * @property {FieldFilter<string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} alcCode Код продукции согласно ЕГАИС
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} capacity Емкость упаковки продукции согласно ЕГАИС
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} alcVolume Содержание этилового спирта, %
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} producerId Производитель
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} importerId Импортер
 * @property {FieldFilter<?string, module:productInfo.ProductInfoQuery, module:productInfo.ProductInfoSortOrder, module:productInfo.ProductInfo>} productVCode Код вида продукции
 */
export class ProductInfoQuery extends FilterBuilder<ProductInfoQuery, ProductInfoSortOrder, ProductInfo> {

    type = this.addFieldFilter<ProductType>("TYPE");
    fullName = this.addFieldFilter<(string | null)>("FULL_NAME_UPPER_CASE");
    shortName = this.addFieldFilter<(string | null)>("SHORT_NAME_UPPER_CASE");
    alcCode = this.addFieldFilter<string>("ALC_CODE");
    capacity = this.addFieldFilter<(string | null)>("CAPACITY");
    alcVolume = this.addFieldFilter<(string | null)>("ALC_VOLUME");
    producerId = this.addFieldFilter<(string | null)>("PRODUCER_CLIENT_REG_ID");
    importerId = this.addFieldFilter<(string | null)>("IMPORTER_CLIENT_REG_ID");
    productVCode = this.addFieldFilter<(string | null)>("PRODUCT_V_CODE");

    constructor() {
        super(() => this, executor('ProductInfo', ProductInfo.prototype));
    }

}