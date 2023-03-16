import jwt from 'jsonwebtoken'

export default async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (e) {
    console.log(e)
  }
}
