import asyncHandler from 'express-async-handler'

import {
  authFind,
  authGenerateToken,
  authVerifyPassword
} from '#api/auth/services'

// @desc    Auth read
// @route   POST /api/auth/login
// @access  Public
export const authRead = asyncHandler(async (req, res) => {
  const { login, password } = req.body
  const auth = await authFind(login)

  const isValidPassword = await authVerifyPassword(auth.password, password)

  if (auth && isValidPassword) {
    const token = await authGenerateToken(auth)
    res.json({ auth, token })
  } else {
    res.status(401)
    throw new Error('Authorization data is not correct')
  }
})
