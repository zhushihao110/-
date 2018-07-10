import XYError from '@/utils/error'
import { ERR_NOT_LOGIN, ERR_LOGIN_EXPIRED } from '@/network/constants'
import Session from './session'
import { getStore } from 'wepy-redux'
import * as types from '@/store/types'
/**
 * request 拦截器
 * 可以全局拦截请求参数
 */
export function request(params) {
  return params
}

/**
 * response 拦截器
 * 可以全局拦截请求返回结果
 */
export function response(res) {
  if (res.statusCode === 200) {
    res = res.data
    if (!res.code) {
      return res
    } else {
      if (res.code === ERR_NOT_LOGIN || res.code === ERR_LOGIN_EXPIRED) {
        Session.clear()
        const store = getStore()
        store.dispatch({type: types.UPDATE_SHOW_LOGIN, payload: true})
      }
      console.log(res.code, res.msg)
      return Promise.reject(new XYError(res.code, res.msg))
    }
  } else {
    return Promise.reject(res)
  }
}
