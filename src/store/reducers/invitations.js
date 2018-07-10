import { handleActions } from 'redux-actions'
import moment from 'moment'
import * as types from '../types'

const formatTime = (list) => {
  return list.map(item => {
    item.formatTime = moment(item.time * 1000).format('MMMDo HH:mm')
    return item
  })
}

export default handleActions({
  [types.FETCH_RULES_SUC] (state, action) {
    return {
      ...state,
      rules: action.payload.tips
    }
  },
  [types.FETCH_RULES_ERR] (state, action) {
    return {
      ...state,
      rules: []
    }
  },
  [types.FETCH_INVITE_INCOME_SUC] (state, action) {
    return {
      ...state,
      income: action.payload
    }
  },
  [types.FETCH_INVITE_INCOME_ERR] (state, action) {
    return {
      ...state,
      income: {}
    }
  },
  [types.FETCH_INVITE_SUC] (state, action) {
    return {
      ...state,
      list: [...state.list, ...formatTime(action.payload.res)],
      hasMore: action.payload.status
    }
  },
  [types.FETCH_INVITE_ERR] (state, action) {
    return {
      ...state,
      list: [],
      hasMore: 0
    }
  },
  [types.INIT_INVITE_LIST] (state, action) {
    return {
      ...state,
      list: [],
      hasMore: 0
    }
  },
  [types.FETCH_INVITE_QR_SUC] (state, action) {
    return {
      ...state,
      qrUrl: action.payload.image,
      qrErr: ''
    }
  },
  [types.FETCH_INVITE_QR_ERR] (state, action) {
    return {
      ...state,
      qrUrl: '',
      qrErr: action.payload.msg
    }
  }
}, {
  rules: [],
  income: {},
  list: [],
  hasMore: 0,
  qrUrl: '',
  qrErr: ''
})
