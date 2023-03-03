import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'

// @desc    Auth refresh
// @route   POST /api/auth/refresh
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { login, password } = req.body
  const auth = await authService.find(login)

  const result = await authService.verifyPassword(auth.password, password)

  console.log(result)
})
