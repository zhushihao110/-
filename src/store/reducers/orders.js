import { handleActions } from 'redux-actions'
import moment from 'moment'
import * as types from '../types'

const formatter = (list) => {
  return list.map(item => {
    item.formatOrderTime = moment(item.order_time * 1000).format('YYYY/MM/DD HH:mm')
    return item
  })
}

export default handleActions({
  [types.FETCH_ORDER_LIST_SUC] (state, action) {
    let newList = [...action.payload.orders]
    newList = formatter(newList)
    return {
      ...state,
      list: [...newList],
      hasMore: action.payload.status
    }
  },
  [types.FETCH_ORDER_LIST_ERR] (state, action) {
    return {
      ...state,
      hasMore: 0
    }
  },
  [types.FETCH_ORDER_LIST_MORE_SUC] (state, action) {
    let newList = [...action.payload.orders]
    newList = formatter(newList)
    return {
      ...state,
      list: [...state.list, ...newList],
      hasMore: action.payload.status
    }
  },
  [types.FETCH_ORDER_LIST_MORE_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.INIT_ORDER_LIST] (state, action) {
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
