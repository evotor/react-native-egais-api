package com.evotor.egais.mapper

import android.database.Cursor
import com.evotor.egais.converter.MoneyBigDecimalConverter
import com.evotor.egais.converter.QuantityBigDecimalConverter
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

private fun createTransport(cursor: Cursor): WritableMap? {
    val transportType = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_TYPE"))
    val transportCompany = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_COMPANY"))
    val transportCar = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_CAR"))
    val transportTrailer = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_TRAILER"))
    val transportCustomer = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_CUSTOMER"))
    val transportDriver = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_DRIVER"))
    val transportLoadPoint = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_LOADPOINT"))
    val transportUnloadPoint = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_UNLOADPOINT"))
    val transportRedirect = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_REDIRECT"))
    val transportForwarder = cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_FORWARDER"))
    if (transportType != null ||
            transportCompany != null ||
            transportCar != null ||
            transportTrailer != null ||
            transportCustomer != null ||
            transportDriver != null ||
            transportLoadPoint != null ||
            transportUnloadPoint != null ||
            transportRedirect != null ||
            transportForwarder != null) {
        val result = Arguments.createMap()
        result.putString("type", transportType)
        result.putString("company", transportCompany)
        result.putString("car", transportCar)
        result.putString("trailer", transportTrailer)
        result.putString("customer", transportCustomer)
        result.putString("driver", transportDriver)
        result.putString("loadpoint", transportLoadPoint)
        result.putString("unloadpoint", transportUnloadPoint)
        result.putString("redirect", transportRedirect)
        result.putString("forwarder", transportForwarder)
    }
    return null
}


internal fun createWaybill(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("docOwner", cursor.getString(cursor.getColumnIndexOrThrow("OWNER")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("type", cursor.getString(cursor.getColumnIndexOrThrow("TYPE")))
    result.putString("unitType", cursor.getString(cursor.getColumnIndexOrThrow("UNIT_TYPE")))
    result.putString("number", cursor.getString(cursor.getColumnIndexOrThrow("NUMBER")))
    result.putString("date", cursor.getString(cursor.getColumnIndexOrThrow("DATE")))
    result.putString("shippingDate", cursor.getString(cursor.getColumnIndexOrThrow("SHIPPING_DATE")))
    result.putMap("transport", createTransport(cursor))
    result.putString("shipperId", cursor.getString(cursor.getColumnIndexOrThrow("SHIPPER_ID")))
    result.putString("consigneeId", cursor.getString(cursor.getColumnIndexOrThrow("CONSIGNEE_ID")))
    result.putString("supplierId", cursor.getString(cursor.getColumnIndexOrThrow("SUPPLIER_ID")))
    result.putString("base", cursor.getString(cursor.getColumnIndexOrThrow("BASE")))
    result.putString("note", cursor.getString(cursor.getColumnIndexOrThrow("NOTE")))
    result.putString("status", cursor.getString(cursor.getColumnIndexOrThrow("STATUS")))
    result.putString("resolution", cursor.getString(cursor.getColumnIndexOrThrow("RESOLUTION")))
    result.putString("ttnInformF2RegUuid", cursor.getString(cursor.getColumnIndexOrThrow("TTN_INFORM_F2_REG_UUID")))
    result.putString("wbRegId", cursor.getString(cursor.getColumnIndexOrThrow("WB_REG_ID")))
    result.putString("direction", cursor.getString(cursor.getColumnIndexOrThrow("DIRECTION")))
    result.putString("version", cursor.getString(cursor.getColumnIndexOrThrow("VERSION")))
    return result
}

internal fun createWaybillPosition(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("waybillUuid", cursor.getString(cursor.getColumnIndexOrThrow("WAY_BILL_UUID")))
    result.putString("productIdentity", cursor.getString(cursor.getColumnIndexOrThrow("PRODUCT_INFO_IDENTITY")))
    result.putMap("productInfo", createProductInfo(cursor))
    result.putString("packId", cursor.getString(cursor.getColumnIndexOrThrow("PACK_ID")))
    result.putDouble("quantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("QUANTITY"))).toDouble())
    result.putDouble("price", MoneyBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("PRICE"))).toDouble())
    result.putString("party", cursor.getString(cursor.getColumnIndexOrThrow("PARTY")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("informF1RegId", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F1_REG_ID")))
    result.putString("informF2RegId", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F2_REG_ID")))
    return result
}

internal fun createTtnInformF2Reg(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("docOwner", cursor.getString(cursor.getColumnIndexOrThrow("OWNER")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("wbRegId", cursor.getString(cursor.getColumnIndexOrThrow("WB_REG_ID")))
    result.putString("egaisFixNumber", cursor.getString(cursor.getColumnIndexOrThrow("EGAIS_FIX_NUMBER")))
    result.putString("egaisFixDate", cursor.getString(cursor.getColumnIndexOrThrow("EGAIS_FIX_DATE")))
    result.putString("wbNumber", cursor.getString(cursor.getColumnIndexOrThrow("WB_NUMBER")))
    result.putString("wbDate", cursor.getString(cursor.getColumnIndexOrThrow("WB_DATE")))
    result.putString("shipperId", cursor.getString(cursor.getColumnIndexOrThrow("SHIPPER_ID")))
    result.putString("consigneeId", cursor.getString(cursor.getColumnIndexOrThrow("CONSIGNEE_ID")))
    result.putString("supplierId", cursor.getString(cursor.getColumnIndexOrThrow("SUPPLIER_ID")))
    result.putString("waybillId", cursor.getString(cursor.getColumnIndexOrThrow("WAY_BILL_ID")))
    result.putString("status", cursor.getString(cursor.getColumnIndexOrThrow("STATUS")))
    return result
}

internal fun createTtnInformF2RegPosition(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("ttnInformF2RegUuid", cursor.getString(cursor.getColumnIndexOrThrow("TTN_INFORM_F2_REG_ID")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("informF2RegId", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F2_REG_ID")))
    return result
}

internal fun createWaybillPositionMark(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("waybillPositionUuid", cursor.getString(cursor.getColumnIndexOrThrow("WAYBILL_POSITION_UUID")))
    result.putString("boxNumber", cursor.getString(cursor.getColumnIndexOrThrow("BOX_NUMBER")))
    result.putString("mark", cursor.getString(cursor.getColumnIndexOrThrow("MARK")))
    return result
}

internal fun createWaybillActPositionMark(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("waybillActPositionUuid", cursor.getString(cursor.getColumnIndexOrThrow("WAY_BILL_ACT_POSITION_UUID")))
    result.putString("mark", cursor.getString(cursor.getColumnIndexOrThrow("MARK")))
    return result
}