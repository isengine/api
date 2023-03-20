import asyncHandler from 'express-async-handler'
import sessionController from '#api/session/session.controller'

// @desc    Auth refresh pair of tokens
// @route   GET /api/auth/refresh
// @param   BODY { userId }
// @param   COOKIE { token }
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const token = await sessionController.refreshTokens(req, res, next)

  res.json({ token })
})
