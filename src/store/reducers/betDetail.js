import { handleActions } from 'redux-actions'
import moment from 'moment'
import * as types from '../types'

const formatter = (data) => {
  data.typesArr = data.types.split(',')
  data.codesArr = data.codes.split(',')
  data.oddsArr = data.odds.split(',')

  if (data.way === 'single') {
    data.teams = data.teams.map(item => {
      if (item.b_time) {
        item.formatBTime = moment(item.b_time * 1000).format('YYYY-MM-DD HH:mm')
      }
      return item
    })
  } else if (data.way === 'many') {
    data.odds = data.odds.replace(/\//g, ' / ')
  }

  if (data.paytype === '2') {
    const bonusDiamonds = data.bonus_diamonds.split('.')
    data.bonus_diamonds = bonusDiamonds[0]
    data.bonusDiamondsExtra = bonusDiamonds[1] ? `0.${bonusDiamonds[1]}` : ''
  }

  data.extraOdds = Number.parseFloat(data.extra_odds).toFixed(2)
  data.helpodds_list.map(item => {
    if (item.extra_odds) {
      item.extraOdds = Number.parseFloat(item.extra_odds).toFixed(2)
    }
    return item
  })

  data.formatCreateTime = moment(data.create_time * 1000).format('YYYY-MM-DD HH:mm')
  return data
}

export default handleActions({
  [types.FETCH_BET_DETAIL_SUC] (state, action) {
    return {
      ...state,
      detail: formatter(action.payload) || {}
    }
  },
  [types.FETCH_BET_DETAIL_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.INIT_BET_DETAIL] (state, action) {
    return {
      ...state,
      detail: {}
    }
  }
}, {
  detail: {}
})
