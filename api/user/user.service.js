import create from './service/create.js'
import find from './service/find.js'
import read from './service/read.js'
import getAllUsers from './service/getAllUsers.js'

class UserService {
  async create(req, res, next) {
    const result = await create(req, res, next)
    return result
  }

  async find(req, res, next) {
    const result = await find(req, res, next)
    return result
  }

  async read(req, res, next) {
    const result = await read(req, res, next)
    return result
  }

  async getAllUsers() {
    const result = await getAllUsers()
    return result
  }
}

export default new UserService()
