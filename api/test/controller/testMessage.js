import asyncHandler from 'express-async-handler'
import ErrorApi from '#api/error/error.api'

// @desc    test simple error
// @route   GET /api/test/error_api
// @access  Public
export default asyncHandler(async (req, res, next) => {
  throw ErrorApi.message('Only error message with standart code')
})
