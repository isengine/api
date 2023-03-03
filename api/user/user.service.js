import create from './service/create.js'
import find from './service/find.js'
import read from './service/read.js'

class UserService {
  create = async (req, res, next) => create(req, res, next)

  find = async (req, res, next) => find(req, res, next)

  read = async (req, res, next) => read(req, res, next)
}

export default new UserService()
