export default async (req, res) => {
  /*
      const account = profile._json

      console.log('account', account)
      console.log('profile', profile)

      let auth
      auth = await authService.findByLogin(account.email)
      if (!auth) {
        auth = await authService.createByPassport({
          login: account.email,
          is_activated: true,
          passportStrategy: profile.provider,
          passportId: profile.id
        })
      }

      let user
      user = await userService.find(auth.id)
      if (!user) {
        await userService.create({
          userId: auth.id,
          email: account.email,
          name: account.name,
          avatar: account.avatar,
          locale: account.locale
        })
      }
*/

  //const session = await sessionController.createSession(
  //  req,
  //  res,
  //  undefined,
  //  auth.id
  //)
  //res.json({ ...auth, session })

  /*
      - create auth
      - activate auth
      - create user
      - create session
      */

  const profile = req.user
  //const account = profile._json

  console.log('---\n---\n---'.red)
  console.log('profile', profile)
  //console.log('account', account)

  //console.log('req', req)
  //console.log('res', res)

  //НУЖНЫ ВНЕШНИЕ ДАННЫЕ - auth.userId и др
  //const session = await sessionController.createSession(
  //  req,
  //  res,
  //  undefined,
  //  auth.id
  //)
  //res.json({ ...auth, session })

  //const session = await sessionController.createSession(req, res, undefined, auth.id)
  //res.json({ ...auth, session })
  //res.redirect(process.env.API_BASE + '/passport/success')
}
