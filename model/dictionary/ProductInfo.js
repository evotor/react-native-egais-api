import {ProductType} from "../types"

/**
 * Информация о продукции
 *
 * @property type Тип продукции (АП | ССП | ССНП | Спирт) Если не указано, то АП
 * @property fullName Наименование продукции полное
 * @property shortName Наименование продукции краткое
 * @property alcCode Код продукции согласно ЕГАИС
 * @property capacity Емкость упаковки продукции согласно ЕГАИС
 * @property alcVolume Содержание этилового спирта, %
 * @property producerId Производитель
 * @property importerId Импортер
 * @property productVCode Код вида продукции.
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

    _DASH = "-";

    createDescription(productInfo?: ProductInfo): string {
        if (!productInfo) {
            return this._DASH;
        }
        const shortName = productInfo.shortName ? productInfo.shortName.trim() : null;
        const b = productInfo.fullName ? productInfo.fullName.trim() === "" : null;
        if (shortName) {
            return shortName;
        } else if (b !== null && !b) {
            return productInfo.fullName;
        } else {
            return this._DASH;
        }
    }

}