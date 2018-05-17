package com.evotor.egais.mapper

import android.database.Cursor
import com.evotor.egais.converter.QuantityBigDecimalConverter
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

internal fun createTransferFromShop(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("owner", cursor.getString(cursor.getColumnIndexOrThrow("OWNER")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("transferNumber", cursor.getString(cursor.getColumnIndexOrThrow("NUMBER")))
    result.putString("transferDate", cursor.getString(cursor.getColumnIndexOrThrow("TRANSFER_DATE")))
    result.putString("note", cursor.getString(cursor.getColumnIndexOrThrow("NOTE")))
    result.putString("status", cursor.getString(cursor.getColumnIndexOrThrow("STATUS")))
    result.putString("rejectComment", cursor.getString(cursor.getColumnIndexOrThrow("REJECT_COMMENT")))
    result.putString("replyId", cursor.getString(cursor.getColumnIndexOrThrow("REPLY_ID")))
    return result
}

internal fun createTransferFromShopPosition(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("transferFromShopUuid", cursor.getString(cursor.getColumnIndexOrThrow("TRANSFER_FROM_SHOP_ID")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("productCode", cursor.getString(cursor.getColumnIndexOrThrow("PRODUCT_CODE")))
    result.putDouble("quantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("QUANTITY"))).toDouble())
    result.putString("informF2RegId", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F2_REG_ID")))
    result.putMap("productInfo", createProductInfo(cursor))
    return result
}