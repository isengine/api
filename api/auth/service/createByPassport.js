import { prisma } from '#prisma'
import authDto from '#api/auth/auth.dto'

export default async (data) =>
  await prisma.auth.create({
    data,
    select: authDto.model
  })
