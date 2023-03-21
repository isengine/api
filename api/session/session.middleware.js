import resApi from './middleware/resApi.js'
import validateSession from './middleware/validateSession.js'
import validateTokens from './middleware/validateTokens.js'

class SessionMiddleware {
  resApi(req, res) {
    resApi(req, res)
  }

  async validateSession(req, res, next) {
    const result = await validateSession(req, res, next)
    return result
  }

  async validateTokens(req, res, next) {
    const result = await validateTokens(req, res, next)
    return result
  }
}

export default new SessionMiddleware()
