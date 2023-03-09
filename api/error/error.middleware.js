import notFound from './middleware/notFound.js'
import errorApi from './middleware/errorApi.js'

class ErrorMiddleware {
  async errorApi(err, req, res, next) {
    const result = await errorApi(err, req, res, next)
    return result
  }

  async notFound(req, res, next) {
    const result = await notFound(req, res, next)
    return result
  }
}

export default new ErrorMiddleware()
