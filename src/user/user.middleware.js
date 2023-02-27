import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import { userRead } from '../../models/user.js'

export const userProtect = asyncHandler(async (req, res, next) => {
  let token
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const userFound = await userRead(decoded.userId)

    if (userFound) {
      req.user = userFound
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Not authorized, don't have token")
  }
})
