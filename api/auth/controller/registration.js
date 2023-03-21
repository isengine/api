import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'
import confirmController from '#api/confirm/confirm.controller'
import sessionController from '#api/session/session.controller'
import sessionMiddleware from '#api/session/session.middleware'
import userService from '#api/user/user.service'
import { validationResult } from 'express-validator'

// @desc    Auth registration new user
// @route   POST /api/auth/registration
// @param   BODY { login, password }
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(400)
    throw new Error('Invalid validation')
  }

  const { login, password } = req.body

  const isExists = await authService.findByLogin(login)

  if (isExists) {
    res.status(400)
    throw new Error('This entry already exists')
  }

  const auth = await authService.create(login, password)

  await userService.create({
    userId: auth.id,
    email: login
  })

  await confirmController.create({
    userId: auth.id,
    type: 'num',
    len: 4
  })
  //await confirmController.sendMail(login)

  await sessionController.createSession(req, res, next, auth.id)
  //await sessionController.createTokens(req, res, next, auth.id)

  res.locals.data = auth

  sessionMiddleware.resApi(req, res)
})
