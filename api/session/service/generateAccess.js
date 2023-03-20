import jwt from 'jsonwebtoken'

export default ({ userId, ip, agent }) => {
  return jwt.sign({ userId, ip, agent }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES || '30d'
  })
}
