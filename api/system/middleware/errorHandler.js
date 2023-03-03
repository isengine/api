export default (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  const isDev = process.env.NODE_ENV === 'dev'
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: isDev ? err.stack : null
  })
}
