import asyncHandler from 'express-async-handler'

// @desc    Auth user
// @route   POST /api/auth/test
// @access  Public
export const authTest = asyncHandler(async (req, res) => {
  console.log(req)
  res.json(req.query)
})
