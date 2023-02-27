import 'colors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { errorHandler, notFound } from '#app/auth/auth.middleware'
import routes from '#app/routes'
import { prisma } from '#prisma'

dotenv.config()

const app = express()

async function main() {
  const isDev = process.env.NODE_ENV === 'dev';
  if (isDev) app.use(morgan('dev'))

  app
    .use(express.json())
    .use('/api', routes)
    .use(notFound)
    .use(errorHandler)

  const port = process.env.PORT || 5000

  app.listen(
    port,
    console.log(
      ('server running in ' + (isDev ? 'development' : 'production').yellow + ' mode on ' + port.yellow + ' port').bold
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
