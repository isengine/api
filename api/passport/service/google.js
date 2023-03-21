import authService from '#api/auth/auth.service'
import userService from '#api/user/user.service'
import sessionController from '#api/session/session.controller'
import sessionMiddleware from '#api/session/session.middleware'

export default async (req, res) => {
  const profile = req.user
  const account = profile._json

  //console.log('profile', profile)

  let auth
  auth = await authService.findByLogin(account.email)
  if (!auth) {
    auth = await authService.createByPassport({
      login: account.email,
      isActivated: true,
      passportStrategy: profile.provider,
      passportId: profile.id
    })
  }

  await userService.upsert({
    userId: auth.id,
    email: account.email,
    name: account.name,
    avatar: account.picture,
    locale: account.locale
  })

  await sessionController.createSession(req, res, undefined, auth.id)
  //await sessionController.createTokens(req, res, undefined, auth.id)

  res.locals.data = auth

  sessionMiddleware.resApi(req, res)
  //res.redirect(process.env.API_BASE + '/passport/success')
}
