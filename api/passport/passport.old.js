import passport from 'passport'

function jitProvision(provider, profile, cb) {
  db.get(
    'SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?',
    [provider, profile.id],
    function (err, row) {
      if (err) {
        return cb(err)
      }
      if (!row) {
        db.run(
          'INSERT INTO users (name) VALUES (?)',
          [profile.displayName],
          function (err) {
            if (err) {
              return cb(err)
            }
            var id = this.lastID
            db.run(
              'INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)',
              [id, provider, profile.id],
              function (err) {
                if (err) {
                  return cb(err)
                }
                var user = {
                  id: id,
                  name: profile.displayName
                }
                return cb(null, user)
              }
            )
          }
        )
      } else {
        db.get(
          'SELECT * FROM users WHERE id = ?',
          [row.user_id],
          function (err, row) {
            if (err) {
              return cb(err)
            }
            if (!row) {
              return cb(null, false)
            }
            return cb(null, row)
          }
        )
      }
    }
  )
}

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.name })
  })
})

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user)
  })
})
