import wepy from 'wepy'
import Session from './session'
import * as constants from './constants'

const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}
class Request {
  _header = {
    [constants.WX_HEADER_ID]: null
  }
  _baseUrl = null

  interceptors = {
    request: null,
    response: null
  }

  constructor() {
    const session = Session.get()
    if (session) {
      this._header[constants.WX_HEADER_ID] = session.sessionId
    }
  }

  request(params) {
    const { url, method, header, data } = this.interceptors.request ? this.interceptors.request(params) : params

    return wepy.request({
      url: (this._baseUrl || '') + url,
      method: method || METHOD.GET,
      data: data,
      header: {
        ...this._header,
        ...header
      }
    }).then(res => this.interceptors.response ? this.interceptors.response(res) : res)
  }

  get(url, data, header) {
    return this.request({ url, method: METHOD.GET, header, data })
  }
  post(url, data, header) {
    return this.request({ url, method: METHOD.POST, header, data })
  }
  put(url, data, header) {
    return this.request({ url, method: METHOD.PUT, header, data })
  }
  delete(url, data, header) {
    return this.request({ url, method: METHOD.DELETE, header, data })
  }

  header(header) {
    this._header = header
    return this
  }
  baseUrl(baseUrl) {
    this._baseUrl = baseUrl
    return this
  }
  interceptor(request, response) {
    if (typeof request === 'function') {
      this.interceptors.request = request
    }
    if (typeof request === 'function') {
      this.interceptors.response = response
    }
    return this
  }
}
export default new Request()
