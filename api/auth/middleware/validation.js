import asyncHandler from 'express-async-handler'
import authService from '#api/auth/auth.service'

export default asyncHandler(async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader?.startsWith('Bearer')) {
      res.status(401)
      throw new Error("Not authorized, don't have token")
    }

    const accessToken = authHeader.split(' ')[1]
    if (!accessToken) {
      res.status(401)
      throw new Error("Not authorized, don't have token")
    }

    const validToken = await authService.validateAccessToken(accessToken)
    if (!validToken) {
      res.status(401)
      throw new Error('Not authorized, token is not valid')
    }

    // const userData = await authService.read(validToken.authId)
    const userData = await authService.read(validToken.id)
    console.log('userData', userData)
    if (!userData) {
      res.status(401)
      throw new Error("Not authorized, don't have user with current token")
    }

    // req.auth = userData
    req.user = userData
    next()
  } catch (e) {
    res.status(401)
    throw new Error('Not authorized, error in token validation')
  }
})
