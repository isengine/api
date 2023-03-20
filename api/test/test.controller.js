import test from './controller/test.js'
import testError from './controller/testError.js'
import testCode from './controller/testCode.js'
import testThrow from './controller/testThrow.js'
import testTryCatch from './controller/testTryCatch.js'

class TestController {
  async test(req, res, next) {
    const result = await test(req, res, next)
    return result
  }

  async testError(req, res, next) {
    const result = await testError(req, res, next)
    return result
  }

  async testCode(req, res, next) {
    const result = await testCode(req, res, next)
    return result
  }

  async testThrow(req, res, next) {
    const result = await testThrow(req, res, next)
    return result
  }

  async testTryCatch(req, res, next) {
    const result = await testTryCatch(req, res, next)
    return result
  }
}

export default new TestController()
