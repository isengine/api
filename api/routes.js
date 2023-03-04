import express from 'express'
import { body } from 'express-validator'
// import { authTest, authRead, authRegister } from '#api/auth/controllers'
// import { getUserProfile } from '#api/user/controllers'
import authController from '#api/auth/auth.controller'
import authMiddleware from '#api/auth/auth.middleware'
import systemController from '#api/system/system.controller'
import userController from '#api/user/user.controller'

const router = express.Router()

router
  .route('/auth/registration')
  .post(
    body('login').isEmail(),
    body('password').isLength({ min: 6, max: 32 }),
    authController.registration
  )

router.route('/auth/login').post(authController.login)
router.route('/auth/logout').post(authController.logout)
router.route('/auth/activation/:link').get(authController.activation)
router.route('/auth/refresh').get(authController.refresh)

router.route('/users').get(authMiddleware.validation, userController.getUsers)

router
  .route('/user/profile')
  //.get(authMiddleware.protect, userController.getProfile)
  .get(userController.getProfile)

router.route('/system/test').get(systemController.test)
router.route('/system/test_error').get(systemController.testError)
router.route('/system/test_error_throw').get(systemController.testErrorThrow)
router
  .route('/system/test_error_try_catch')
  .get(systemController.testErrorTryCatch)

//router.route('/user/profile').get(authController.getUser)

export default router
