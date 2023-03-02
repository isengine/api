import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import { authRead } from '#api/auth/services'

export const authProtect = asyncHandler(async (req, res, next) => {
  let token
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const authFound = await authRead(decoded.authId)

    if (authFound) {
      req.auth = authFound
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
