package com.evotor.egais.converter

import java.math.BigDecimal

internal object MoneyBigDecimalConverter {

    internal fun toBigDecimal(value: Long): BigDecimal {
        return BigDecimalConverter.toBigDecimal(value, Pow.MONEY_POW)
    }

    internal fun toLong(value: BigDecimal): Long {
        return BigDecimalConverter.toLong(value, Pow.MONEY_POW)
    }
}