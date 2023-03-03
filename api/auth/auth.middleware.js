import protect from './middleware/protect.js'

class AuthMiddleware {
  protect = async (req, res, next) => protect(req, res, next)
}

export default new AuthMiddleware()
