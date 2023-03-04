import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'

// @desc    Auth refresh
// @route   POST /api/auth/refresh
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.cookies

  if (!refreshToken) {
    throw new Error('Unauthorized')
  }

  const auth = await authService.validateRefreshToken(refreshToken)
  const tokenFromDb = await authService.findToken(refreshToken)

  if (!auth || !tokenFromDb) {
    throw new Error('Unauthorized')
  }

  /* TODO
  еще обновить пользователя
  const user = await authService.findByLogin(usedData.id)
  */

  const tokens = authService.generateTokens({
    id: auth.id,
    login: auth.login
  })
  await authService.writeRefreshToken(auth.id, tokens.refreshToken)

  res.cookie('refreshToken', tokens.refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true
  })

  res.json({ ...auth, tokens })
})
