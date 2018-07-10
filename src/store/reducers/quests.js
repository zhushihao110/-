import { handleActions } from 'redux-actions'
import * as types from '../types'

export default handleActions({
  [types.FETCH_DAILY_QUESTS_SUC] (state, action) {
    return {
      ...state,
      daily: {
        list: action.payload.arr.all,
        current: action.payload.arr.sign,
        status: action.payload.status
      },
      showSignIn: !action.payload.status
    }
  },
  [types.FETCH_DAILY_QUESTS_ERR] (state, action) {
    return {
      ...state,
      daily: {
        list: [],
        current: {
          date: 1
        }
      }
    }
  },
  [types.GET_DAILY_REWARD_SUC] (state, action) {
    return {
      ...state,
      daily: Object.assign({}, state.daily, {
        status: 1
      })
    }
  },
  [types.CLOSE_SIGNIN] (state, action) {
    return {
      ...state,
      showSignIn: false
    }
  },
  [types.FETCH_QUESTS_SUC] (state, action) {
    return {
      ...state,
      list: action.payload.task
    }
  },
  [types.FETCH_QUESTS_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.GET_REWARD_SUC] (state, action) {
    const newList = [...state.list]
    for (let i in newList) {
      if (newList[i].id === action.payload.id) {
        newList[i] = Object.assign({}, newList[i], { status: 0 })
        break
      }
    }
    return {
      ...state,
      list: [...newList]
    }
  },
  [types.FETCH_EXTRA_QUESTS_SUC] (state, action) {
    const task = action.payload.task[0]
    return {
      ...state,
      moreBonus: task
    }
  }
}, {
  daily: {
    list: [],
    current: {
      date: 1
    },
    status: 0
  },
  showSignIn: false,
  list: [],
  moreBonus: {
    status: 0
  }
})
