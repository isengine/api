import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'

// @desc    Token refresh
// @route   POST /api/token/refresh
// @access  Public
export default asyncHandler(async (req, res, next, userId) => {
  const agent = req.headers['user-agent']
  const ip = req.ip

  const secret = await sessionService.generateSecret()
  const token = await sessionService.generateToken({
    userId,
    ip,
    agent
  })

  const session = { userId, ip, agent, token, secret }

  await sessionService.createSession(session)

  res.cookie('token', token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true
  })
})
