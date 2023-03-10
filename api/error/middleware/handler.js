import ErrorApi from '#api/error/error.api'

export default (err, req, res, next) => {
  const isDev = process.env.NODE_ENV === 'dev'
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  const code = err instanceof ErrorApi ? err?.code : statusCode
  const error = {
    code: err?.code,
    status: err?.status,
    message: err?.message,
    stack: isDev ? err?.stack : undefined
  }
  if (isDev) {
    console.log(`Error ${code}: ${error?.message}`.red)
  }
  return res.status(code).json(error)
}
