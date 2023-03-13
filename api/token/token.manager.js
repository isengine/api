import tokenService from './token.service.js'

class TokenManager {
  constructor() {}

  async create(req, res, next, auth) {
    const agent = req.headers['user-agent']
    const ip = req.ip

    const tokens = await tokenService.generateTokens({
      id: auth.id,
      login: auth.login,
      agent,
      ip
    })

    await tokenService.writeRefreshToken({
      userId: auth.id,
      token: tokens.refreshToken,
      agent,
      ip
    })

    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true
    })

    return tokens
  }
}

export default new TokenManager()
