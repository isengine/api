import asyncHandler from 'express-async-handler'
import sessionController from '#api/session/session.controller'

// @desc    Auth refresh token
// @route   POST /api/auth/refresh
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const token = await sessionController.refreshTokens(req, res, next)

  res.json({ token })
})
