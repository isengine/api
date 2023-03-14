import dotenv from 'dotenv'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
//import GoogleStrategy from 'passport-google-oidc'

dotenv.config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.API_BASE + '/passport/google/callback',
      scope: ['profile']
    },
    (accessToken, refreshToken, profile, callback) => {
      const account = profile._json
      console.log('account', account)
      //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //  return callback(err, user);
      //});
    }
  )
)
