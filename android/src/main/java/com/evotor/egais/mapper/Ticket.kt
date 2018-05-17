package com.evotor.egais.mapper

import android.database.Cursor
import com.evotor.egais.converter.MarkListConverter
import com.evotor.egais.converter.QuantityBigDecimalConverter
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

internal fun createTicket(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("owner", cursor.getString(cursor.getColumnIndexOrThrow("OWNER")))
    result.putString("ticketDate", cursor.getString(cursor.getColumnIndexOrThrow("TICKET_DATE")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("docId", cursor.getString(cursor.getColumnIndexOrThrow("DOC_ID")))
    result.putString("transportId", cursor.getString(cursor.getColumnIndexOrThrow("TRANSPORT_ID")))
    result.putString("regId", cursor.getString(cursor.getColumnIndexOrThrow("REG_ID")))
    result.putString("docHash", cursor.getString(cursor.getColumnIndexOrThrow("DOC_HASH")))
    result.putString("docType", cursor.getString(cursor.getColumnIndexOrThrow("DOC_TYPE")))
    result.putString("conclusionType", cursor.getString(cursor.getColumnIndexOrThrow("RESULT_CONCLUSION")))
    result.putString("resultDate", cursor.getString(cursor.getColumnIndexOrThrow("RESULT_DATE")))
    result.putString("resultComments", cursor.getString(cursor.getColumnIndexOrThrow("RESULT_COMMENTS")))
    result.putString("operationResultName", cursor.getString(cursor.getColumnIndexOrThrow("OPERATION_RESULT_NAME")))
    result.putString("operationResultResult", cursor.getString(cursor.getColumnIndexOrThrow("OPERATION_RESULT_RESULT")))
    result.putString("operationResultComment", cursor.getString(cursor.getColumnIndexOrThrow("OPERATION_RESULT_COMMENT")))
    result.putString("operationResultDate", cursor.getString(cursor.getColumnIndexOrThrow("OPERATION_RESULT_DATE")))
    return result
}

internal fun createConfirmTicket(cursor: Cursor): WritableMap {
    val result = Arguments.createMap()
    result.putString("uuid", cursor.getString(cursor.getColumnIndexOrThrow("UUID")))
    result.putString("owner", cursor.getString(cursor.getColumnIndexOrThrow("OWNER")))
    result.putString("identity", cursor.getString(cursor.getColumnIndexOrThrow("IDENTITY")))
    result.putString("isConfirm", cursor.getString(cursor.getColumnIndexOrThrow("IS_CONFIRM")))
    result.putString("ticketNumber", cursor.getString(cursor.getColumnIndexOrThrow("TICKET_NUMBER")))
    result.putString("ticketDate", cursor.getString(cursor.getColumnIndexOrThrow("TICKET_DATE")))
    result.putString("wbRegId", cursor.getString(cursor.getColumnIndexOrThrow("WB_REG_ID")))
    result.putString("note", cursor.getString(cursor.getColumnIndexOrThrow("NOTE")))
    result.putString("status", cursor.getString(cursor.getColumnIndexOrThrow("STATUS")))
    result.putString("rejectComment", cursor.getString(cursor.getColumnIndexOrThrow("REJECT_COMMENT")))
    return result
}