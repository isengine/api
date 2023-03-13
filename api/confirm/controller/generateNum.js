export default (len = 6) => {
  const min = 1 * 10 ** (len - 1)
  const max = min * 10 - 1
  //console.log('min/max', min, max)
  const result = Math.floor(Math.random() * (max - min + 1)) + min
  return result.toString()
}
