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
  [types.FETCH_TRANSACTIONS_SUC] (state, action) {
    return {
      ...state,
      list: [...formatTime(action.payload.res)],
      hasMore: action.payload.status
    }
  },
  [types.FETCH_TRANSACTIONS_ERR] (state, action) {
    return {
      ...state,
      list: [],
      hasMore: 0
    }
  },
  [types.FETCH_TRANSACTIONS_MORE_SUC] (state, action) {
    return {
      ...state,
      list: [...state.list, ...formatTime(action.payload.res)],
      hasMore: action.payload.status
    }
  },
  [types.FETCH_TRANSACTIONS_MORE_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.INIT_TRANSACTIONS] (state, action) {
    return {
      ...state,
      list: [],
      hasMore: 0
    }
  }
}, {
  list: [],
  hasMore: 0
})
