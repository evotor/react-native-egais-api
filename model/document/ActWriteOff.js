import ProductInfo from "../dictionary/ProductInfo"
import {ActWriteOffStatus, ActWriteOffType, Version} from '../types'

/**
 * Акт списания со склада
 *
 * @property uuid Уникальный идентификатор акта списания со склада
 * @property docOwner Кто подает документы
 * @property identity ИД Акта (клиентский)
 * @property number Номер акта
 * @property actDate Дата составления акта
 * @property type Причина списания
 * @property note Примечание
 * @property status Состояние
 * @property rejectComment Комментарий для отказа на акт списания со склада
 * @property version Версия протокола ЕГАИС
 * @property replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export default class ActWriteOff {
    constructor(uuid: string,
                docOwner: string,
                identity: (string | null),
                number: (string | null),
                actDate: Date,
                type: (ActWriteOffType | null),
                note: (string | null),
                status: ActWriteOffStatus,
                rejectComment: (string | null),
                version: Version,
                replyId: (string | null)) {
        this.uuid = uuid;
        this.docOwner = docOwner;
        this.identity = identity;
        this.number = number;
        this.actDate = actDate;
        this.type = type;
        this.note = note;
        this.status = status;
        this.rejectComment = rejectComment;
        this.version = version;
        this.replyId = replyId;
    }
}

/**
 * Позиция в акте о списании со склада
 *
 * @property uuid Уникальный идентификатор
 * @property actWriteOffUuid Идентификатор акта списания, содержащего позицию
 * @property identity Идентификатор позиции внутри накладной
 * @property quantity Количество
 * @property informF2RegId Регистрационный номер раздела справки 2
 * @property informF2MarkInfoJson Информация о марках в формате JSON
 * @property productInfo Информация о продукции
 * @property markList Перечень считанных кодов марок
 */
export class ActWriteOffPosition {
    constructor(uuid: string,
                actWriteOffUuid: string,
                identity: (string | null),
                quantity: number,
                informF2RegId: (string | null),
                informF2MarkInfoJson: (string | null),
                productInfo: ProductInfo,
                markList: string[]) {
        this.uuid = uuid;
        this.actWriteOffUuid = actWriteOffUuid;
        this.identity = identity;
        this.quantity = quantity;
        this.informF2RegId = informF2RegId;
        this.informF2MarkInfoJson = informF2MarkInfoJson;
        this.productInfo = productInfo;
        this.markList = markList;
    }
}

/**
 * Акт списания из торгового зала
 *
 * @property uuid Уникальный идентификатор
 * @property docOwner Владелец документа
 * @property identity ИД Акта (клиентский)
 * @property number Номер документа
 * @property actDate Дата составления
 * @property type Причина списания
 * @property note Примечание
 * @property status Статус акта списания
 * @property rejectComment Комментарий для отказа на акт списания из зала
 * @property replyId Уникальный идентификатор документа (присваивается УТМ); совпадает с идентификатором исходящего документа, который получили в ответе
 */
export class ActWriteOffShop {
    constructor(uuid: string,
                docOwner: string,
                identity: (string | null),
                number: (string | null),
                actDate: (Date | null),
                type: ActWriteOffType,
                note: (string | null),
                status: ActWriteOffStatus,
                rejectComment: (string | null),
                replyId: (string | null)) {
        this.uuid = uuid;
        this.docOwner = docOwner;
        this.identity = identity;
        this.number = number;
        this.actDate = actDate;
        this.type = type;
        this.note = note;
        this.status = status;
        this.rejectComment = rejectComment;
        this.replyId = replyId;
    }
}

/**
 * Позиция в акте списания из торгового зала
 *
 * @property uuid Уникальный идентификатор
 * @property actWriteOffShopId Идентификатор акта списания содержащего позицию
 * @property identity Идентификатор позиции внутри накладной
 * @property quantity Количество
 * @property informF2MarkInfoJson Информация о марках в формате JSON
 * @property productInfo Информация о продукции
 * @property markList Перечень считанных кодов марок
 */
export class ActWriteOffShopPosition {
    constructor(uuid: string,
                actWriteOffShopUuid: (string | null),
                identity: (string | null),
                quantity: number,
                informF2MarkInfoJson: (string | null),
                productInfo: ProductInfo,
                markList: string[]) {
        this.uuid = uuid;
        this.actWriteOffShopUuid = actWriteOffShopUuid;
        this.identity = identity;
        this.quantity = quantity;
        this.informF2MarkInfoJson = informF2MarkInfoJson;
        this.productInfo = productInfo;
        this.markList = markList;
    }
}