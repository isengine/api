import getProfile from './controller/getProfile.js'
import getUsers from './controller/getUsers.js'

class UserController {
  async getProfile(req, res, next) {
    const result = await getProfile(req, res, next)
    return result
  }

  async getUsers(req, res, next) {
    const result = await getUsers(req, res, next)
    return result
  }
}

export default new UserController()
