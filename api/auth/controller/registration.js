import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'
import tokenService from '#api/token/token.service'
import userService from '#api/user/user.service'
import { validationResult } from 'express-validator'

// @desc    Register auth
// @route   POST /api/auth/register
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const errors = validationResult(req)
  console.log('errors', errors)
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

  const confirmCode = await authService.generateConfirmCode()
  await authService.writeConfirmCode(auth.id, confirmCode)

  //await authService.sendMail(login, confirmCode)

  const agent = req.headers['user-agent']
  const ip = req.ip

  const tokens = await tokenService.generateTokens({
    id: auth.id,
    login: auth.login,
    agent,
    ip
  })

  await tokenService.writeRefreshToken({
    userId: auth.id,
    token: tokens.refreshToken,
    agent,
    ip
  })

  res.cookie('refreshToken', tokens.refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true
  })

  res.json({ ...auth, tokens })
})
