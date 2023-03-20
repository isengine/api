import dotenv from 'dotenv'
import ErrorApi from '#api/error/error.api'
import passport from 'passport'
import sessionController from '#api/session/session.controller'

dotenv.config()

class PassportController {
  async fail(req, res, next) {
    await sessionController.deleteSession(req, res, next)
    throw ErrorApi.code(401, 'Passport auth is fail')
  }

  async success(req, res, next) {
    res.json('auth success')
  }

  googleAuth = passport.authenticate('google')

  googleCallback = passport.authenticate('google', {
    session: false,
    failureRedirect: process.env.API_BASE + '/passport/fail'
  })
}

export default new PassportController()
