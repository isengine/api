import asyncHandler from 'express-async-handler'

// @desc    test error with try/catch block
// @route   GET /api/system/test_error_try_catch
// @access  Public
export default asyncHandler(async (req, res, next) => {
  const a = 'string'
  try {
    a.method()
  } catch (e) {
    res.status(401)
    res.json([
      'custom error handler',
      'with custom status code',
      'more in console'
    ])
    console.log('[Custom Error Handler]'.red, e)
  }
})
