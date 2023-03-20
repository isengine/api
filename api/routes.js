import express from 'express'
import { body } from 'express-validator'
// import { getUserProfile } from '#api/user/controllers'
import authController from '#api/auth/auth.controller'
import passportController from '#api/passport/passport.controller'
import testController from '#api/test/test.controller'
import sessionMiddleware from '#api/session/session.middleware'
import userController from '#api/user/user.controller'

const router = express.Router()

router.route('/auth/activation/:link').get(authController.activation)
router.route('/auth/login').post(authController.login)
router.route('/auth/logout').post(authController.logout)
router.route('/auth/refresh').get(authController.refresh)
router
  .route('/auth/registration')
  .post(
    body('login').isEmail(),
    body('password').isLength({ min: 6, max: 32 }),
    authController.registration
  )

router.route('/passport/fail').get(passportController.fail)
router.route('/passport/success').get(passportController.success)
router.route('/passport/google').get(passportController.googleAuth)
router
  .route('/passport/google/callback')
  .get(passportController.googleCallback, function (req, res) {
    /*
      const account = profile._json

      console.log('account', account)
      console.log('profile', profile)

      let auth
      auth = await authService.findByLogin(account.email)
      if (!auth) {
        auth = await authService.createByPassport({
          login: account.email,
          is_activated: true,
          passportStrategy: profile.provider,
          passportId: profile.id
        })
      }

      let user
      user = await userService.find(auth.id)
      if (!user) {
        await userService.create({
          userId: auth.id,
          email: account.email,
          name: account.name,
          avatar: account.avatar,
          locale: account.locale
        })
      }
*/

    //const session = await sessionController.createSession(
    //  req,
    //  res,
    //  undefined,
    //  auth.id
    //)
    //res.json({ ...auth, session })

    /*
      - create auth
      - activate auth
      - create user
      - create session
      */

    const profile = req.user
    //const account = profile._json

    console.log('---\n---\n---'.red)
    console.log('profile', profile)
    //console.log('account', account)

    //console.log('req', req)
    //console.log('res', res)

    //НУЖНЫ ВНЕШНИЕ ДАННЫЕ - auth.userId и др
    //const session = await sessionController.createSession(
    //  req,
    //  res,
    //  undefined,
    //  auth.id
    //)
    //res.json({ ...auth, session })

    //const session = await sessionController.createSession(req, res, undefined, auth.id)
    //res.json({ ...auth, session })
    //res.redirect(process.env.API_BASE + '/passport/success')
  })

router
  .route('/users')
  //.get(sessionMiddleware.validateTokens, userController.getUsers)
  .get(sessionMiddleware.validateSession, userController.getUsers)

router
  .route('/user/profile')
  //.get(sessionMiddleware.validate, userController.getProfile)
  .get(userController.getProfile)

router.route('/test/test').get(testController.test)
router.route('/test/error').get(testController.testError)
router.route('/test/code').get(testController.testCode)
router.route('/test/throw').get(testController.testThrow)
router.route('/test/try_catch').get(testController.testTryCatch)

//router.route('/user/profile').get(authController.getUser)

export default router
