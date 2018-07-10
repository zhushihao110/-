import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchMallSuc = createAction(types.FETCH_MALL_SUC)
export const fetchMallErr = createAction(types.FETCH_MALL_ERR)
export const initMall = createAction(types.INIT_MALL_LIST)
export const fetchMallMoreSuc = createAction(types.FETCH_MALL_MORE_SUC)
export const fetchMallMoreErr = createAction(types.FETCH_MALL_MORE_ERR)

export const fetchGoodsDetailSuc = createAction(types.FETCH_GOODS_DETAIL_SUC)
export const fetchGoodsDetailErr = createAction(types.FETCH_GOODS_DETAIL_ERR)
export const initGoodsDetail = createAction(types.INIT_GOODS_DETAIL)

export const fetchMallNoticeSuc = createAction(types.FETCH_MALL_NOTICE_SUC)
export const fetchMallNoticeErr = createAction(types.FETCH_MALL_NOTICE_ERR)
