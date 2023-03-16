import dotenv from 'dotenv'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

dotenv.config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.API_BASE + '/passport/google/callback',
      scope: ['profile', 'email']
    },
    (accessToken, refreshToken, profile, callback) => {
      const account = profile._json
      // profile.id
      console.log('account', account)
      console.log('profile', profile)

      const auth = { account, profile }
      /*
      - create auth
      - create user
      - create session
      */

      //return callback('passport error', undefined)

      return callback(undefined, auth)

      //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //  return callback(err, user);
      //});
    }
  )
)
