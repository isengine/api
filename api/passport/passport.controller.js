import dotenv from 'dotenv'
import ErrorApi from '#api/error/error.api'
import passport from 'passport'

dotenv.config()

class PassportController {
  fail(req, res, next) {
    throw ErrorApi.code(401, 'Passport auth is fail')
  }

  success(req, res, next) {
    res.json('auth success')
  }

  googleAuth = passport.authenticate('google')

  googleCallback = passport.authenticate(
    'google',
    {
      session: false,
      failureRedirect: process.env.API_BASE + '/passport/fail'
    },
    function (req, res) {
      res.redirect(process.env.API_BASE + '/passport/success')
    }
  )
}

export default new PassportController()
