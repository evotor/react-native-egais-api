package com.evotor.egais.converter

import java.math.BigDecimal

internal object BigDecimalConverter {

    internal fun toBigDecimal(value: Long, pow: BigDecimal): BigDecimal {
        return BigDecimal(value).divide(pow)
    }

    internal fun toLong(value: BigDecimal, pow: BigDecimal): Long {
        return value.multiply(pow).setScale(0, BigDecimal.ROUND_HALF_UP).toLong()
    }
}