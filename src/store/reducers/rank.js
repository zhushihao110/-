import { handleActions } from 'redux-actions'
import * as types from '../types'

export default handleActions({
  [types.FETCH_RANK_SUC] (state, action) {
    return {
      ...state,
      list: [...action.payload.list],
      myRank: action.payload.myRank
    }
  },
  [types.FETCH_RANK_ERR] (state, action) {
    return {
      ...state,
      list: [],
      myRank: 0
    }
  },
  [types.INIT_RANK] (state, action) {
    return {
      ...state,
      list: [],
      myRank: 0
    }
  }
}, {
  list: [],
  myRank: 0
})
