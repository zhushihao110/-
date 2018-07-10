import * as types from '../types'
import { createAction } from 'redux-actions'

export const initMatches = createAction(types.INIT_MATCHES)
export const fetchMatchesSuc = createAction(types.FETCH_MATCHES_SUC)
export const fetchMatchesErr = createAction(types.FETCH_MATCHES_ERR)

export const initHotMatches = createAction(types.INIT_HOT_MATCHES)
export const fetchHotMatchesSuc = createAction(types.FETCH_HOT_MATCHES_SUC)
export const fetchHotMatchesErr = createAction(types.FETCH_HOT_MATCHES_ERR)

export const betSuc = createAction(types.BET_SUC)
export const betErr = createAction(types.BET_ERR)

export const updateMatchesData = createAction(types.UPDATE_MATCHES_DATA)
export const resetMatchesData = createAction(types.RESET_MATCHES_DATA)
export const filterMatches = createAction(types.FILTER_MATCHES)

export const initHistoryMatches = createAction(types.INIT_HISTORY_MATCHES)
export const fetchHistoryMatchesSuc = createAction(types.FETCH_HISTORY_MATCHES_SUC)
export const fetchHistoryMatchesErr = createAction(types.FETCH_HISTORY_MATCHES_ERR)