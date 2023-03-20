import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'
import sessionController from '#api/session/session.controller'

import ErrorApi from '#api/error/error.api'

export default asyncHandler(async (req, res, next) => {
  const accessToken = req.headers.authorization?.startsWith('Bearer')
    ? req.headers.authorization.split(' ')[1]
    : undefined

  if (!accessToken) {
    throw ErrorApi.code(401, "Don't have auth header")
  }

  const { token } = req.cookies

  const validToken = await sessionService.validateAccess(accessToken)
  const refreshToken = await sessionService.validateRefresh(token)

  if (!validToken || !refreshToken) {
    throw ErrorApi.code(401, 'Token failed or expired')
  }

  const ip = req.ip
  const agent = req.headers['user-agent']

  if (
    userId !== validToken?.userId ||
    userId !== refreshToken?.userId ||
    agent !== validToken?.agent ||
    agent !== refreshToken?.agent ||
    ip !== validToken?.ip ||
    ip !== refreshToken?.ip
  ) {
    throw ErrorApi.code(401, 'Invalid token')
  }

  next()
})
