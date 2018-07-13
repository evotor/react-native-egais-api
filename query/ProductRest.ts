import {FilterBuilder, SortOrder} from "abstract-query-builder"
import ProductRest, {ShopCommodity, StockCommodity} from '../model/dictionary/ProductRest'
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"
import {quantityConverter} from "./converters"
import executor from "./executor"

/**
 * @class module:productRest.ProductRestSortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:productRest.ProductRestSortOrder>} productInfo Информация о продукции
 * @property {FieldSorter<module:productRest.ProductRestSortOrder>} stockQuantity Количество продукции на складе
 * @property {FieldSorter<module:productRest.ProductRestSortOrder>} shopQuantity Количество продукции в торговом зале
 * @property {FieldSorter<module:productRest.ProductRestSortOrder>} totalQuantity Общее количество продукции
 */
export class ProductRestSortOrder extends SortOrder<ProductRestSortOrder> {

    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ProductRestSortOrder>());
    stockQuantity = this.addFieldSorter("STOCK_QUANTITY");
    shopQuantity = this.addFieldSorter("SHOP_QUANTITY");
    totalQuantity = this.addFieldSorter("TOTAL_QUANTITY");

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:productRest.ProductRestQuery
 * @classdesc Класс для формирования запроса на получение остатков продукции.
 * @property {module:productInfo.ProductInfoFilter<module:productRest.ProductRestQuery, module:productRest.ProductRestSortOrder, module:productRest.ProductRest>} productInfo Информация о продукции
 * @property {FieldFilter<number, module:productRest.ProductRestQuery, module:productRest.ProductRestSortOrder, module:productRest.ProductRest>} stockQuantity Количество продукции на складе
 * @property {FieldFilter<number, module:productRest.ProductRestQuery, module:productRest.ProductRestSortOrder, module:productRest.ProductRest>} shopQuantity Количество продукции в торговом зале
 * @property {FieldFilter<number, module:productRest.ProductRestQuery, module:productRest.ProductRestSortOrder, module:productRest.ProductRest>} totalQuantity Общее количество продукции
 */
export class ProductRestQuery extends FilterBuilder<ProductRestQuery, ProductRestSortOrder, ProductRest> {

    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ProductRestQuery, ProductRestSortOrder, ProductRest>());
    stockQuantity = this.addFieldFilter<number>("STOCK_QUANTITY", quantityConverter);
    shopQuantity = this.addFieldFilter<number>("SHOP_QUANTITY", quantityConverter);
    totalQuantity = this.addFieldFilter<number>("TOTAL_QUANTITY", quantityConverter);

    constructor() {
        super(() => this, executor('ProductRest', ProductRest.prototype));
    }

}

/**
 * @class module:productRest.ShopCommoditySortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:productRest.ShopCommoditySortOrder>} quantity Количество
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:productRest.ShopCommoditySortOrder>} productInfo Информация о продукции
 */
export class ShopCommoditySortOrder extends SortOrder<ShopCommoditySortOrder> {

    quantity = this.addFieldSorter("QUANTITY");
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ShopCommoditySortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:productRest.ShopCommodityQuery
 * @classdesc Класс для формирования запроса на получение информации о магазинных товарах.
 * @property {FieldFilter<number, module:productRest.ShopCommodityQuery, module:productRest.ShopCommoditySortOrder, module:productRest.ShopCommodity>} quantity Количество
 * @property {module:productInfo.ProductInfoFilter<module:productRest.ShopCommodityQuery, module:productRest.ShopCommoditySortOrder, module:productRest.ShopCommodity>} productInfo Информация о продукции
 */
export class ShopCommodityQuery extends FilterBuilder<ShopCommodityQuery, ShopCommoditySortOrder, ShopCommodity> {

    quantity = this.addFieldFilter<number>("QUANTITY", quantityConverter);
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ShopCommodityQuery, ShopCommoditySortOrder, ShopCommodity>());

    constructor() {
        super(() => this, executor('ShopCommodity', ShopCommodity.prototype));
    }

}

/**
 * @class module:productRest.StockCommoditySortOrder
 * @classdesc Класс для сортировки элементов в результе запроса.
 * @property {FieldSorter<module:productRest.StockCommoditySortOrder>} informF1RegId Регистрационный номер раздела справки 1
 * @property {FieldSorter<module:productRest.StockCommoditySortOrder>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldSorter<module:productRest.StockCommoditySortOrder>} quantity Количество
 * @property {module:productInfo.ProductInfoInnerSortOrder<module:productRest.StockCommoditySortOrder>} productInfo Информация о продукции
 */
export class StockCommoditySortOrder extends SortOrder<StockCommoditySortOrder> {

    informF1RegId = this.addFieldSorter("INFORM_F1_REG_ID");
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");
    quantity = this.addFieldSorter("QUANTITY");
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<StockCommoditySortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * @class module:productRest.StockCommodityQuery
 * @classdesc Класс для формирования запроса на получение информации о биржевых товарах.
 * @property {FieldFilter<string, module:productRest.StockCommodityQuery, module:productRest.StockCommoditySortOrder, module:productRest.StockCommodity>} informF1RegId Регистрационный номер раздела справки 1
 * @property {FieldFilter<string, module:productRest.StockCommodityQuery, module:productRest.StockCommoditySortOrder, module:productRest.StockCommodity>} informF2RegId Регистрационный номер раздела справки 2
 * @property {FieldFilter<number, module:productRest.StockCommodityQuery, module:productRest.StockCommoditySortOrder, module:productRest.StockCommodity>} quantity Количество
 * @property {module:productInfo.ProductInfoFilter<module:productRest.StockCommodityQuery, module:productRest.StockCommoditySortOrder, module:productRest.StockCommodity>} productInfo Информация о продукции
 */
export class StockCommodityQuery extends FilterBuilder<StockCommodityQuery, StockCommoditySortOrder, StockCommodity> {

    informF1RegId = this.addFieldFilter<string>("INFORM_F1_REG_ID");
    informF2RegId = this.addFieldFilter<string>("INFORM_F2_REG_ID");
    quantity = this.addFieldFilter<number>("QUANTITY", quantityConverter);
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<StockCommodityQuery, StockCommoditySortOrder, StockCommodity>());

    constructor() {
        super(() => this, executor('StockCommodity', StockCommodity.prototype));
    }

}