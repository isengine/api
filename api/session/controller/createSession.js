import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'

// @desc    Token refresh
// @route   POST /api/token/refresh
// @access  Public
export default asyncHandler(async (req, res, next, userId) => {
  const agent = req.headers['user-agent']
  const ip = req.ip

  const payload = {
    userId,
    ip,
    agent
  }

  const token = await sessionService.generateAccess(payload)
  const secret = await sessionService.generateRefresh(payload)

  const session = { userId, ip, agent, token, secret }

  await sessionService.createSession(session)

  res.cookie('token', secret, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true
  })

  return token
})
