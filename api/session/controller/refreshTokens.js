import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'
import ErrorApi from '#api/error/error.api'

// @desc    Token refresh
// @route   POST /api/token/refresh
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { token } = req.cookies
  const validToken = await sessionService.validateRefresh(token)

  if (!validToken) {
    throw ErrorApi.code(401, 'Token failed or expired')
  }

  const { userId } = req.body
  const agent = req.headers['user-agent']
  const ip = req.ip

  if (
    userId !== validToken?.userId ||
    agent !== validToken?.agent ||
    ip !== validToken?.ip
  ) {
    throw ErrorApi.code(401, 'Invalid token')
  }

  const payload = {
    userId,
    ip,
    agent
  }

  const accessToken = await sessionService.generateAccess(payload)
  const refreshToken = await sessionService.generateRefresh(payload)

  res.cookie('token', refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true
  })

  return accessToken
})
