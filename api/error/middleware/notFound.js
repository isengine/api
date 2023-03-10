import ErrorApi from '#api/error/error.api'

export default (req, res, next) => {
  const error = ErrorApi.code(404, `Not Found ${req.originalUrl}`)
  next(error)
}
