import mailService from 'mail-service'

export default async (login, activationCode) => {
  const activationLink = activationCode
  await mailService.sendActivationMail(login, activationLink)
}
