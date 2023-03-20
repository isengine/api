import asyncHandler from 'express-async-handler'
import sessionController from '#api/session/session.controller'

// @desc    Auth logout
// @route   POST /api/auth/logout
// @access  Public
export default asyncHandler(async (req, res, next) => {
  await sessionController.deleteSession(req, res, next)
  //await sessionController.deleteTokens(req, res, next)

  res.status(200)
  res.json({})
})
