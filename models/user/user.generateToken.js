import jwt from 'jsonwebtoken'

export const userGenerateToken = (userId) =>
  jwt.sign(
    {
      userId
    },
    process.env.JWT_TOKEN,
    {
      expiresIn: '10d'
    }
  )
