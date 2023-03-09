import jwt from 'jsonwebtoken'

export default async (token) => jwt.verify(token, process.env.JWT_REFRESH)
