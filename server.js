import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import { apollo } from '#apollo'
import { prisma } from '#prisma'
import routes from '#app/routes'
import { errorHandler, notFound } from '#app/auth/auth.middlewares'

dotenv.config()

const app = express()

await apollo.start()

const isDev = process.env.NODE_ENV === 'dev'
const port = process.env.PORT || 4000

if (isDev) app.use(morgan('dev'))

app
  .use(cors())
  .use(express.json())
  .use('/api', routes)
  .use('/graphql', expressMiddleware(apollo))
  //.use('/graphql', express.json(), expressMiddleware(apollo))
  .use(notFound)
  .use(errorHandler)

await new Promise(() =>
  app.listen(
    port,
    console.log(
      'Server running \n'.bold,
      'in ' +
        (isDev ? 'development' : 'production').yellow +
        ' mode on ' +
        port.yellow +
        ' port\n',
      'at ' + `http://localhost:${port}`.bold
    )
  )
)
  .then(async () => {
    await prisma.$disconnect
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect
    process.exit(1)
  })
