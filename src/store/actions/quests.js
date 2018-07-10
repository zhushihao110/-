import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchDailyQuestsSuc = createAction(types.FETCH_DAILY_QUESTS_SUC)
export const fetchDailyQuestsErr = createAction(types.FETCH_DAILY_QUESTS_ERR)
export const getDailyRewardSuc = createAction(types.GET_DAILY_REWARD_SUC)
export const getDailyRewardErr = createAction(types.GET_DAILY_REWARD_ERR)

export const openSignIn = createAction(types.OPEN_SIGNIN)
export const closeSignIn = createAction(types.CLOSE_SIGNIN)

export const fetchQuestsSuc = createAction(types.FETCH_QUESTS_SUC)
export const fetchQuestsErr = createAction(types.FETCH_QUESTS_ERR)

export const getRewardSuc = createAction(types.GET_REWARD_SUC)
export const getRewardErr = createAction(types.GET_REWARD_ERR)

export const fetchExtraQuestsSuc = createAction(types.FETCH_EXTRA_QUESTS_SUC)
export const fetchExtraQuestsErr = createAction(types.FETCH_EXTRA_QUESTS_ERR)
