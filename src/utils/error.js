/**
 * XYError
 * @name XYError
 * @class
 * @memberof module:model
 * @param {number} code - error code
 * @param {*} msg - error message, usually a string
 */
class XYError extends Error {
  constructor(code, msg) {
    super(msg)
    this.code = code
    this.msg = msg
  }
}

export default XYError
