import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'
import confirmService from '#api/confirm/confirm.service'

// @desc    Auth activation
// @route   GET /api/auth/activation/:confirmCode
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const link = req.params.link

  const auth = await confirmService.find(link)
  if (!auth) {
    throw new Error('invalid activation link')
  }
  if (auth.isActivated) {
    throw new Error('activation has already been done')
  }

  await authService.activate(auth.id)

  return res.redirect(process.env.CLIENT_URL)
})
