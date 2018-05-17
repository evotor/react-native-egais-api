package com.evotor.egais.mapper

import android.database.Cursor
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

internal fun createFsRarId(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("FsRarId", cursor.getString(cursor.getColumnIndexOrThrow("FSRAR_ID")))
    return result
}