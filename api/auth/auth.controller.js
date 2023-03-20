import activation from './controller/activation.js'
import login from './controller/login.js'
import logout from './controller/logout.js'
import refresh from './controller/refresh.js'
import registration from './controller/registration.js'

class AuthController {
  async activation(req, res, next) {
    const result = await activation(req, res, next)
    return result
  }

  async login(req, res, next) {
    const result = await login(req, res, next)
    return result
  }

  async logout(req, res, next) {
    const result = await logout(req, res, next)
    return result
  }

  async refresh(req, res, next) {
    const result = await refresh(req, res, next)
    return result
  }

  async registration(req, res, next) {
    const result = await registration(req, res, next)
    return result
  }
}

export default new AuthController()
