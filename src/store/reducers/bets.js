import { handleActions } from 'redux-actions'
import moment from 'moment'
import * as types from '../types'

const formatTime = (list) => {
  return list.map(item => {
    item.formatTime = moment(item.create_time * 1000).format('MMMDo HH:mm')
    if (item.paytype === '2' && item.bonus_diamonds) {
      const bonusDiamonds = item.bonus_diamonds.split('.')
      item.bonus_diamonds = bonusDiamonds[0]
      item.bonusDiamondsExtra = bonusDiamonds[1] ? `0.${bonusDiamonds[1]}` : ''
    }
    return item
  })
}

export default handleActions({
  [types.FETCH_BET_HISTORY_SUC] (state, action) {
    return {
      ...state,
      history: {
        list: [...formatTime(action.payload.res)],
        hasMore: action.payload.status
      }
    }
  },
  [types.FETCH_BET_HISTORY_MORE_SUC] (state, action) {
    return {
      ...state,
      history: {
        list: [...state.history.list, ...formatTime(action.payload.res)],
        hasMore: action.payload.status
      }
    }
  },
  [types.FETCH_BET_HISTORY_MORE_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.FETCH_BET_HISTORY_ERR] (state, action) {
    return {
      ...state,
      history: {
        list: [],
        hasMore: 0
      }
    }
  },
  [types.INIT_BET_HISTORY] (state, action) {
    return {
      ...state,
      history: {
        list: [],
        hasMore: 0
      }
    }
  },
  [types.BET_SUC] (state, action) {
    return {
      ...state,
      resentBet: action.payload
    }
  },
  [types.POST_SHARE_SUC] (state, action) {
    return {
      ...state,
      shareBets: action.payload.arr
    }
  },
  [types.UPDATE_REWARD_TIME] (state, action) {
    return {
      ...state,
      endTime: action.payload
    }
  },
  [types.UPDATE_BET_SELECTED] (state, action) {
    return {
      ...state,
      selected: [...action.payload.selected],
      betCoins: action.payload.betCoins,
      showBetConfirm: action.payload.showBetConfirm,
      betType: action.payload.betType,
      betMoneyType: action.payload.betMoneyType
    }
  },
  [types.UPDATE_BET_SHARE_IMG_INFO] (state, action) {
    return {
      ...state,
      shareImgInfo: action.payload
    }
  },
  [types.UPDATE_SHOW_BET_CONFIRM] (state, action) {
    return {
      ...state,
      showBetConfirm: action.payload
    }
  },
  [types.UPDATE_SHOW_BET_SUC] (state, action) {
    return {
      ...state,
      showBetSuc: action.payload
    }
  }
}, {
  selected: [],
  betCoins: 0,
  betType: 'normal',
  betMoneyType: 1,
  showBetConfirm: false,
  showBetSuc: false,
  resentBet: {},
  history: {
    list: [],
    hasMore: 0
  },
  shareBets: [],
  endTime: '比赛开始2小时后',
  shareImgInfo: {
    selected: [],
    betCoins: 0,
    betMoneyType: '1',
    betStatus: '1',
    support: {},
    projectid: ''
  }
})
