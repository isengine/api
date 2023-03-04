import asyncHandler from 'express-async-handler'
import userService from '#api/user/user.service'

// @desc    Get all users
// @route   GET /api/users
// @access  Private
export default asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers()
  res.json(users)
})
