import { handleActions } from 'redux-actions'
import req from '@/network'
import { getStore } from 'wepy-redux'
import * as types from '../types'

export default handleActions({
  [types.FETCH_CHARGE_LIST_SUC] (state, action) {
    return {
      ...state,
      list: action.payload.res,
      first: action.payload.add_coin
    }
  },
  [types.FETCH_CHARGE_LIST_ERR] (state, action) {
    return {
      ...state,
      list: [],
      first: null
    }
  },
  [types.UPDATE_SHOW_CHARGE] (state, action) {
    if (action.payload) {
      const store = getStore()
      req.get('/api/Payment/payList').then(res => {
        store.dispatch({type: types.FETCH_CHARGE_LIST_SUC, payload: res.data})
      }).catch(res => {
        store.dispatch({type: types.FETCH_CHARGE_LIST_ERR})
      })
    }
    return {
      ...state,
      showCharge: action.payload
    }
  }
}, {
  list: [],
  first: null,
  showCharge: false
})
