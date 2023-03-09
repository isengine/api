import asyncHandler from 'express-async-handler'

// @desc    test simple error
// @route   GET /api/test/error
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const a = 'string'
  a.func()
})
