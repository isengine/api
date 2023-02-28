import asyncHandler from 'express-async-handler'
import { userFind } from '#api/user/user.services'

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  /*
  зачем повторно создавать обращение в базу данных, если до getUserProfile идет userProtect?
  фактически, мы читаем полные данные по токену один раз, затем берем id и читаем эти же данные по этому id второй раз
  по-идее, вообще один middleware можно упразднить
  const { email } = req.body
  const user = await userFind(email)
  res.json(user)
  */
  res.json(req.user)
})
