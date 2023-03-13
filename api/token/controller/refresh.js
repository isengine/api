import asyncHandler from 'express-async-handler'
import tokenService from '#api/token/token.service'
import tokenManager from '#api/token/token.manager'

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

  const tokens = await tokenManager.create(req, res, next, auth)

  res.json({ ...auth, tokens })
})
