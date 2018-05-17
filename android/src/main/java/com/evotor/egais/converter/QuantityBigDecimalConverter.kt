package com.evotor.egais.converter

import java.math.BigDecimal

internal object QuantityBigDecimalConverter {

    internal fun toBigDecimal(value: Long): BigDecimal {
        return BigDecimalConverter.toBigDecimal(value, Pow.QUANTITY_POW)
    }

    internal fun toLong(value: BigDecimal): Long {
        return BigDecimalConverter.toLong(value, Pow.QUANTITY_POW)
    }
}