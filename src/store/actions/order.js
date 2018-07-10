import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchOrderListSuc = createAction(types.FETCH_ORDER_LIST_SUC)
export const fetchOrderListErr = createAction(types.FETCH_ORDER_LIST_ERR)
export const initOrderList = createAction(types.INIT_ORDER_LIST)

export const fetchOrderListMoreSuc = createAction(types.FETCH_ORDER_LIST_MORE_SUC)
export const fetchOrderListMoreErr = createAction(types.FETCH_ORDER_LIST_MORE_ERR)

export const fetchOrderDetailSuc = createAction(types.FETCH_ORDER_DETAIL_SUC)
export const fetchOrderDetailErr = createAction(types.FETCH_ORDER_DETAIL_ERR)
export const initOrderDetail = createAction(types.INIT_ORDER_DETAIL)
