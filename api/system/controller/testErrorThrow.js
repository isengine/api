import asyncHandler from 'express-async-handler'

// @desc    test error with throw
// @route   GET /api/system/test_error_throw
// @access  Public
export default asyncHandler(async (req, res, next) => {
  throw new Error('custom throwed error')
})
