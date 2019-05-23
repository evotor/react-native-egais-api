/**
 * Классы и типы для работы для работы с товарно-транспортной накладной.
 * @module module:waybill
 */
import ProductInfo from '../dictionary/ProductInfo'
import {Direction, UnitType, Version, WaybillResolution, WaybillStatus, WaybillType} from "../types"

/**
 * @class module:waybill.Transport
 * @classdesc Транспорт.
 * @param {?string} type Тип перевозки
 * @param {?string} company Название компании перевозчика
 * @param {?string} car Автомобиль
 * @param {?string} trailer Прицеп
 * @param {?string} customer Заказчики
 * @param {?string} driver Водитель
 * @param {?string} loadPoint Место погрузки
 * @param {?string} unloadPoint Место разгрузки
 * @param {?string} redirect Перенаправление
 * @param {?string} forwarder Экспедитор
 */
export class Transport {
    constructor(type: (string | null),
                company: (string | null),
                car: (string | null),
                trailer: (string | null),
                customer: (string | null),
                driver: (string | null),
                loadPoint: (string | null),
                unloadPoint: (string | null),
                redirect: (string | null),
                forwarder: (string | null)) {
        this.type = type;
        this.company = company;
        this.car = car;
        this.trailer = trailer;
        this.customer = customer;
        this.driver = driver;
        this.loadPoint = loadPoint;
        this.unloadPoint = unloadPoint;
        this.redirect = redirect;
        this.forwarder = forwarder;
    }
}

/**
 * @class module:waybill.Waybill
 * @classdesc Товарно-транспортная накладная (ТТН).
 * @param {string} uuid уникальный идентификатор
 * @param {string} docOwner кто подает документы
 * @param {?string} identity Идентификатор накладной (клиентский, к заполнению необязательный)
 * @param {module:waybill#WaybillType} type Тип накладной
 * @param {?module:waybill#UnitType} unitType Тип поставки (упакованная или нет)
 * @param {string} number Номер документа
 * @param {Date} date Дата составления
 * @param {Date} shippingDate  Дата отгрузки продукции
 * @param {?module:waybill.Transport} transport Информация о транспорте
 * @param {string} shipperId Грузоотправитель
 * @param {string} consigneeId Грузополучатель
 * @param {?string} supplierId Поставщик
 * @param {?string} base Основание
 * @param {?string} note Заметки
 * @param {module:waybill#WaybillStatus} status Состояние накладной
 * @param {module:waybill#WaybillResolution} resolution резолюция по накладной
 * @param {?string} ttnInformF2RegUuid uuid формы 2 для накладной
 * @param {?string} wbRegId ИД накладной в системе (присвоенный)
 * @param {module:waybill#Direction} direction Направление документа в представлени УТМ (входящий/исходящий)
 * @param {Version} version Версия протокола ЕГАИС, по которому отправлена накладная
 */
export default class Waybill {
    constructor(uuid: string,
                docOwner: string,
                identity: (string | null),
                type: WaybillType,
                unitType: (UnitType | null),
                number: string,
                date: Date,
                shippingDate: Date,
                transport: (Transport | null),
                shipperId: string,
                consigneeId: string,
                supplierId: (string | null),
                base: (string | null),
                note: (string | null),
                status: WaybillStatus,
                resolution: WaybillResolution,
                ttnInformF2RegUuid: (string | null),
                wbRegId: (string | null),
                direction: Direction,
                version: Version) {
        this.uuid = uuid;
        this.docOwner = docOwner;
        this.identity = identity;
        this.type = type;
        this.unitType = unitType;
        this.number = number;
        this.date = date;
        this.shippingDate = shippingDate;
        this.transport = transport;
        this.shipperId = shipperId;
        this.consigneeId = consigneeId;
        this.supplierId = supplierId;
        this.base = base;
        this.note = note;
        this.status = status;
        this.resolution = resolution;
        this.ttnInformF2RegUuid = ttnInformF2RegUuid;
        this.wbRegId = wbRegId;
        this.direction = direction;
        this.version = version;
    }
}

/**
 * @class module:waybill.WaybillPosition
 * @classdesc Позиция в товарно-транспортной накладной.
 * @param {string} uuid Уникальный идентификатор
 * @param {string} waybillUuid Уникальный идентификатор накладной
 * @param {?string} productIdentity Информация о продукции
 * @param {module:productInfo.ProductInfo} productInfo Информация о продукции
 * @param {?string} packId Идентификатор упаковки
 * @param {number} quantity Количество
 * @param {number} price Цена за единицу товара
 * @param {?string} party Номер партии
 * @param {?string} identity Идентификатор позиции внутри накладной
 * @param {?string} informF1RegId Справка А
 * @param {?string} informF2RegId Регистрационный номер раздела справки Б
 */
export class WaybillPosition {
    constructor(uuid: string,
                waybillUuid: string,
                productIdentity: (string | null),
                productInfo: ProductInfo,
                packId: (string | null),
                quantity: number,
                price: number,
                party: (string | null),
                identity: (string | null),
                informF1RegId: (string | null),
                informF2RegId: (string | null)) {
        this.uuid = uuid;
        this.waybillUuid = waybillUuid;
        this.productIdentity = productIdentity;
        this.productInfo = productInfo;
        this.packId = packId;
        this.quantity = quantity;
        this.price = price;
        this.party = party;
        this.identity = identity;
        this.informF1RegId = informF1RegId;
        this.informF2RegId = informF2RegId;
    }
}

/**
 * @class module:waybill.WaybillPositionMark
 * @classdesc Марка в позиции товарно-транспортной накладной.
 * @param {string} waybillPositionUuid Уникальный идентификатор позиции в ТТН
 * @param {?string} boxNumber Номер короба
 * @param {string} mark Марка
 */
export class WaybillPositionMark {
    constructor(waybillPositionUuid: string,
                boxNumber: (string | null),
                mark: string) {
        this.waybillPositionUuid = waybillPositionUuid;
        this.boxNumber = boxNumber;
        this.mark = mark;
    }
}