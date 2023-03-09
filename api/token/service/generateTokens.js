import jwt from 'jsonwebtoken'

export default (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES || '1d'
  })

  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES || '30d'
  })

  return {
    accessToken,
    refreshToken
  }
}
