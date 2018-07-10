import { handleActions } from 'redux-actions'
import * as types from '../types'

export default handleActions({
  [types.ADD_FORM_ID] (state, action) {
    return {
      ...state,
      list: [...state.list, action.payload]
    }
  },
  [types.CLEAR_FORM_ID] (state, action) {
    return {
      list: []
    }
  }
}, {
  list: []
})
