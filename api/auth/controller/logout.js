import asyncHandler from 'express-async-handler'
import tokenService from '#api/token/token.service'

// @desc    Auth logout
// @route   POST /api/auth/logout
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.cookies
  const token = await tokenService.deleteRefreshToken(refreshToken)

  res.clearCookie('refreshToken')
  res.status(200)
  res.json(token)
})
