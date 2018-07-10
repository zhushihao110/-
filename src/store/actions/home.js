import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchBannersSuc = createAction(types.FETCH_BANNERS_SUC)
export const fetchBannersErr = createAction(types.FETCH_BANNERS_ERR)
export const fetchShareInfoSuc = createAction(types.FETCH_SHARE_INFO_SUC)
export const fetchVersionFlagSuc = createAction(types.FETCH_VERSIOH_FLAG_SUC)

export const fetchNoticeSuc = createAction(types.FETCH_NOTICE_SUC)
export const fetchNoticeErr = createAction(types.FETCH_NOTICE_ERR)
