package com.evotor.egais.mapper

import android.database.Cursor
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

internal fun createProductInfo(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("type", cursor.getString(cursor.getColumnIndexOrThrow("TYPE")))
    result.putString("fullName", cursor.getString(cursor.getColumnIndexOrThrow("FULL_NAME_UPPER_CASE")))
    result.putString("shortName", cursor.getString(cursor.getColumnIndexOrThrow("SHORT_NAME_UPPER_CASE")))
    result.putString("alcCode", cursor.getString(cursor.getColumnIndexOrThrow("ALC_CODE")))
    result.putString("capacity", cursor.getString(cursor.getColumnIndexOrThrow("CAPACITY")))
    result.putString("alcVolume", cursor.getString(cursor.getColumnIndexOrThrow("ALC_VOLUME")))
    result.putString("producerId", cursor.getString(cursor.getColumnIndexOrThrow("PRODUCER_CLIENT_REG_ID")))
    result.putString("importerId", cursor.getString(cursor.getColumnIndexOrThrow("IMPORTER_CLIENT_REG_ID")))
    result.putString("productVCode", cursor.getString(cursor.getColumnIndexOrThrow("PRODUCT_V_CODE")))
    return result
}