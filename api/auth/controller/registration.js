import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'
import confirmManager from '#api/confirm/confirm.manager'
import tokenManager from '#api/token/token.manager'
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
    id: auth.id,
    email: login
  })

  await confirmManager.create({
    userId: auth.id,
    type: 'num',
    len: 4
  })
  //await confirmManager.sendMail(login)

  const tokens = await tokenManager.create(req, res, next, auth)

  res.json({ ...auth, tokens })
})
