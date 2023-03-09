import asyncHandler from 'express-async-handler'

// @desc    test error with throw
// @route   GET /api/test/throw
// @access  Public
export default asyncHandler(async (req, res, next) => {
  throw new Error('custom throwed error')
})
