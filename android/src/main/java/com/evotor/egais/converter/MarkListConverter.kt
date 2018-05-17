package com.evotor.egais.converter

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableArray
import org.apache.commons.lang3.StringUtils

internal object MarkListConverter {

    private const val SEPARATOR = ","

    internal fun toMarkList(markListString: String?): WritableArray {
        val result = Arguments.createArray()
        markListString?.let {
            StringUtils.split(markListString, SEPARATOR)?.forEach {
                result.pushString(it)
            }
        }
        return result
    }

}
