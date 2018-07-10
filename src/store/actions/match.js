import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchMatchDetailSuc = createAction(types.FETCH_MATCH_DETAIL_SUC)
export const fetchMatchDetailErr = createAction(types.FETCH_MATCH_DETAIL_ERR)
export const resetMatchDetail = createAction(types.RESET_MATCH_DETAIL)

export const fetchChatListSuc = createAction(types.FETCH_CHAT_LIST_SUC)
export const fetchChatListErr = createAction(types.FETCH_CHAT_LIST_ERR)
export const resetChatList = createAction(types.RESET_CHAT_LIST)
export const sendMsgSuc = createAction(types.SEND_MSG_SUC)

export const fetchChatListMoreSuc = createAction(types.FETCH_CHAT_LIST_MORE_SUC)
export const fetchChatListMoreErr = createAction(types.FETCH_CHAT_LIST_MORE_ERR)
