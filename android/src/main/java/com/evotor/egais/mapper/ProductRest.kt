package com.evotor.egais.mapper

import android.database.Cursor
import com.evotor.egais.converter.QuantityBigDecimalConverter
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

internal fun createProductRest(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putMap("productInfo", createProductInfo(cursor))
    result.putDouble("stockQuantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("STOCK_QUANTITY"))).toDouble())
    result.putDouble("shopQuantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("SHOP_QUANTITY"))).toDouble())
    result.putDouble("totalQuantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("TOTAL_QUANTITY"))).toDouble())
    return result
}

internal fun createShopCommodity(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putDouble("quantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("QUANTITY"))).toDouble())
    result.putMap("productInfo", createProductInfo(cursor))
    return result
}

internal fun createStockCommodity(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("informF1RegId", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F1_REG_ID")))
    result.putString("informF2RegId", cursor.getString(cursor.getColumnIndexOrThrow("INFORM_F2_REG_ID")))
    result.putDouble("quantity", QuantityBigDecimalConverter.toBigDecimal(cursor.getLong(cursor.getColumnIndexOrThrow("QUANTITY"))).toDouble())
    result.putMap("productInfo", createProductInfo(cursor))
    return result
}