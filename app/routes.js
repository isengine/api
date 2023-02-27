import express from 'express'
import { authUser, registerUser } from '#app/auth/auth.controllers'
import { getUserProfile } from '#app/user/user.controllers'
import { userProtect } from '#app/user/user.middlewares'

const router = express.Router()

router.route('/auth/login').post(authUser)
router.route('/auth/register').post(registerUser)
router.route('/user/profile').get(userProtect, getUserProfile)

export default router
