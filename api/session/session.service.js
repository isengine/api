import createSession from './service/createSession.js'
import deleteSession from './service/deleteSession.js'
import findSession from './service/findSession.js'
import generateSecret from './service/generateSecret.js'
import generateToken from './service/generateToken.js'
import validateToken from './service/validateToken.js'

class SessionService {
  async createSession(payload) {
    const result = await createSession(payload)
    return result
  }

  async deleteSession(payload) {
    const result = await deleteSession(payload)
    return result
  }

  async findSession(payload) {
    const result = await findSession(payload)
    return result
  }

  async generateSecret() {
    const result = await generateSecret()
    return result
  }

  async generateToken(payload) {
    const result = await generateToken(payload)
    return result
  }

  async validateToken(token) {
    const result = await validateToken(token)
    return result
  }
}

export default new SessionService()
