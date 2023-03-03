import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'

// @desc    Auth login
// @route   POST /api/auth/login
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { login, password } = req.body
  const auth = await authService.find(login)

  const isValidPassword = await authService.verifyPassword(
    auth.password,
    password
  )

  if (auth && isValidPassword) {
    const token = await authService.generateToken(auth)
    res.json({ auth, token })
  } else {
    res.status(401)
    throw new Error('Authorization data is not correct')
  }
})
