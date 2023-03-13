import create from './service/create.js'
import findByLogin from './service/findByLogin.js'
import read from './service/read.js'
import sendMail from './service/sendMail.js'
import activate from './service/activate.js'
import verifyPassword from './service/verifyPassword.js'

class AuthService {
  async activate(userId) {
    const result = await activate(userId)
    return result
  }

  async create(login, password) {
    const result = await create(login, password)
    return result
  }

  async findByLogin(login) {
    const result = await findByLogin(login)
    return result
  }

  async read(id) {
    const result = await read(id)
    return result
  }

  async sendMail(to, activationCode) {
    const result = await sendMail(to, activationCode)
    return result
  }

  async verifyPassword(password, hashedPassword) {
    const result = await verifyPassword(password, hashedPassword)
    return result
  }
}

export default new AuthService()
