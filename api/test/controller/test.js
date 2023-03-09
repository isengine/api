import asyncHandler from 'express-async-handler'

// @desc    test
// @route   GET /api/test/test
// @access  Public
export default asyncHandler(async (req, res, next) => {
  res.json(['this', 'is', 'test', 'data'])
})
