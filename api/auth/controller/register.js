import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'
import userService from '#api/user/user.service'

// @desc    Register auth
// @route   POST /api/auth/register
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const { login, password, confirmCode } = req.body
  const isExists = await authService.find(login)

  if (isExists) {
    res.status(400)
    throw new Error('This entry already exists')
  }

  const auth = await authService.create(login, password)
  const user = await userService.create(auth)
  //const mail = await authService.sendMail(login, confirmCode)
  const token = await authService.generateToken(auth.id)

  res.json({ auth, user, token })
})
