import Model from './dto/model.js'

class AuthDto {
  model

  constructor() {
    this.model = Model
  }
}

export default new AuthDto()
