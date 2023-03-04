import create from './service/create.js'
import deleteRefreshToken from './service/deleteRefreshToken.js'
import findByActivation from './service/findByActivation.js'
import findByLogin from './service/findByLogin.js'
import findToken from './service/findToken.js'
import read from './service/read.js'
import sendMail from './service/sendMail.js'
import generateConfirmCode from './service/generateConfirmCode.js'
import generateTokens from './service/generateTokens.js'
import activate from './service/activate.js'
import writeConfirmCode from './service/writeConfirmCode.js'
import writeRefreshToken from './service/writeRefreshToken.js'
import validateAccessToken from './service/validateAccessToken.js'
import validateRefreshToken from './service/validateRefreshToken.js'
import verifyPassword from './service/verifyPassword.js'

class AuthService {
  activate = async (userId) => activate(userId)

  create = async (login, password) => create(login, password)

  deleteRefreshToken = async (refreshToken) => deleteRefreshToken(refreshToken)

  findByActivation = async (confirmCode) => findByActivation(confirmCode)

  findByLogin = async (login) => findByLogin(login)

  findToken = async (refreshToken) => findToken(refreshToken)

  read = async (id) => read(id)

  sendMail = async (to, activationCode) => sendMail(to, activationCode)

  generateConfirmCode = (len, string) => generateConfirmCode(len, string)

  generateTokens = (payload) => generateTokens(payload)

  writeConfirmCode = async (userId, confirmCode) =>
    writeConfirmCode(userId, confirmCode)

  writeRefreshToken = async (userId, refreshToken) =>
    writeRefreshToken(userId, refreshToken)

  verifyPassword = async (password, hashedPassword) =>
    verifyPassword(password, hashedPassword)

  validateAccessToken = async (token) => validateAccessToken(token)

  validateRefreshToken = async (token) => validateRefreshToken(token)
}

export default new AuthService()
