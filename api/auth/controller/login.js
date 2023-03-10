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

  const agent = req.headers['user-agent']
  const ip = req.ip

  const tokens = await tokenService.generateTokens({
    id: auth.id,
    login: auth.login,
    agent,
    ip
  })

  await tokenService.writeRefreshToken({
    userId: auth.id,
    token: tokens.refreshToken,
    agent,
    ip
  })

  res
    .cookie('refreshToken', tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true
    })
    .json({ ...auth, tokens })
})
