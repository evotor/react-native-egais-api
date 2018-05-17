package com.evotor.egais

import android.database.Cursor
import android.net.Uri
import com.evotor.egais.mapper.*
import com.facebook.react.bridge.*
import java.util.HashMap

class EgaisModule(private val context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

    override fun getName(): String {
        return "EgaisModule"
    }

    override fun getConstants(): Map<String, Any>? {
        return HashMap()
    }

    @ReactMethod
    fun query(entityName: String,
              selection: String?,
              selectionArgs: ReadableArray?,
              sortOrderLimit: String?,
              callback: Callback) {
        var getValue: ((cursor: Cursor) -> WritableMap)? = null
        context.contentResolver.query(
                when (entityName) {
                    "OrgInfo" -> {
                        getValue = {cursor -> createOrgInfo(cursor)}
                        Uri.withAppendedPath(Provider.DICTIONARY_BASE_URI, entityName)
                    }
                    "ProductInfo" -> {
                        getValue = {cursor -> createProductInfo(cursor)}
                        Uri.withAppendedPath(Provider.DICTIONARY_BASE_URI, entityName)
                    }
                    "ProductRest" -> {
                        getValue = {cursor -> createProductRest(cursor) }
                        Uri.withAppendedPath(Provider.DICTIONARY_BASE_URI, entityName)
                    }
                    "ShopCommodity" -> {
                        getValue = {cursor -> createShopCommodity(cursor)}
                        Uri.withAppendedPath(Provider.SHOP_COMMODITY_BASE_URI, entityName)
                    }
                    "StockCommodity" -> {
                        getValue = {cursor -> createStockCommodity(cursor)}
                        Uri.withAppendedPath(Provider.STOCK_COMMODITY_BASE_URI, entityName)
                    }
                    "WayBill" -> {
                        getValue = {cursor -> createWaybill(cursor)}
                        Uri.withAppendedPath(Provider.WAYBILL_BASE_URI, entityName)
                    }
                    "WayBillPosition" -> {
                        getValue = {cursor -> createWaybillPosition(cursor)}
                        Uri.withAppendedPath(Provider.WAYBILL_BASE_URI, entityName)
                    }
                    "WayBillPositionMark" -> {
                        getValue = {cursor -> createWaybillPositionMark(cursor)}
                        Uri.withAppendedPath(Provider.WAYBILL_BASE_URI, entityName)
                    }
                    "TtnInformF2Reg" -> {
                        getValue = {cursor -> createTtnInformF2Reg(cursor)}
                        Uri.withAppendedPath(Provider.WAYBILL_BASE_URI, entityName)
                    }
                    "TtnInformF2RegPosition" -> {
                        getValue = {cursor -> createTtnInformF2RegPosition(cursor)}
                        Uri.withAppendedPath(Provider.WAYBILL_BASE_URI, entityName)
                    }
                    "WayBillAct" -> {
                        getValue = {cursor -> createWaybillAct(cursor)}
                        Uri.withAppendedPath(Provider.WAYBILL_ACT_BASE_URI, entityName)
                    }
                    "WayBillActPosition" -> {
                        getValue = {cursor -> createWaybillActPosition(cursor)}
                        Uri.withAppendedPath(Provider.WAYBILL_ACT_BASE_URI, entityName)
                    }
                    "WayBillActPositionMark" -> {
                        getValue = {cursor -> createWaybillActPositionMark(cursor)}
                        Uri.withAppendedPath(Provider.WAYBILL_BASE_URI, entityName)
                    }
                    "ActChargeOnShop" -> {
                        getValue = {cursor -> createActChargeOnShop(cursor)}
                        Uri.withAppendedPath(Provider.ACT_CHARGE_ON_SHOP_BASE_URI, entityName)
                    }
                    "ActChargeOnShopPosition" -> {
                        getValue = {cursor -> createActChargeOnShopPosition(cursor)}
                        Uri.withAppendedPath(Provider.ACT_CHARGE_ON_SHOP_BASE_URI, entityName)
                    }
                    "ActWriteOff" -> {
                        getValue = {cursor -> createActWriteOff(cursor)}
                        Uri.withAppendedPath(Provider.ACT_WRITE_OFF_BASE_URI, entityName)
                    }
                    "ActWriteOffPosition" -> {
                        getValue = {cursor -> createActWriteOffPosition(cursor)}
                        Uri.withAppendedPath(Provider.ACT_WRITE_OFF_BASE_URI, entityName)
                    }
                    "ActWriteOffShop" -> {
                        getValue = {cursor -> createActWriteOffShop(cursor)}
                        Uri.withAppendedPath(Provider.ACT_WRITE_OFF_SHOP_BASE_URI, entityName)
                    }
                    "ActWriteOffShopPosition" -> {
                        getValue = {cursor -> createActWriteOffShopPosition(cursor)}
                        Uri.withAppendedPath(Provider.ACT_WRITE_OFF_SHOP_BASE_URI, entityName)
                    }
                    "TransferFromShop" -> {
                        getValue = {cursor -> createTransferFromShop(cursor) }
                        Uri.withAppendedPath(Provider.TRANSFER_FROM_SHOP_BASE_URI, entityName)
                    }
                    "TransferFromShopPosition" -> {
                        getValue = {cursor -> createTransferFromShopPosition(cursor) }
                        Uri.withAppendedPath(Provider.TRANSFER_FROM_SHOP_BASE_URI, entityName)
                    }
                    "TransferToShop" -> {
                        getValue = {cursor -> createTransferToShop(cursor) }
                        Uri.withAppendedPath(Provider.TRANSFER_TO_SHOP_BASE_URI, entityName)
                    }
                    "TransferToShopPosition" -> {
                        getValue = {cursor -> createTransferToShopPosition(cursor) }
                        Uri.withAppendedPath(Provider.TRANSFER_TO_SHOP_BASE_URI, entityName)
                    }
                    "Ticket" -> {
                        getValue = {cursor -> createTicket(cursor) }
                        Uri.withAppendedPath(Provider.TICKET_BASE_URI, entityName)
                    }
                    "ConfirmTicket" -> {
                        getValue = {cursor -> createConfirmTicket(cursor) }
                        Uri.withAppendedPath(Provider.TICKET_BASE_URI, entityName)
                    }
                    "FsRarId" -> {
                        getValue = {cursor -> createFsRarId(cursor) }
                        Uri.withAppendedPath(Provider.CLIENT_SETTINGS_BASE_URI, entityName)
                    }
                    else -> Uri.EMPTY
                },
                null,
                selection,
                selectionArgs?.toArrayList()?.let { source ->
                    Array(
                            source.size,
                            { result ->
                                if (source[result] is String) source[result] as String else null
                            }
                    )
                },
                sortOrderLimit
        ).use {
            val result = Arguments.createArray()
            if (it != null && it.moveToFirst()) {
                result.pushMap(getValue?.invoke(it))
                while (it.moveToNext()) {
                    result.pushMap(getValue?.invoke(it))
                }
            }
            callback.invoke(result)
        }
    }

}