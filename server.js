import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import express from 'express'
import { prisma } from '#prisma'
import routes from '#api/routes'
import systemMiddleware from '#api/system/system.middleware'
import { graphqlHTTP } from 'express-graphql'
import { schema } from '#schema/schema'

dotenv.config()

const server = express()

const isDev = process.env.NODE_ENV === 'dev'
const port = process.env.PORT || 5000
const message = `${'Server running \n'.bold} in ${
  (isDev ? 'development' : 'production').yellow
} mode on ${port.yellow} port\n at ${`http://localhost:${port}`.bold}`

if (isDev) server.use(morgan('dev'))

server
  .use(express.json())
  .use(cookieParser())
  .use(cors())
  .use(`${process.env.API_BASE}`, routes)
  .use(`${process.env.GRAPHQL_BASE}`, graphqlHTTP({ schema, graphiql: isDev }))
  .use(systemMiddleware.notFound)
  .use(systemMiddleware.errorHandler)

await new Promise(() => server.listen(port, console.log(message)))
  .then(async () => {
    await prisma.$disconnect
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect
    process.exit(1)
  })
