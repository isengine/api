import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'
import sessionController from '#api/session/session.controller'
import ErrorApi from '#api/error/error.api'

export default asyncHandler(async (req, res, next) => {
  const bearer = req.headers.authorization?.startsWith('Bearer')
    ? req.headers.authorization.split(' ')[1]
    : undefined

  if (!bearer) {
    await sessionController.deleteSession(req, res, next)
    throw ErrorApi.code(401, "Don't have auth header")
  }

  const ip = req.ip
  const agent = req.headers['user-agent']
  const { token } = req.cookies

  const access = await sessionService.validateAccess(bearer)

  if (!access) {
    await sessionController.deleteSession(req, res, next)
    throw ErrorApi.code(401, 'Token failed or expired')
  }

  console.log('validate:', {
    userId: access.userId,
    token: bearer,
    secret: token,
    agent,
    ip
  })

  const session = await sessionService.findSession({
    userId: access.userId,
    token: bearer,
    secret: token,
    agent,
    ip
  })

  if (!session) {
    await sessionController.deleteSession(req, res, next)
    throw ErrorApi.code(401, 'Session failed')
  }

  await sessionController.createSession(req, res, next, access.userId)

  next()
})
