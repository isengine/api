import protect from './middleware/protect.js'
import validation from './middleware/validation.js'

class TokenMiddleware {
  async protect(req, res, next) {
    const result = await protect(req, res, next)
    return result
  }
  async validation(req, res, next) {
    const result = await validation(req, res, next)
    return result
  }
}

export default new TokenMiddleware()
