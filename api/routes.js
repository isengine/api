import express from 'express'
import { authTest, authRead, authRegister } from '#api/auth/controllers'
import { getUserProfile } from '#api/user/controllers'
import { authProtect } from '#api/auth/middlewares'

const router = express.Router()

router.route('/auth/test').get(authTest)
router.route('/auth/login').post(authRead)
router.route('/auth/register').post(authRegister)
router.route('/user/profile').get(authProtect, getUserProfile)

export default router
