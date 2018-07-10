import { handleActions } from 'redux-actions'
import moment from 'moment'
import * as types from '../types'

const formatter = (data) => {
  data.formatCreateTime = moment(data.create_time * 1000).format('YYYY-MM-DD HH:mm')
  return data
}

export default handleActions({
  [types.FETCH_ORDER_DETAIL_SUC] (state, action) {
    return {
      ...state,
      detail: formatter(action.payload) || {}
    }
  },
  [types.FETCH_ORDER_DETAIL_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.INIT_ORDER_DETAIL] (state, action) {
    return {
      ...state,
      detail: {}
    }
  }
}, {
  detail: {}
})
