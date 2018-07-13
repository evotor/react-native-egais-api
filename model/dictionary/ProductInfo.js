/**
 * Классы и типы для работы с информацией о продукции.
 * @module module:productInfo
 */
import {ProductType} from "../types"

/**
 * @class module:productInfo.ProductInfo
 * @classdesc Информация о продукции.
 * @param {module:productInfo#ProductType} type Тип продукции (АП | ССП | ССНП | Спирт) Если не указано, то АП
 * @param {?string} fullName Наименование продукции полное
 * @param {?string} shortName Наименование продукции краткое
 * @param {string} alcCode Код продукции согласно ЕГАИС
 * @param {?string} capacity Емкость упаковки продукции согласно ЕГАИС
 * @param {?string} alcVolume Содержание этилового спирта, %
 * @param {?string} producerId Производитель
 * @param {?string} importerId Импортер
 * @param {?string} productVCode Код вида продукции
 */
export default class ProductInfo {
    constructor(type: ProductType,
                fullName: (string | null),
                shortName: (string | null),
                alcCode: string,
                capacity: (string | null),
                alcVolume: (string | null),
                producerId: (string | null),
                importerId: (string | null),
                productVCode: (string | null)) {
        this.type = type;
        this.fullName = fullName;
        this.shortName = shortName;
        this.alcCode = alcCode;
        this.capacity = capacity;
        this.alcVolume = alcVolume;
        this.producerId = producerId;
        this.importerId = importerId;
        this.productVCode = productVCode;
    }

    static createDescription(productInfo?: ProductInfo): string {
        if (!productInfo) {
            return "-";
        }
        const shortName = productInfo.shortName ? productInfo.shortName.trim() : null;
        const b = productInfo.fullName ? productInfo.fullName.trim() === "" : null;
        if (shortName) {
            return shortName;
        } else if (b !== null && !b) {
            return productInfo.fullName;
        } else {
            return "-"
        }
    }

}