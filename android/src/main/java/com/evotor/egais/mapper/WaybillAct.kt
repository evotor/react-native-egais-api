package com.evotor.egais.mapper

import android.database.Cursor
import com.evotor.egais.converter.QuantityBigDecimalConverter
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

internal fun createWaybillAct(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("docOwner", cursor.getString(cursor.getColumnIndexOrThrow("OWNER")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("acceptType", cursor.getString(cursor.getColumnIndexOrThrow("ACCEPT_TYPE")))
    result.putString("number", cursor.getString(cursor.getColumnIndexOrThrow("NUMBER")))
    result.putString("creationDate", cursor.getString(cursor.getColumnIndexOrThrow("CREATION_DATE")))
    result.putString("wbRegId", cursor.getString(cursor.getColumnIndexOrThrow("WB_REG_ID")))
    result.putString("note", cursor.getString(cursor.getColumnIndexOrThrow("NOTE")))
    result.putString("type", cursor.getString(cursor.getColumnIndexOrThrow("TYPE")))
    result.putString("version", cursor.getString(cursor.getColumnIndexOrThrow("VERSION")))
    result.putString("status", cursor.getString(cursor.getColumnIndexOrThrow("STATUS")))
    result.putString("rejectComment", cursor.getString(cursor.getColumnIndexOrThrow("REJECT_COMMENT")))
    result.putString("replyId", cursor.getString(cursor.getColumnIndexOrThrow("REPLY_ID")))
    return result
}

internal fun createWaybillActPosition(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("waybillActUuid", cursor.getString(cursor.getColumnIndexOrThrow("WAY_BILL_ACT_UUID")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("informF2RegId", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F2_REG_ID")))
    result.putDouble("realQuantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("REAL_QUANTITY"))).toDouble())
    return result
}