import find from './service/find.js'
import write from './service/write.js'

class ConfirmService {
  async find(confirmCode) {
    const result = await find(confirmCode)
    return result
  }

  async write(userId, confirmCode) {
    const result = await write(userId, confirmCode)
    return result
  }
}

export default new ConfirmService()
