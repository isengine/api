import model from './dto/model.js'

export default class extends Error {
  code
  status

  constructor(code, status, message) {
    super(message)
    this.code = code
    this.status = status
  }

  static code(code, message = undefined) {
    const status = model[code]
    return new this(code, status, message ?? status)
  }

  static message(message) {
    const status = model[400]
    return new this(400, status, message)
  }
}
