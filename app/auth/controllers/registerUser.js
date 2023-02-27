import asyncHandler from 'express-async-handler'
import {
  userCreate,
  userFind,
  userGenerateToken
} from '#app/user/user.services'

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
