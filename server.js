import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import { apollo } from '#apollo'
import { prisma } from '#prisma'
import view from '#view/init'
import routes from '#api/routes'
import { errorHandler, notFound } from '#api/auth/auth.middlewares'

dotenv.config()

const server = express()

await apollo.start()

const isDev = process.env.NODE_ENV === 'dev'
const port = process.env.PORT || 5000

if (isDev) server.use(morgan('dev'))

server
  .use(cors())
  .use(express.json())
  .use(`/${process.env.API_BASE}`, routes)
  .use(`/${process.env.GRAPHQL_BASE}`, expressMiddleware(apollo))
  //.use('/graphql', express.json(), expressMiddleware(apollo))
  .use(notFound)
  .use(errorHandler)

await new Promise(() =>
  server.listen(
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
