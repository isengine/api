import express from 'express'
import { authUser, registerUser } from '#app/auth/auth.controller'
import { getUserProfile } from '#app/user/user.controller'
import { userProtect } from '#app/user/user.middleware'

const router = express.Router()

router.route('/auth/login').post(authUser)
router.route('/auth/register').post(registerUser)
router.route('/user/profile').get(userProtect, getUserProfile)

export default router
