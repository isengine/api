import asyncHandler from 'express-async-handler'
import { authCreate, authFind, authGenerateToken } from '#api/auth/services'

// @desc    Register auth
// @route   POST /api/auth/register
// @access  Public
export const authRegister = asyncHandler(async (req, res) => {
  const { login, password } = req.body
  const isExists = await authFind(login)

  if (isExists) {
    res.status(400)
    throw new Error('This entry already exists')
  }

  const auth = await authCreate(login, password)
  const token = await authGenerateToken(auth.id)

  res.json({ auth, token })
})
