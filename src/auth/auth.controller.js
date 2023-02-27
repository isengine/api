import asyncHandler from 'express-async-handler'

import {
  userCreate,
  userFind,
  userGenerateToken,
  userVerifyPassword
} from '../../models/user.js'

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

// @desc    Register user
// @route   POST /api/register/login
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const isHaveUser = await userFind(email)

  if (isHaveUser) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await userCreate(email, password)
  const token = await userGenerateToken(user.id)

  res.json({ user, token })
})
