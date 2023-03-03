import create from './service/create.js'
import find from './service/find.js'
import generateToken from './service/generateToken.js'
import read from './service/read.js'
import saveToken from './service/saveToken.js'
import sendMail from './service/sendMail.js'
import verifyPassword from './service/verifyPassword.js'

class AuthService {
  create = async (req, res, next) => create(req, res, next)

  find = async (req, res, next) => find(req, res, next)

  generateToken = async (req, res, next) => generateToken(req, res, next)

  read = async (req, res, next) => read(req, res, next)

  saveToken = async (req, res, next) => saveToken(req, res, next)

  sendMail = async (req, res, next) => sendMail(req, res, next)

  verifyPassword = async (req, res, next) => verifyPassword(req, res, next)
}

export default new AuthService()
