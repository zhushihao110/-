import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchRulesSuc = createAction(types.FETCH_RULES_SUC)
export const fetchRulesErr = createAction(types.FETCH_RULES_ERR)

export const fetchInviteIncomeSuc = createAction(types.FETCH_INVITE_INCOME_SUC)
export const fetchInviteIncomeErr = createAction(types.FETCH_INVITE_INCOME_ERR)

export const postInviteSuc = createAction(types.POST_INVITE_SUC)
export const postInviteErr = createAction(types.POST_INVITE_ERR)

export const fetchInviteSuc = createAction(types.FETCH_INVITE_SUC)
export const fetchInviteErr = createAction(types.FETCH_INVITE_ERR)

export const initInviteList = createAction(types.INIT_INVITE_LIST)

export const fetchInviteQrSuc = createAction(types.FETCH_INVITE_QR_SUC)
export const fetchInviteQrErr = createAction(types.FETCH_INVITE_QR_ERR)
