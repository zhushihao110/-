import { handleActions } from 'redux-actions'
import * as types from '../types'

export default handleActions({
  [types.FETCH_GOODS_DETAIL_SUC] (state, action) {
    return {
      ...state,
      detail: action.payload.goods_info || {}
    }
  },
  [types.FETCH_GOODS_DETAIL_ERR] (state, action) {
    return {
      ...state,
    }
  },
  [types.INIT_GOODS_DETAIL] (state, action) {
    return {
      ...state,
      detail: {}
    }
  }
}, {
  detail: {}
})
