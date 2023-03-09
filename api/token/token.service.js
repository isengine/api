import deleteRefreshToken from './service/deleteRefreshToken.js'
import findToken from './service/findToken.js'
import generateTokens from './service/generateTokens.js'
import writeRefreshToken from './service/writeRefreshToken.js'
import validateAccessToken from './service/validateAccessToken.js'
import validateRefreshToken from './service/validateRefreshToken.js'

class TokenService {
  async deleteRefreshToken(refreshToken) {
    const result = await deleteRefreshToken(refreshToken)
    return result
  }

  async findToken(refreshToken) {
    const result = await findToken(refreshToken)
    return result
  }

  async generateTokens(payload) {
    const result = await generateTokens(payload)
    return result
  }

  async writeRefreshToken(userId, refreshToken) {
    const result = await writeRefreshToken(userId, refreshToken)
    return result
  }

  async validateAccessToken(token) {
    const result = await validateAccessToken(token)
    return result
  }

  async validateRefreshToken(token) {
    const result = await validateRefreshToken(token)
    return result
  }
}

export default new TokenService()
