import generateNum from './controller/generateNum.js'
import generateString from './controller/generateString.js'
import sendMail from './controller/sendMail.js'

class ConfirmController {
  code

  async create(data) {
    const { len, type, userId } = data

    let find
    let success

    while (!success) {
      if (type === 'num') {
        this.code = await generateNum(len)
      } else {
        this.code = await generateString(len)
      }
      this.code += `.${userId}`
      find = await confirmService.find(this.code)
      success = !find
    }
    await confirmService.write(userId, this.code)
  }

  async sendMail(to) {
    const result = await sendMail(to, this.code)
    return result
  }
}

export default new ConfirmController()
