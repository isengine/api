import googleService from './service/google.js'

class PassportService {
  google(req, res) {
    const result = googleService(req, res)
    return result
  }
}

export default new PassportService()
