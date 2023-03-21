import asyncHandler from 'express-async-handler'
import sessionController from '#api/session/session.controller'
import sessionMiddleware from '#api/session/session.middleware'

// @desc    Auth refresh pair of tokens
// @route   GET /api/auth/refresh
// @param   BODY { userId }
// @param   COOKIE { token }
// @access  Public
export default asyncHandler(async (req, res, next) => {
  sessionController.refreshTokens(req, res, next)
  sessionMiddleware.resApi(req, res)
})
