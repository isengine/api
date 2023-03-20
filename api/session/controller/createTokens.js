import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'

export default asyncHandler(async (req, res, next, userId) => {
  const agent = req.headers['user-agent']
  const ip = req.ip

  const payload = {
    userId,
    ip,
    agent
  }

  const accessToken = await sessionService.generateAccess(payload)
  const refreshToken = await sessionService.generateRefresh(payload)

  res.cookie('token', refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true
  })

  return accessToken
})
