export default (len = 36, strings = true) => {
  if (!strings) {
    const min = 1 * 10 ** (len - 1)
    const max = min * 10 - 1
    console.log('min/max', min, max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  let confirmCode = ''
  while (confirmCode.length < len) {
    confirmCode += Math.random().toString(36).substring(2)
  }
  return confirmCode.substring(0, len)
}
