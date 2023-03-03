import errorHandler from './middleware/errorHandler.js'
import notFound from './middleware/notFound.js'

class SystemMiddleware {
  errorHandler = async (err, req, res, next) =>
    errorHandler(err, req, res, next)

  notFound = async (req, res, next) => notFound(req, res, next)
}

export default new SystemMiddleware()
