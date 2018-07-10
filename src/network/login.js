import wepy from 'wepy'
import { getStore } from 'wepy-redux'
import XYError from '@/utils/error'
import req from '@/network'
import { fromwhere } from '@/config'
import * as constants from './constants'
import Session from './session'

/**
 * 获取用户信息
 */
// const getWxUserInfo = () => {
//   return (loginResult) => {
//     return wepy.getUserInfo().then(userResult => {
//       return {
//         code: loginResult.code,
//         encryptedData: userResult.encryptedData,
//         iv: userResult.iv,
//         userInfo: userResult.userInfo
//       }
//     })
//   }
// }

/**
 * 微信登录，获取 code 和 encryptData
 */
const getWxLoginResult = () => {
  return wepy.login({withCredentials: true}).then(loginResult => {
    return loginResult.code
  }).catch((loginError) => {
    throw new XYError(constants.ERR_LOGIN_FAILED, '微信登录失败')
  })
}

/**
 * @method
 * 进行服务器登录，以获得登录会话
 *
 * @param {Object} options 登录配置
 * @param {string} options.loginUrl 登录使用的 URL，服务器应该在这个 URL 上处理登录请求
 * @param {string} [options.method] 请求使用的 HTTP 方法，默认为 "GET"
 * @param {Function} options.success(userInfo) 登录成功后的回调函数，参数 userInfo 微信用户信息
 * @param {Function} options.fail(error) 登录失败后的回调函数，参数 error 错误信息
 */
export const login = (userResult) => {
  return new Promise((resolve, reject) => {
    getWxLoginResult().then(code => {
      // 构造请求头，包含 code、encryptedData 和 iv
      const encryptedData = userResult.encryptedData
      const iv = userResult.iv
      let header = {}

      header[constants.WX_HEADER_CODE] = code
      header[constants.WX_HEADER_ENCRYPTED_DATA] = encryptedData
      header[constants.WX_HEADER_IV] = iv

      const store = getStore()
      const state = store.getState()
      const qrmark = state.user.qrmark

      // 请求服务器登录地址，获得会话信息
      return req.get('/api/login/index', {
        code,
        fromwhere,
        qrmark
      }, header).then(res => {
        // 成功地响应会话信息
        const data = res.data
        if (!res.code && data && data[constants.WX_SESSION_MAGIC_ID]) {
          const userInfo = Object.assign({}, userResult.userInfo, res.data.userInfo)
          Session.merge({
            sessionId: data[constants.WX_SESSION_MAGIC_ID]
          })
          req.header({[constants.WX_HEADER_ID]: data[constants.WX_SESSION_MAGIC_ID]})
          resolve(userInfo)

        // 没有正确响应会话信息
        } else {
          const errorMessage2 = `登录失败(${res.code}: ${res.msg})`
          throw new XYError(constants.ERR_LOGIN_SESSION_NOT_RECEIVED, errorMessage2)
        }
      })
    }).catch(err => {
      reject(err)
    })
  })
}
