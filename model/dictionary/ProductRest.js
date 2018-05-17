import ProductInfo from "./ProductInfo"

/**
 * Остатки продукции на складе и магазине с количествами
 * @property productInfo Информация о продукции
 * @property stockQuantity Количество продукции на складе
 * @property shopQuantity Количество продукции в торговом зале
 */
export default class ProductRest {
    constructor(productInfo: ProductInfo,
                stockQuantity: number,
                shopQuantity: number,
                totalQuantity: number) {
        this.productInfo = productInfo;
        this.stockQuantity = stockQuantity;
        this.shopQuantity = shopQuantity;
        this.totalQuantity = totalQuantity;
    }
}

/**
 *  Позиция на остатках в магазине
 *
 * @property quantity Количество
 * @property productInfo Информация о продукции
 */
export class ShopCommodity {
    constructor(quantity: number,
                productInfo: ProductInfo) {
        this.quantity = quantity;
        this.productInfo = productInfo;
    }
}

/**
 * Позиция на остатках на складе
 *
 * @property informF1RegId Регистрационный номер раздела справки 1
 * @property informF2RegId Регистрационный номер раздела справки 2
 * @property quantity Количество
 * @property productInfo Информация о продукции
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