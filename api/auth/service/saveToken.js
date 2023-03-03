import { prisma } from '#prisma'

export default (userId, refreshToken) => {
  //const tokenData = await prisma.auth.findUnique({
  //  where: {
  //    id: userId
  //  }
  //})
  //if tokenData {
  //
  //}
  return {
    accessToken,
    refreshToken
  }
}
