import dotenv from 'dotenv'
import ErrorApi from '#api/error/error.api'
import passport from 'passport'

dotenv.config()

const successUrl = process.env.API_BASE + '/passport/success'

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
      session: true,
      failureRedirect: '/'
    },
    function (req, res) {
      res.redirect(successUrl)
    }
  )
}

export default new PassportController()
