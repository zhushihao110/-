import { handleActions } from 'redux-actions'
import wepy from 'wepy'
import moment from 'moment'
import * as types from '../types'

export default handleActions({
  [types.FETCH_USER_INFO_SUC] (state, action) {
    return {
      ...state,
      info: Object.assign({}, state.info, action.payload)
    }
  },
  [types.FETCH_USER_INFO_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.UPDATE_USER_INFO] (state, action) {
    return {
      ...state,
      info: Object.assign({}, state.info, action.payload)
    }
  },
  [types.MARK_CITY_MATCH_USER_SUC] (state, action) {
    return {
      ...state,
      info: Object.assign({}, state.info, {
        bluediamonds: action.payload.bluediamonds,
        type: action.payload.type
      })
    }
  },
  [types.FETCH_CITY_MATCH_INFO_SUC] (state, action) {
    return {
      ...state,
      info: Object.assign({}, state.info, { bluediamonds: action.payload.bluediamonds })
    }
  },
  [types.FETCH_CITY_MATCH_INFO_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.UPDATE_CITY_MATCH_INFO] (state, action) {
    return {
      ...state,
      info: Object.assign({}, state.info, { bluediamonds: action.payload.bluediamonds })
    }
  },
  [types.BET_SUC] (state, action) {
    const coin = action.payload.coin || state.info.coin
    const bluediamonds = action.payload.bluediamonds || state.info.bluediamonds
    return {
      ...state,
      info: Object.assign({}, state.info, { coin, bluediamonds })
    }
  },
  [types.GET_REWARD_SUC] (state, action) {
    return {
      ...state,
      info: Object.assign({}, state.info, { coin: action.payload.coin })
    }
  },
  [types.FETCH_RED_POINT_SUC] (state, action) {
    const redPoint = action.payload && (action.payload.coin_red || action.payload.award)
    if (redPoint && wepy.showTabBarRedDot) {
      wepy.showTabBarRedDot({
        index: 3
      })
    } else {
      wepy.hideTabBarRedDot && wepy.hideTabBarRedDot({index: 3})
    }
    return {
      ...state,
      transactionRedPoint: action.payload.coin_red,
      questRedPoint: action.payload.award
    }
  },
  [types.CLEAR_RED_POINT] (state, action) {
    let newState = {}
    switch (action.payload) {
      case 1:
        newState = { transactionRedPoint: false }
        break
      case 2:
        newState = { questRedPoint: false }
        break
      default:
    }

    return {
      ...state,
      ...newState
    }
  },
  [types.UPDATE_SHOW_LOGIN] (state, action) {
    return {
      ...state,
      showLogin: action.payload
    }
  },
  [types.UPDATE_SHOW_ACTIVITY] (state, action) {
    return {
      ...state,
      showActivity: action.payload
    }
  },
  [types.SAVE_SHARE_USER_ID] (state, action) {
    return {
      ...state,
      shareUserId: action.payload
    }
  },
  [types.CLEAR_SHARE_USER_ID] (state, action) {
    return {
      ...state,
      shareUserId: null
    }
  },
  [types.SAVE_QRMARK] (state, action) {
    return {
      ...state,
      qrmark: action.payload
    }
  },
  [types.SAVE_CITY_MATCH_TOKEN] (state, action) {
    return {
      ...state,
      cityMatchToken: action.payload
    }
  },
  [types.UPDATE_SHOW_REWARD] (state, action) {
    return {
      ...state,
      showReward: action.payload
    }
  },
  [types.FETCH_DAILY_QUESTS_SUC] (state, action) {
    let showReward = 0
    if (action.payload.type) {
      const showRewardTimeStamp = wx.getStorageSync('showRewardTimeStamp') // eslint-disable-line
      if (!showRewardTimeStamp || !moment(showRewardTimeStamp).isSame(moment(), 'day')) {
        showReward = action.payload.type
      }
    }
    return {
      ...state,
      showReward
    }
  },
  [types.UPDATE_SHOW_WECHAT_GROUP] (state, action) {
    return {
      ...state,
      showWechatGroup: action.payload
    }
  },
  [types.UPDATE_SHOW_OFFICIAL_GUIDE] (state, action) {
    return {
      ...state,
      showOfficialGuide: action.payload
    }
  },
  [types.UPDATE_SHOW_HOME_DIALOG] (state, action) {
    return {
      ...state,
      showHomeDialog: action.payload
    }
  }
}, {
  info: {},
  transactionRedPoint: false,
  questRedPoint: false,
  showLogin: false,
  showActivity: false,
  shareUserId: null,
  showReward: false,
  showWechatGroup: false,
  showOfficialGuide: false,
  showHomeDialog: false,
  qrmark: '',
  cityMatchToken: ''
})
