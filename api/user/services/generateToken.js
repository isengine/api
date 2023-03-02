import jwt from 'jsonwebtoken'

export const userGenerateToken = (userId) =>
  jwt.sign(
    {
      userId
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '10d'
    }
  )
