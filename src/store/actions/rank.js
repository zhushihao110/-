import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchRankSuc = createAction(types.FETCH_RANK_SUC)
export const fetchRankErr = createAction(types.FETCH_RANK_ERR)
export const initRank = createAction(types.INIT_RANK)
