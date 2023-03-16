import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'
import sessionService from '#api/session/session.service'
import ErrorApi from '#api/error/error.api'

export default asyncHandler(async (req, res, next) => {
  const secret = req.headers.authorization?.startsWith('Bearer')
    ? req.headers.authorization.split(' ')[1]
    : undefined

  if (!secret) {
    await sessionService.remove(req, res, next)
    throw ErrorApi.code(401, "Don't have secret")
  }

  const ip = req.ip
  const agent = req.headers['user-agent']
  const { token } = req.cookies

  const validToken = sessionService.validateToken(token)

  if (!validToken || validToken.ip !== ip || validToken.agent !== agent) {
    await sessionService.remove(req, res, next)
    throw ErrorApi.code(401, 'Token failed or expired')
  }

  const session = await sessionService.findSession({ ip, agent, token })

  if (
    !session ||
    session.userId !== validToken.userId ||
    session.secret !== secret
  ) {
    await sessionService.remove(req, res, next)
    throw ErrorApi.code(401, 'Session failed')
  }

  next()
})
