import asyncHandler from 'express-async-handler'
import userService from '#api/user/user.service'
import userDto from '#api/user/user.dto'

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
export default asyncHandler(async (req, res) => {
  const { model } = userDto
  console.log(model)
  //const { email } = req.body
  //console.log(req.body)
  //const user = await userFind(email)
  //res.json(user)
  //res.json(req.user)
  res.json(model)
})
