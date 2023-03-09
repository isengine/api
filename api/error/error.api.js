export class ErrorApi extends Error {
  status
  errors

  constructor(status, message, errors) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static unauthorizedError() {
    return new ErrorApi(401, 'user is not authorized')
  }

  static badRequest(message, errors = []) {
    return new ErrorApi(404, message, errors)
  }
}
