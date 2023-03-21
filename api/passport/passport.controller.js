import ErrorApi from '#api/error/error.api'
import sessionController from '#api/session/session.controller'
import sessionMiddleware from '#api/session/session.middleware'
import googlePassport from './controller/google.js'

class PassportController {
  google = googlePassport

  async fail(req, res, next) {
    await sessionController.deleteSession(req, res, next)
    throw ErrorApi.code(401, 'Passport auth is fail')
  }

  async success(req, res, next) {
    //res.locals.data = auth
    //res.json('auth success')
    sessionMiddleware.resApi(req, res)
  }
}

export default new PassportController()
