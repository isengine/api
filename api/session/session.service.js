import createSession from './service/createSession.js'
import deleteSession from './service/deleteSession.js'
import findSession from './service/findSession.js'
import generateRefresh from './service/generateRefresh.js'
import generateAccess from './service/generateAccess.js'
import validateRefresh from './service/validateRefresh.js'
import validateAccess from './service/validateAccess.js'

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

  async generateAccess(payload) {
    const result = await generateAccess(payload)
    return result
  }

  async generateRefresh(payload) {
    const result = await generateRefresh(payload)
    return result
  }

  async validateAccess(token) {
    const result = await validateAccess(token)
    return result
  }

  async validateRefresh(token) {
    const result = await validateRefresh(token)
    return result
  }
}

export default new SessionService()
