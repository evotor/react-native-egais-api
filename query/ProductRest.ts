import {FilterBuilder, SortOrder} from "abstract-query-builder"
import ProductRest from '../model/dictionary/ProductRest'
import {ProductInfoFilter} from "./inner/ProductInfo"
import {ProductInfoInnerSortOrder} from "./inner/ProductInfo"
import defaultExecutor from "./defaultExecutor"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class ProductRestSortOrder extends SortOrder<ProductRestSortOrder> {

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ProductRestSortOrder>());

    /**
     * Количество продукции на складе
     */
    stockQuantity = this.addFieldSorter("STOCK_QUANTITY");

    /**
     * Количество продукции в торговом зале
     */
    shopQuantity = this.addFieldSorter("SHOP_QUANTITY");

    /**
     * Общее количество продукции
     */
    totalQuantity = this.addFieldSorter("TOTAL_QUANTITY");

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение остатков продукции
 */
export class ProductRestQuery extends FilterBuilder<ProductRestQuery, ProductRestSortOrder, ProductRest> {

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ProductRestQuery, ProductRestSortOrder, ProductRest>());

    /**
     * Количество продукции на складе
     */
    stockQuantity = this.addFieldFilter<number>("STOCK_QUANTITY", (v) => v * 1000);

    /**
     * Количество продукции в торговом зале
     */
    shopQuantity = this.addFieldFilter<number>("SHOP_QUANTITY", (v) => v * 1000);

    /**
     * Общее количество продукции
     */
    totalQuantity = this.addFieldFilter<number>("TOTAL_QUANTITY", (v) => v * 1000);

    constructor() {
        super(() => this, defaultExecutor('ProductRest', ProductRest.prototype));
    }

}