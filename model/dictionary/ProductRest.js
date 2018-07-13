/**
 * Классы и типы для работы с информацией о товарных остатках.
 * @module module:productRest
 */
import ProductInfo from "./ProductInfo"

/**
 * @class module:productRest.ProductRest
 * @classdesc Остатки продукции на складе и магазине с количествами.
 * @param {module:productInfo.ProductInfo} productInfo Информация о продукции
 * @param {number} stockQuantity Количество продукции на складе
 * @param {number} shopQuantity Количество продукции в торговом зале
 */
export default class ProductRest {
    constructor(productInfo: ProductInfo,
                stockQuantity: number,
                shopQuantity: number) {
        this.productInfo = productInfo;
        this.stockQuantity = stockQuantity;
        this.shopQuantity = shopQuantity;
    }
}

/**
 * @class module:productRest.ShopCommodity
 * @classdesc Позиция на остатках в магазине.
 * @param {number} quantity Количество
 * @param {module:productInfo.ProductInfo} productInfo Информация о продукции
 */
export class ShopCommodity {
    constructor(quantity: number,
                productInfo: ProductInfo) {
        this.quantity = quantity;
        this.productInfo = productInfo;
    }
}

/**
 *
 * @class module:productRest.StockCommodity
 * @classdesc Позиция на остатках на складе.
 * @param {string} informF1RegId Регистрационный номер раздела справки 1
 * @param {string} informF2RegId Регистрационный номер раздела справки 2
 * @param {number} quantity Количество
 * @param {module:productInfo.ProductInfo} productInfo Информация о продукции
 */
export class StockCommodity {
    constructor(informF1RegId: string,
                informF2RegId: string,
                quantity: number,
                productInfo: ProductInfo) {
        this.informF1RegId = informF1RegId;
        this.informF2RegId = informF2RegId;
        this.quantity = quantity;
        this.productInfo = productInfo;
    }
}