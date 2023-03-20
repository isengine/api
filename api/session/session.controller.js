import createSession from './controller/createSession.js'
import createTokens from './controller/createTokens.js'
import deleteSession from './controller/deleteSession.js'
import deleteTokens from './controller/deleteTokens.js'
import refreshTokens from './controller/refreshTokens.js'

class SessionController {
  async createSession(req, res, next, userId) {
    const result = await createSession(req, res, next, userId)
    return result
  }

  async createTokens(req, res, next) {
    const result = await createTokens(req, res, next)
    return result
  }

  async deleteSession(req, res, next) {
    const result = await deleteSession(req, res, next)
    return result
  }

  async deleteTokens(req, res, next) {
    const result = await deleteTokens(req, res, next)
    return result
  }

  async refreshTokens(req, res, next) {
    const result = await refreshTokens(req, res, next)
    return result
  }
}

export default new SessionController()
