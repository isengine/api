import express from 'express'
import { getUserProfile } from './user.controller.js'
import { userProtect } from './user.middleware.js'

const router = express.Router()

router.route('/profile').get(userProtect, getUserProfile)

export default router
