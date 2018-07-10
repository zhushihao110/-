import { handleActions } from 'redux-actions'
import * as types from '../types'

export default handleActions({
  [types.FETCH_MALL_SUC] (state, action) {
    return {
      ...state,
      list: [...action.payload.physical],
      hasMore: action.payload.status
    }
  },
  [types.FETCH_MALL_ERR] (state, action) {
    return {
      ...state,
      hasMore: 0
    }
  },
  [types.FETCH_MALL_MORE_SUC] (state, action) {
    return {
      ...state,
      list: [...state.list, ...action.payload.physical],
      hasMore: action.payload.status
    }
  },
  [types.FETCH_MALL_MORE_ERR] (state, action) {
    return {
      ...state,
      hasMore: 0
    }
  },
  [types.INIT_MALL_LIST] (state, action) {
    return {
      ...state,
      list: [],
      hasMore: 0
    }
  },
  [types.FETCH_MALL_NOTICE_SUC] (state, action) {
    return {
      ...state,
      notice: action.payload.list
    }
  },
  [types.FETCH_MALL_NOTICE_ERR] (state, action) {
    return {
      ...state
    }
  }
}, {
  list: [],
  hasMore: 0,
  notice: []
})
