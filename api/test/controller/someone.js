import asyncHandler from 'express-async-handler'
import userService from '#api/user/user.service'
import sessionMiddleware from '#api/session/session.middleware'

// @desc    someone test method
// @route   GET /api/test/someone
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const data = {
    userId: 53,
    email: 'some email',
    name: 'some name',
    avatar: 'some avatar',
    locale: 'some locale'
  }

  const user = await userService.upsert(data)
  res.locals.data = user

  sessionMiddleware.resApi(req, res)
})
