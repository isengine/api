import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import authService from '#api/auth/auth.service'

export default asyncHandler(async (req, res, next) => {
  let token
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const authFound = await authService.read(decoded.authId)

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
