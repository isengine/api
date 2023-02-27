import 'colors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { errorHandler, notFound } from './app/auth/auth.middleware.js'
import authRoutes from './app/auth/auth.routes.js'
import userRoutes from './app/user/user.routes.js'
import { prisma } from './prisma/prisma.js'

dotenv.config()

const app = express()

async function main() {
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

  app
    .use(express.json())
    .use('/api/auth', authRoutes)
    .use('/api/user', userRoutes)
    .use(notFound)
    .use(errorHandler)

  const PORT = process.env.PORT || 5000

  app.listen(
    PORT,
    console.log(
      `server running in ... mode on
        port ${PORT}`.blue.bold
    )
  )
}

main()
  .then(async () => {
    await prisma.$disconnect
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect
    process.exit(1)
  })
