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
