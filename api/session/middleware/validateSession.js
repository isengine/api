import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'
import sessionController from '#api/session/session.controller'
import ErrorApi from '#api/error/error.api'

export default asyncHandler(async (req, res, next) => {
  const secret = req.headers.authorization?.startsWith('Bearer')
    ? req.headers.authorization.split(' ')[1]
    : undefined

  if (!secret) {
    await sessionController.deleteSession(req, res, next)
    throw ErrorApi.code(401, "Don't have auth header")
  }

  const ip = req.ip
  const agent = req.headers['user-agent']
  const { token } = req.cookies

  const validToken = await sessionService.validateRefresh(token)

  if (!validToken) {
    await sessionController.deleteSession(req, res, next)
    throw ErrorApi.code(401, 'Token failed or expired')
  }

  const session = await sessionService.findSession({
    userId: validToken.userId,
    token,
    secret,
    agent,
    ip
  })

  if (!session) {
    await sessionController.deleteSession(req, res, next)
    throw ErrorApi.code(401, 'Session failed')
  }

  // создать токены заново
  next()
})
