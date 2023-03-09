import refresh from './controller/refresh.js'

class TokenController {
  async refresh(req, res, next) {
    const result = await refresh(req, res, next)
    return result
  }
}

export default new TokenController()
