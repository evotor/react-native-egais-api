import {FilterBuilder, SortOrder} from "abstract-query-builder"
import {StockCommodity} from '../model/dictionary/ProductRest'
import defaultExecutor from "./defaultExecutor"
import {ProductInfoFilter, ProductInfoInnerSortOrder} from "./inner/ProductInfo"

/**
 * Класс для сортировки элементов в результе запроса
 */
export class StockCommoditySortOrder extends SortOrder<StockCommoditySortOrder> {

    /**
     * Регистрационный номер раздела справки 1
     */
    informF1RegId = this.addFieldSorter("INFORM_F1_REG_ID");

    /**
     * Регистрационный номер раздела справки 2
     */
    informF2RegId = this.addFieldSorter("INFORM_F2_REG_ID");

    /**
     * Количество
     */
    quantity = this.addFieldSorter("QUANTITY");

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerSortOrder(new ProductInfoInnerSortOrder<StockCommoditySortOrder>());

    constructor() {
        super(() => this);
    }

}

/**
 * Класс для формирования запроса на получение информации о биржевых товарах
 */
export class StockCommodityQuery extends FilterBuilder<StockCommodityQuery, StockCommoditySortOrder, StockCommodity> {

    /**
     * Регистрационный номер раздела справки 1
     */
    informF1RegId = this.addFieldFilter<string>("INFORM_F1_REG_ID");

    /**
     * Регистрационный номер раздела справки 2
     */
    informF2RegId = this.addFieldFilter<string>("INFORM_F2_REG_ID");

    /**
     * Количество
     */
    quantity = this.addFieldFilter<number>("QUANTITY", (v) => v * 1000);

    /**
     * Информация о продукции
     */
    productInfo = this.addInnerFilterBuilder(new ProductInfoFilter<StockCommodityQuery, StockCommoditySortOrder, StockCommodity>());

    constructor() {
        super(() => this, defaultExecutor('StockCommodity', StockCommodity.prototype));
    }

}