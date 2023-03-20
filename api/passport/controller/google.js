import dotenv from 'dotenv'
import passport from 'passport'

dotenv.config()

class GooglePassport {
  auth = passport.authenticate('google')

  callback = passport.authenticate('google', {
    session: false,
    failureRedirect: process.env.API_BASE + '/passport/fail'
  })
}

export default new GooglePassport()
