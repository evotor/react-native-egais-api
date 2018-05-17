package com.evotor.egais.mapper

import android.database.Cursor
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

private fun createOrgAddress(cursor: Cursor): WritableMap? {
    val country = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_COUNTRY"))
    val index = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_INDEX"))
    val regionCode = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_REGION_CODE"))
    val area = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_AREA"))
    val city = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_CITY"))
    val place = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_PLACE"))
    val street = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_STREET"))
    val house = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_HOUSE"))
    val building = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_BUILDING"))
    val liter = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_LITER"))
    val description = cursor.getString(cursor.getColumnIndexOrThrow("ADDRESS_DESCRIPTION"))
    if (country != null
            || index != null
            || regionCode != null
            || area != null
            || city != null
            || place != null
            || street != null
            || house != null
            || building != null
            || liter != null
            || description != null) {
        val result = Arguments.createMap()
        result.putString("country", country)
        result.putString("index", index)
        result.putString("regionCode", regionCode)
        result.putString("area", area)
        result.putString("city", city)
        result.putString("place", place)
        result.putString("street", street)
        result.putString("house", house)
        result.putString("building", building)
        result.putString("liter", liter)
        result.putString("description", description)
        return result
    }
    return null
}

internal fun createOrgInfo(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("type", cursor.getString(cursor.getColumnIndexOrThrow("TYPE")))
    result.putString("clientRegId", cursor.getString(cursor.getColumnIndexOrThrow("CLIENT_REG_ID")))
    result.putString("fullName", cursor.getString(cursor.getColumnIndexOrThrow("FULL_NAME_UPPER_CASE")))
    result.putString("shortName", cursor.getString(cursor.getColumnIndexOrThrow("SHORT_NAME_UPPER_CASE")))
    result.putString("inn", cursor.getString(cursor.getColumnIndexOrThrow("INN")))
    result.putString("kpp", cursor.getString(cursor.getColumnIndexOrThrow("KPP")))
    result.putString("unp", cursor.getString(cursor.getColumnIndexOrThrow("UNP")))
    result.putString("rnn", cursor.getString(cursor.getColumnIndexOrThrow("RNN")))
    result.putMap("address", createOrgAddress(cursor))
    result.putString("state", cursor.getString(cursor.getColumnIndexOrThrow("STATE")))
    result.putString("waybillVersion", cursor.getString(cursor.getColumnIndexOrThrow("VERSION_WB")))
    return result
}