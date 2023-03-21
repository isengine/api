import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'
import sessionController from '#api/session/session.controller'
import sessionMiddleware from '#api/session/session.middleware'

// @desc    Auth login
// @route   POST /api/auth/login
// @param   BODY { login, password }
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { login, password } = req.body
  const auth = await authService.findByLogin(login)

  const isValidPassword = await authService.verifyPassword(
    auth?.password,
    password
  )

  if (!auth || !auth?.isActivated || !isValidPassword) {
    res.status(401)
    throw new Error('Authorization data is not correct')
  }

  await sessionController.createSession(req, res, next, auth.id)
  //await sessionController.createTokens(req, res, next, auth.id)

  res.locals.data = auth

  sessionMiddleware.resApi(req, res)
})
