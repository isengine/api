export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  const isDev = process.env.NODE_ENV === 'dev'
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: isDev ? err.stack : null
  })
}
