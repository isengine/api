import notFound from './middleware/notFound.js'
import handler from './middleware/handler.js'

class ErrorMiddleware {
  async handler(err, req, res, next) {
    const result = await handler(err, req, res, next)
    return result
  }

  async notFound(req, res, next) {
    const result = await notFound(req, res, next)
    return result
  }
}

export default new ErrorMiddleware()
