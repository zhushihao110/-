import { handleActions } from 'redux-actions'
import * as types from '../types'

const formatList = (list) => {
  return list.map(item => {
    const star = item.star ? item.star.split('_') : []
    item.starName = star[0]
    item.starTeam = star[1] ? `(${star[1]})` : ''
    return item
  })
}

const updateList = (list, id, data) => {
  const newList = [...list]
  const index = newList.findIndex(item => {
    return id === item.id
  })
  if (index !== -1) {
    newList[index] = Object.assign({}, newList[index], data)
  }
  return newList
}

const resetList = (list) => {
  return list.map(item => {
    item.selected = false
    return item
  })
}

const filterFinalList = (list, filter) => {
  if (filter === 'all') {
    return list
  }

  return list.reduce((acc, current) => {
    if (current.lteam === filter || current.rteam === filter) {
      acc = acc.concat(current)
    }
    return acc
  }, [])
}

export default handleActions({
  [types.FETCH_CHAMPION_LIST_SUC] (state, action) {
    return {
      ...state,
      list: formatList(action.payload)
    }
  },
  [types.FETCH_CHAMPION_LIST_ERR] (state, action) {
    return {
      ...state,
      list: []
    }
  },
  [types.FETCH_FINAL_LIST_SUC] (state, action) {
    return {
      ...state,
      finalList: action.payload,
      filterFinalList: action.payload
    }
  },
  [types.FETCH_FINAL_LIST_ERR] (state, action) {
    return {
      ...state,
      finalList: [],
      filterFinalList: []
    }
  },
  [types.UPDATE_CHAMPION_LIST] (state, action) {
    return {
      ...state,
      list: updateList(state.list, action.payload.id, action.payload.data)
    }
  },
  [types.RESET_CHAMPION_LIST] (state, action) {
    return {
      ...state,
      list: resetList(state.list)
    }
  },
  [types.INIT_CHAMPION_LIST] (state, action) {
    return {
      ...state,
      list: []
    }
  },
  [types.UPDATE_FINAL_LIST] (state, action) {
    return {
      ...state,
      filterFinalList: updateList(state.filterFinalList, action.payload.id, action.payload.data)
    }
  },
  [types.RESET_FINAL_LIST] (state, action) {
    return {
      ...state,
      filterFinalList: resetList(state.filterFinalList)
    }
  },
  [types.INIT_FINAL_LIST] (state, action) {
    return {
      ...state,
      finalList: [],
      filterFinalList: []
    }
  },
  [types.FILTER_FINAL_LIST] (state, action) {
    return {
      ...state,
      filterFinalList: filterFinalList(state.finalList, action.payload)
    }
  }
}, {
  list: [],
  finalList: [],
  filterFinalList: []
})
