import asyncHandler from 'express-async-handler'
import sessionService from '#api/session/session.service'
import ErrorApi from '#api/error/error.api'

export default asyncHandler(async (req, res, next) => {
  const { token } = req.cookies

  const validToken = await sessionService.validateRefresh(token)

  if (!validToken) {
    throw ErrorApi.code(401, 'Token failed or expired')
  }

  await sessionService.deleteSession(validToken)

  res.clearCookie('token')
  res.locals.token = ''
})
