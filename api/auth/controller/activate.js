import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'

// @desc    Auth activate
// @route   POST /api/auth/activate
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { login, password } = req.body
  const auth = await authService.find(login)

  const result = await authService.verifyPassword(auth.password, password)

  console.log(result)
})
