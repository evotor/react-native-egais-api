package com.evotor.egais.mapper

import android.database.Cursor
import com.evotor.egais.converter.QuantityBigDecimalConverter
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

internal fun createActChargeOnShop(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("docOwner", cursor.getString(cursor.getColumnIndexOrThrow("OWNER")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("number", cursor.getString(cursor.getColumnIndexOrThrow("NUMBER")))
    result.putString("actDate", cursor.getString(cursor.getColumnIndexOrThrow("ACT_DATE")))
    result.putString("type", cursor.getString(cursor.getColumnIndexOrThrow("TYPE_ACT_CHARGE_ON_SHOP")))
    result.putString("actWriteOff", cursor.getString(cursor.getColumnIndexOrThrow("ACT_WRITE_OFF")))
    result.putString("note", cursor.getString(cursor.getColumnIndexOrThrow("NOTE")))
    result.putString("status", cursor.getString(cursor.getColumnIndexOrThrow("STATUS")))
    result.putString("rejectComment", cursor.getString(cursor.getColumnIndexOrThrow("REJECT_COMMENT")))
    result.putString("replyId", cursor.getString(cursor.getColumnIndexOrThrow("REPLY_ID")))
    return result
}

internal fun createActChargeOnShopPosition(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("actChargeOnShopUuid", cursor.getString(cursor.getColumnIndexOrThrow("ACT_CHARGE_ON_SHOP_UUID")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putDouble("quantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("QUANTITY"))).toDouble())
    result.putMap("productInfo", createProductInfo(cursor))
    return result
}