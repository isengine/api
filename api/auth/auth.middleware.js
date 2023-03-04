import protect from './middleware/protect.js'
import validation from './middleware/validation.js'

class AuthMiddleware {
  protect = async (req, res, next) => protect(req, res, next)
  validation = async (req, res, next) => validation(req, res, next)
}

export default new AuthMiddleware()
