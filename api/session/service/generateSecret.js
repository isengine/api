export default (len = 36) => {
  let confirmCode = ''
  while (confirmCode.length < len) {
    confirmCode += Math.random().toString(36).substring(2)
  }
  return confirmCode.substring(0, len)
}
