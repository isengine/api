import create from './service/create.js'
import find from './service/find.js'
import read from './service/read.js'
import upsert from './service/upsert.js'
import getAllUsers from './service/getAllUsers.js'

class UserService {
  async create(data) {
    const result = await create(data)
    return result
  }

  async find(userId) {
    const result = await find(userId)
    return result
  }

  async read(id) {
    const result = await read(id)
    return result
  }

  async upsert(data) {
    const result = await upsert(data)
    return result
  }

  async getAllUsers() {
    const result = await getAllUsers()
    return result
  }
}

export default new UserService()
