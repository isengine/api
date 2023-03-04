import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'

// @desc    Auth activate
// @route   POST /api/auth/activate
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const link = req.params.link

  const auth = await authService.findByActivation(link)
  if (!auth) {
    throw new Error('invalid activation link')
  }
  if (auth.isActivated) {
    throw new Error('activation has already been done')
  }

  await authService.activate(auth.id)

  return res.redirect(process.env.CLIENT_URL)
})
