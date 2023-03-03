import Model from './dto/model.js'
import Token from './dto/token.js'

class AuthDto {
  model
  token

  constructor() {
    this.model = Model
    this.token = Token
  }
}

export default new AuthDto()
