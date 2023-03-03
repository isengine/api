import getProfile from './controller/getProfile.js'

class UserController {
  getProfile = async (req, res, next) => getProfile(req, res, next)
}

export default new UserController()
