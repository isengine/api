import { ErrorApi } from '../error.api.js'

export default (err, req, res, next) => {
  console.log('Error'.red, err)
  if (err instanceof ErrorApi) {
    const { status, message, errors } = err
    return res.status(status).json({ message, errors })
  }
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  const isDev = process.env.NODE_ENV === 'dev'
  return res
    .status(statusCode)
    .json({ message: err.message, stack: isDev ? err.stack : null })
}
