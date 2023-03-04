import getProfile from './controller/getProfile.js'
import getUsers from './controller/getUsers.js'

class UserController {
  getProfile = async (req, res, next) => getProfile(req, res, next)
  getUsers = async (req, res, next) => getUsers(req, res, next)
}

export default new UserController()
