package com.evotor.egais.mapper

import android.database.Cursor
import com.evotor.egais.converter.MarkListConverter
import com.evotor.egais.converter.QuantityBigDecimalConverter
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

internal fun createActWriteOff(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("docOwner", cursor.getString(cursor.getColumnIndexOrThrow("OWNER")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("number", cursor.getString(cursor.getColumnIndexOrThrow("NUMBER")))
    result.putString("actDate", cursor.getString(cursor.getColumnIndexOrThrow("ACT_DATE")))
    result.putString("type", cursor.getString(cursor.getColumnIndexOrThrow("TYPE_WRITE_OFF")))
    result.putString("note", cursor.getString(cursor.getColumnIndexOrThrow("NOTE")))
    result.putString("status", cursor.getString(cursor.getColumnIndexOrThrow("STATUS")))
    result.putString("rejectComment", cursor.getString(cursor.getColumnIndexOrThrow("REJECT_COMMENT")))
    result.putString("version", cursor.getString(cursor.getColumnIndexOrThrow("VERSION")))
    result.putString("replyId", cursor.getString(cursor.getColumnIndexOrThrow("REPLY_ID")))
    return result
}

internal fun createActWriteOffPosition(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("actWriteOffUuid", cursor.getString(cursor.getColumnIndexOrThrow("ACT_WRITE_OFF_UUID")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putDouble("quantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("QUANTITY"))).toDouble())
    result.putString("informF2RegId", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F2_REG_ID")))
    result.putString("informF2MarkInfoJson", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F2_MARK_INFO_JSON")))
    result.putMap("productInfo", createProductInfo(cursor))
    result.putArray("markList", MarkListConverter.toMarkList(cursor.getString(cursor.getColumnIndexOrThrow("MARK_LIST"))))
    return result
}

internal fun createActWriteOffShop(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("docOwner", cursor.getString(cursor.getColumnIndexOrThrow("OWNER")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("number", cursor.getString(cursor.getColumnIndexOrThrow("NUMBER")))
    result.putString("actDate", cursor.getString(cursor.getColumnIndexOrThrow("ACT_DATE")))
    result.putString("type", cursor.getString(cursor.getColumnIndexOrThrow("TYPE_WRITE_OFF")))
    result.putString("note", cursor.getString(cursor.getColumnIndexOrThrow("NOTE")))
    result.putString("status", cursor.getString(cursor.getColumnIndexOrThrow("STATUS")))
    result.putString("rejectComment", cursor.getString(cursor.getColumnIndexOrThrow("REJECT_COMMENT")))
    result.putString("replyId", cursor.getString(cursor.getColumnIndexOrThrow("REPLY_ID")))
    return result
}

internal fun createActWriteOffShopPosition(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("actWriteOffShopUuid", cursor.getString(cursor.getColumnIndexOrThrow("ACT_WRITE_OFF_SHOP_UUID")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putDouble("quantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("QUANTITY"))).toDouble())
    result.putString("informF2MarkInfoJson", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F2_MARK_INFO_JSON")))
    result.putMap("productInfo", createProductInfo(cursor))
    result.putArray("markList", MarkListConverter.toMarkList(cursor.getString(cursor.getColumnIndexOrThrow("MARK_LIST"))))
    return result
}