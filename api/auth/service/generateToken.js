import jwt from 'jsonwebtoken'

export default (auth) => {
  const { id, login } = auth

  const accessToken = jwt.sign({ id, login }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_SECRET_EXPIRES || '1d'
  })
  const refreshToken = jwt.sign({ id, login }, process.env.JWT_REFRESH, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES || '30d'
  })

  return {
    accessToken,
    refreshToken
  }
}
