import confirmService from './confirm.service.js'
import confirmController from './confirm.controller.js'

class ConfirmManager {
  code

  constructor() {}

  async create(data) {
    const { len, type, userId } = data

    let find
    let success

    while (!success) {
      if (type === 'num') {
        this.code = await confirmController.generateNum(len)
      } else {
        this.code = await confirmController.generateString(len)
      }
      this.code += `.${userId}`
      find = await confirmService.find(this.code)
      success = !find
    }
    await confirmService.write(userId, this.code)
  }

  async sendMail(to) {
    await confirmController.sendMail(to, this.code)
  }
}

export default new ConfirmManager()
