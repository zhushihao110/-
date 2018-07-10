import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchChargeListSuc = createAction(types.FETCH_CHARGE_LIST_SUC)
export const fetchChargeListErr = createAction(types.FETCH_CHARGE_LIST_ERR)
export const postChargeSuc = createAction(types.POST_CHARGE_SUC)
export const postChargeErr = createAction(types.POST_CHARGE_ERR)
export const updateShowCharge = createAction(types.UPDATE_SHOW_CHARGE)
