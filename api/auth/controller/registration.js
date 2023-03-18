import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'
import confirmManager from '#api/confirm/confirm.manager'
import sessionController from '#api/session/session.controller'
import userService from '#api/user/user.service'
import { validationResult } from 'express-validator'

// @desc    Register auth
// @route   POST /api/auth/register
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

  await confirmManager.create({
    userId: auth.id,
    type: 'num',
    len: 4
  })
  //await confirmManager.sendMail(login)

  const session = await sessionController.create(req, res, next, auth.id)

  res.json({ ...auth, session })
})
