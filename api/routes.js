import express from 'express'
import { body } from 'express-validator'
// import { getUserProfile } from '#api/user/controllers'
import authController from '#api/auth/auth.controller'
import passportController from '#api/passport/passport.controller'
import passportService from '#api/passport/passport.service'
import testController from '#api/test/test.controller'
import sessionMiddleware from '#api/session/session.middleware'
import userController from '#api/user/user.controller'
import '#api/passport/passport.strategy'

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
router.route('/passport/google').get(passportController.google.auth)
router
  .route('/passport/google/callback')
  .get(passportController.google.callback, passportService.google)

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
