import ProductInfo from '../dictionary/ProductInfo'
import {Direction, UnitType, Version, WaybillResolution, WaybillStatus, WaybillType} from "../types"

/**
 * Транспорт
 *
 * @property type Тип перевозки
 * @property company Название компании перевозчика
 * @property car Автомобиль
 * @property trailer Прицеп
 * @property customer Заказчики
 * @property driver Водитель
 * @property loadPoint Место погрузки
 * @property unloadPoint Место разгрузки
 * @property redirect Перенаправление
 * @property forwarder Экспедитор
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
 *  Товарно-транспортная накладная (ТТН)
 *
 *  @property uuid уникальный иднтификатор
 *  @property docOwner кто подает документы
 *  @property identity Идентификатор накладной (клиентский, к заполнению необязательный)
 *  @property type Тип накладной
 *  @property unitType Тип поставки (упакованная или нет)
 *  @property number Номер документа
 *  @property date Дата составления
 *  @property shippingDate  Дата отгрузки продукции
 *  @property transport Информация о транспорте
 *  @property shipperId Грузоотправитель
 *  @property consigneeId Грузополучатель
 *  @property supplierId Поставщик
 *  @property base Основание
 *  @property note Заметки
 *  @property status Состояние накладной
 *  @property resolution резолюция по накладной
 *  @property ttnInformF2RegUuid uuid формы 2 для накладной
 *  @property wbRegId ИД накладной в системе (присвоенный)
 *  @property direction Направление документа в представлени УТМ (входящий/исходящий)
 *  @property version Версия протокола ЕГАИС, по которому отправлена накладная
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
 * Позиция в товарно-транспортной накладной
 *
 * @property uuid Уникальный идентификатор
 * @property waybillUuid Уникальный идентификатор накладной
 * @property productIdentity Информация о продукции
 * @property productInfo Информация о продукции
 * @property packId Идентификатор упаковки
 * @property quantity Количество
 * @property price Цена за единицу товара
 * @property party Номер партии
 * @property identity Идентификатор позиции внутри накладной
 * @property informF1RegId Справка А
 * @property informF2RegId Регистрационный номер раздела справки Б
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
 * Марка в позиции товарно-транспортной накладной
 *
 * @property waybillPositionUuid Уникальный идентификатор позиции в ТТН
 * @property boxNumber Номер короба
 * @property mark Марка
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