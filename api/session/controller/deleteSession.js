import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'
import ErrorApi from '#api/error/error.api'

// @desc    Auth logout
// @route   POST /api/auth/logout
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { token } = req.cookies

  const validToken = await sessionService.validateRefresh(token)

  if (!validToken) {
    throw ErrorApi.code(401, 'Token failed or expired')
  }

  await sessionService.deleteSession(validToken)

  res.clearCookie('token')
})
