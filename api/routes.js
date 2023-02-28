import express from 'express'
import { authUser, registerUser } from '#api/auth/auth.controllers'
import { getUserProfile } from '#api/user/user.controllers'
import { userProtect } from '#api/user/user.middlewares'

const router = express.Router()

router.route('/auth/login').post(authUser)
router.route('/auth/register').post(registerUser)
router.route('/user/profile').get(userProtect, getUserProfile)

export default router
