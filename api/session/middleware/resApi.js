export default (req, res) => {
  const code = res.locals?.code
  const data = res.locals?.data
  const error = res.locals?.error
  const token = res.locals?.token
  const status = res.locals?.status

  const success = !error ? 'success' : 'fail'

  res.status(code ?? 200).json({
    data: data ?? {},
    error: error ?? {},
    token: token ?? '',
    status: status ?? success
  })
}
