import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchBetHistorySuc = createAction(types.FETCH_BET_HISTORY_SUC)
export const fetchBetHistoryErr = createAction(types.FETCH_BET_HISTORY_ERR)
export const initBetHistory = createAction(types.INIT_BET_HISTORY)

export const fetchBetHistoryMoreSuc = createAction(types.FETCH_BET_HISTORY_MORE_SUC)
export const fetchBetHistoryMoreErr = createAction(types.FETCH_BET_HISTORY_MORE_ERR)

export const postShareSuc = createAction(types.POST_SHARE_SUC)
export const postShareErr = createAction(types.POST_SHARE_ERR)

export const updateRewardTime = createAction(types.UPDATE_REWARD_TIME)

export const fetchBetDetailSuc = createAction(types.FETCH_BET_DETAIL_SUC)
export const fetchBetDetailErr = createAction(types.FETCH_BET_DETAIL_ERR)
export const initBetDetail = createAction(types.INIT_BET_DETAIL)

export const updateBetSelected = createAction(types.UPDATE_BET_SELECTED)
export const updateShowBetConfirm = createAction(types.UPDATE_SHOW_BET_CONFIRM)
export const updateShowBetSuc = createAction(types.UPDATE_SHOW_BET_SUC)
export const updateBetShareImgInfo = createAction(types.UPDATE_BET_SHARE_IMG_INFO)
