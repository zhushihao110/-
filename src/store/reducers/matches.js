import { handleActions } from 'redux-actions'
import moment from 'moment'
import { quickSort } from '@/utils/helper'
import * as types from '../types'

const formatTime = (list) => {
  return list.map(item => {
    item.formatTime = moment(item.b_time * 1000).format('MMMDo HH:mm')
    item.formatEndTime = moment(item.b_time * 1000 + 2 * 60 * 60 * 1000).format('MMMDo HH:mm')
    return item
  })
}

const filterByLeague = (list, priorityLeague) => {
  const result = []
  let priorityList = []
  let originalList = [...list]
  let resetList = []
  priorityLeague.forEach((l, j) => {
    let loopList = []
    if (j === 1) {
      loopList = [...originalList]
    } else {
      loopList = [...resetList]
      resetList = []
    }
    loopList.forEach((n, i) => {
      if (n.l_cn_abbr === l) {
        priorityList.push(n)
      } else {
        resetList.push(n)
      }
    })
  })

  priorityList = priorityList.concat(resetList)

  priorityList.forEach((n, i) => {
    if (i === 0) {
      result.push(n)
    } else {
      const tmp = [...result]
      tmp.every((m, j) => {
        if (j + 1 === tmp.length) {
          result.push(n)
        } else if (n.l_cn_abbr === m.l_cn_abbr &&
          tmp[j + 1] &&
          tmp[j + 1].l_cn_abbr !== n.l_cn_abbr
        ) {
          result.splice(j + 1, 0, n)
          return false
        }
        return true
      })
    }
  })
  return result
}

const filterByTime = (list) => {
  return quickSort(list, 'b_time')
}

const reset = (list) => {
  return list.map(item => {
    item.FESelected = false
    return item
  })
}

const formatHistory = (list) => {
  return list.map(item => {
    item.formatTime = moment(item.b_time * 1000).format('MMMDo HH:mm')
    const scoreArr = item.score ? item.score.split(':') : []
    item.hScore = scoreArr[0]
    item.aScore = scoreArr[1]
    return item
  })
}

export default handleActions({
  [types.FETCH_HOT_MATCHES_SUC] (state, action) {
    const formatData = formatTime(action.payload.matches)
    return {
      ...state,
      home: formatData
    }
  },
  [types.FETCH_HOT_MATCHES_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.INIT_HOT_MATCHES] (state, action) {
    return {
      ...state,
      home: []
    }
  },
  [types.FETCH_MATCHES_SUC] (state, action) {
    const formatData = formatTime(action.payload.matches)
    return {
      ...state,
      list: formatData,
      priorityLeague: action.payload.priority_league
    }
  },
  [types.FETCH_MATCHES_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.INIT_MATCHES] (state, action) {
    return {
      ...state,
      list: [],
      priorityLeague: []
    }
  },
  [types.UPDATE_MATCHES_DATA] (state, action) {
    const newList = [...state.list]
    for (let i in newList) {
      if (newList[i].id == action.payload.id) {// eslint-disable-line
        newList[i] = Object.assign({}, newList[i], action.payload.data)
        break
      }
    }

    return {
      ...state,
      list: newList
    }
  },
  [types.RESET_MATCHES_DATA] (state, action) {
    return {
      ...state,
      list: reset(state.list)
    }
  },
  [types.FILTER_MATCHES] (state, action) {
    let newList = [...state.list]
    switch (action.payload) {
      case 'league':
        newList = filterByLeague(newList, state.priorityLeague)
        break
      case 'time':
        newList = filterByTime(newList)
        break
      default:
    }
    return {
      ...state,
      list: newList
    }
  },
  [types.FETCH_HISTORY_MATCHES_SUC] (state, action) {
    return {
      ...state,
      historyList: formatHistory(action.payload.matches)
    }
  },
  [types.FETCH_HISTORY_MATCHES_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.INIT_HISTORY_MATCHES] (state, action) {
    return {
      ...state,
      historyList: []
    }
  }
}, {
  home: [],
  list: [],
  priorityLeague: [],
  historyList: []
})
