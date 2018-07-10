import { handleActions } from 'redux-actions'
import moment from 'moment'
import * as types from '../types'

const formatter = (data) => {
  const crsH = []
  const crsA = []
  const crsD = []
  let crsHLast = {}
  let crsALast = {}
  let crsDLast = {}
  const tmpMoment = moment(data.b_time * 1000)
  data.formatTime = tmpMoment.format('HH:mm:ss')
  data.formatDate = tmpMoment.format('MMMDo')

  data.crs && data.crs.forEach(item => {
    switch (item.option) {
      case '-1-a':
        crsALast = item
        break
      case '-1-d':
        crsDLast = item
        break
      case '-1-h':
        crsHLast = item
        break
      default:
        const tmp = item.option
        const h = `${tmp[0]}${tmp[1]}`
        const a = `${tmp[2]}${tmp[3]}`
        if (h && a) {
          if (h > a) {
            crsH.push(item)
          } else if (h < a) {
            crsA.push(item)
          } else {
            crsD.push(item)
          }
        }
    }
  })
  crsD.push(crsDLast)
  crsA.push(crsALast)
  crsH.push(crsHLast)

  data = Object.assign({}, data, {
    crsD,
    crsA,
    crsH
  })
  return data
}

const chatFormatter = (list) => {
  const today = moment()
  const yestoday = today.clone().subtract(1, 'days')
  return list.map(item => {
    const time = moment(item.create_time * 1000)
    if (time.isSame(today, 'day')) {
      item.formatTime = time.format('HH:mm')
    } else if (time.isSame(yestoday, 'day')) {
      item.formatTime = `昨天 ${time.format('HH:mm')}`
    } else {
      item.formatTime = time.format('MM.DD HH:mm')
    }
    return item
  })
}

export default handleActions({
  [types.FETCH_MATCH_DETAIL_SUC] (state, action) {
    return {
      ...state,
      detail: formatter(action.payload)
    }
  },
  [types.FETCH_MATCH_DETAIL_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.RESET_MATCH_DETAIL] (state, action) {
    return {
      ...state,
      detail: {}
    }
  },
  [types.FETCH_CHAT_LIST_SUC] (state, action) {
    let newList = [...action.payload.list]
    newList = chatFormatter(newList).reverse()
    return {
      ...state,
      chat: [...newList],
      hasMoreChat: action.payload.status
    }
  },
  [types.FETCH_CHAT_LIST_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.RESET_CHAT_LIST] (state, action) {
    return {
      ...state,
      chat: [],
      hasMoreChat: 0
    }
  },
  [types.FETCH_CHAT_LIST_MORE_SUC] (state, action) {
    let newList = [...action.payload.list]
    newList = chatFormatter(newList).reverse()
    return {
      ...state,
      chat: [...newList, ...state.chat],
      hasMoreChat: action.payload.status
    }
  },
  [types.FETCH_CHAT_LIST_MORE_ERR] (state, action) {
    return {
      ...state
    }
  },
  [types.SEND_MSG_SUC] (state, action) {
    let newList = [...action.payload]
    newList = chatFormatter(newList)
    return {
      ...state,
      chat: [...state.chat, ...newList]
    }
  }
}, {
  detail: {},
  chat: [],
  hasMoreChat: 0
})
