import validate from './middleware/validate.js'

class SessionMiddleware {
  async validate(req, res, next) {
    const result = await validate(req, res, next)
    return result
  }
}

export default new SessionMiddleware()
