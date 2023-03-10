import asyncHandler from 'express-async-handler'
import tokenService from '#api/token/token.service'

// @desc    Token refresh
// @route   POST /api/token/refresh
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.cookies

  if (!refreshToken) {
    throw new Error('Unauthorized')
  }

  const auth = await tokenService.validateRefreshToken(refreshToken)
  const tokenFromDb = await tokenService.findToken(refreshToken)

  if (!auth || !tokenFromDb) {
    throw new Error('Unauthorized')
  }

  /* TODO
  еще обновить пользователя
  const user = await authService.findByLogin(usedData.id)
  */

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
