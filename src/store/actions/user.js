import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchUserInfoSuc = createAction(types.FETCH_USER_INFO_SUC)
export const fetchUserInfoErr = createAction(types.FETCH_USER_INFO_ERR)
export const updateUserInfo = createAction(types.UPDATE_USER_INFO)

export const fetchRedPointSuc = createAction(types.FETCH_RED_POINT_SUC)
export const clearRedPoint = createAction(types.CLEAR_RED_POINT)

export const updateShowLogin = createAction(types.UPDATE_SHOW_LOGIN)
export const updateShowActivity = createAction(types.UPDATE_SHOW_ACTIVITY)

export const saveShareUserId = createAction(types.SAVE_SHARE_USER_ID)
export const clearShareUserId = createAction(types.CLEAR_SHARE_USER_ID)

export const saveQrmark = createAction(types.SAVE_QRMARK)

export const updateShowReward = createAction(types.UPDATE_SHOW_REWARD)
export const updateShowWeChatGroup = createAction(types.UPDATE_SHOW_WECHAT_GROUP)
export const updateShowOfficialGuide = createAction(types.UPDATE_SHOW_OFFICIAL_GUIDE)
export const updateShowHomeDialog = createAction(types.UPDATE_SHOW_HOME_DIALOG)

export const markCityMatchUserSuc = createAction(types.MARK_CITY_MATCH_USER_SUC)
export const markCityMatchUserErr = createAction(types.MARK_CITY_MATCH_USER_ERR)

export const fetchCityMatchInfoSuc = createAction(types.FETCH_CITY_MATCH_INFO_SUC)
export const fetchCityMatchInfoErr = createAction(types.FETCH_CITY_MATCH_INFO_ERR)
export const updateCityMatchInfo = createAction(types.UPDATE_CITY_MATCH_INFO)
