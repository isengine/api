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
    async (accessToken, refreshToken, profile, callback) => {
      return callback(undefined, profile)
    }
  )
)
