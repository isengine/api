import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'

// @desc    Auth logout
// @route   POST /api/auth/logout
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { token } = req.cookies

  const validateToken = await sessionService.validateToken(token)

  await sessionService.deleteSession(validateToken)

  res.clearCookie('token')
})
