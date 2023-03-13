import generateNum from './controller/generateNum.js'
import generateString from './controller/generateString.js'
import sendMail from './controller/sendMail.js'

class ConfirmController {
  async generateNum(len) {
    const result = await generateNum(len)
    return result
  }

  async generateString(len) {
    const result = await generateString(len)
    return result
  }

  async sendMail(to, confirmCode) {
    const result = await sendMail(to, confirmCode)
    return result
  }
}

export default new ConfirmController()
