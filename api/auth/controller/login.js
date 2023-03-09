import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'
import tokenService from '#api/token/token.service'

// @desc    Auth login
// @route   POST /api/auth/login
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { login, password } = req.body
  const auth = await authService.findByLogin(login)

  const isValidPassword = await authService.verifyPassword(
    auth?.password,
    password
  )

  if (!auth || !auth?.isActivated || !isValidPassword) {
    res.status(401)
    throw new Error('Authorization data is not correct')
  }

  const tokens = tokenService.generateTokens({
    id: auth.id,
    login: auth.login
  })
  await tokenService.writeRefreshToken(auth.id, tokens.refreshToken)

  res.cookie('refreshToken', tokens.refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true
  })

  res.json({ ...auth, tokens })
})
