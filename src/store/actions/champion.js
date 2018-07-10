import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchChampionListSuc = createAction(types.FETCH_CHAMPION_LIST_SUC)
export const fetchChampionListErr = createAction(types.FETCH_CHAMPION_LIST_ERR)
export const fetchFinalListSuc = createAction(types.FETCH_FINAL_LIST_SUC)
export const fetchFinalListErr = createAction(types.FETCH_FINAL_LIST_ERR)
export const updateChampionList = createAction(types.UPDATE_CHAMPION_LIST)
export const resetChampionList = createAction(types.RESET_CHAMPION_LIST)
export const initChampionList = createAction(types.INIT_CHAMPION_LIST)

export const updateFinalList = createAction(types.UPDATE_FINAL_LIST)
export const resetFinalList = createAction(types.RESET_FINAL_LIST)
export const initFinalList = createAction(types.INIT_FINAL_LIST)
export const filterFinalList = createAction(types.FILTER_FINAL_LIST)