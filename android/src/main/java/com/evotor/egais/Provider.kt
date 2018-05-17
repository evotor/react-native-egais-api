package com.evotor.egais

import android.net.Uri

internal object Provider {

    private const val AUTHORITY_PREFIX = "content://ru.evotor.egais.api"

    internal val DICTIONARY_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.dictionary")

    internal val SHOP_COMMODITY_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.shopcommodity")

    internal val STOCK_COMMODITY_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.stockcommodity")

    internal val WAYBILL_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.waybill")

    internal val WAYBILL_ACT_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.waybillact")

    internal val ACT_CHARGE_ON_SHOP_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.actchargeonshop")

    internal val ACT_WRITE_OFF_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.actwriteoff")

    internal val ACT_WRITE_OFF_SHOP_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.actwriteoffshop")

    internal val TRANSFER_FROM_SHOP_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.transferfromshop")

    internal val TRANSFER_TO_SHOP_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.transfertoshop")

    internal val TICKET_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.ticket")

    internal val CLIENT_SETTINGS_BASE_URI = Uri.parse("$AUTHORITY_PREFIX.clientsettings")


}