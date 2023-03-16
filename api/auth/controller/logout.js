import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'

// @desc    Auth logout
// @route   POST /api/auth/logout
// @access  Public
export default asyncHandler(async (req, res, next) => {
  await sessionService.remove(req, res, next)

  res.status(200)
  res.json({})
})
