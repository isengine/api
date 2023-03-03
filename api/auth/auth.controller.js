import login from './controller/login.js'
import register from './controller/register.js'

class AuthController {
  register = async (req, res, next) => register(req, res, next)

  login = async (req, res, next) => login(req, res, next)

  logout = async (req, res, next) => logout(req, res, next)

  activate = async (req, res, next) => activate(req, res, next)

  refresh = async (req, res, next) => refresh(req, res, next)
}

export default new AuthController()
