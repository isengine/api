import model from './dto/model.js'

class UserDto {
  model

  constructor() {
    this.model = model
  }
}

export default new UserDto()
