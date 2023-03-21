import asyncHandler from 'express-async-handler'
import sessionController from '#api/session/session.controller'
import sessionMiddleware from '#api/session/session.middleware'

// @desc    Auth logout
// @route   POST /api/auth/logout
// @param   COOKIE { token }
// @access  Public
export default asyncHandler(async (req, res, next) => {
  await sessionController.deleteSession(req, res, next)
  //await sessionController.deleteTokens(req, res, next)
  sessionMiddleware.resApi(req, res)
})
