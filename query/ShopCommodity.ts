import {FilterBuilder, SortOrder} from "abstract-query-builder"
import {ShopCommodity} from '../model/dictionary/ProductRest'
import defaultExecutor from "./defaultExecutor"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class ShopCommoditySortOrder extends SortOrder<ShopCommoditySortOrder> {

    /**
     * Количество
     */
    quantity = this.addFieldSorter("QUANTITY");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<ShopCommoditySortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение информации о магазинных товарах
 */
export class ShopCommodityQuery extends FilterBuilder<ShopCommodityQuery, ShopCommoditySortOrder, ShopCommodity> {

    /**
     * Количество
     */
    quantity = this.addFieldFilter<number>("QUANTITY", (v) => v * 1000);

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<ShopCommodityQuery, ShopCommoditySortOrder, ShopCommodity>());

    constructor() {
        super(() => this, defaultExecutor('ShopCommodity', ShopCommodity.prototype));
    }

}