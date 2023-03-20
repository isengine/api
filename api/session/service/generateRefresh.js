import jwt from 'jsonwebtoken'

export default ({ userId, ip, agent }) => {
  return jwt.sign({ userId, ip, agent }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES || '30d'
  })
}
