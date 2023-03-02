import jwt from 'jsonwebtoken'

export const authGenerateToken = (auth) => {
  const { id, login } = auth
  return jwt.sign(
    {
      id,
      login
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '10d'
    }
  )
}
