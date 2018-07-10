import { handleActions } from 'redux-actions'
import * as types from '../types'
import wepy from 'wepy'

export default handleActions({
  [types.FETCH_VERSIOH_FLAG_SUC] (state, action) {
    const flag = action.payload
    if (flag.sham || flag.hyp) {
      wepy.hideTabBar()
    }
    return {
      ...state,
      flag,
      getFlagSuc: true
    }
  },
  [types.FETCH_NOTICE_SUC] (state, action) {
    return {
      ...state,
      notice: action.payload.list,
      banners: action.payload.banner,
      share: action.payload.shareinfo,
      shWinnigReward: action.payload.sh_winning_reward,
      helpOddsTotal: action.payload.help_odds_total
    }
  },
  [types.FETCH_NOTICE_ERR] (state, action) {
    return {
      ...state
    }
  }
}, {
  banners: [],
  share: {},
  flag: {},
  getFlagSuc: false,
  notice: [],
  shWinnigReward: '',
  helpOddsTotal: ''
})
