import activation from './controller/activation.js'
import login from './controller/login.js'
import logout from './controller/logout.js'
import registration from './controller/registration.js'
import refresh from './controller/refresh.js'

class AuthController {
  activation = async (req, res, next) => activation(req, res, next)

  login = async (req, res, next) => login(req, res, next)

  logout = async (req, res, next) => logout(req, res, next)

  registration = async (req, res, next) => registration(req, res, next)

  refresh = async (req, res, next) => refresh(req, res, next)
}

export default new AuthController()
