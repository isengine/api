import asyncHandler from 'express-async-handler'

import {
  userFind,
  userGenerateToken,
  userVerifyPassword
} from '#api/user/user.services'

// @desc    Auth user
// @route   POST /api/auth/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await userFind(email)

  const isValidPassword = await userVerifyPassword(user.password, password)

  if (user && isValidPassword) {
    const token = await userGenerateToken(user.id)
    res.json({ user, token })
  } else {
    res.status(401)
    throw new Error('Authorization data is not correct')
  }
})
