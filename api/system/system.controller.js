import test from './controller/test.js'
import testError from './controller/testError.js'
import testErrorThrow from './controller/testErrorThrow.js'
import testErrorTryCatch from './controller/testErrorTryCatch.js'

class SystemController {
  test = async (req, res, next) => test(req, res, next)

  testError = async (req, res, next) => testError(req, res, next)

  testErrorThrow = async (req, res, next) => testErrorThrow(req, res, next)

  testErrorTryCatch = async (req, res, next) =>
    testErrorTryCatch(req, res, next)
}

export default new SystemController()
