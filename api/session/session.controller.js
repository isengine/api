import create from './controller/create.js'
import remove from './controller/remove.js'

class SessionController {
  async create(req, res, next, userId) {
    const result = await create(req, res, next, userId)
    return result
  }

  async remove(req, res, next) {
    const result = await remove(req, res, next)
    return result
  }
}

export default new SessionController()
