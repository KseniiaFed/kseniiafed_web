import passport from 'passport'
// import User from '../models/user.model'

const handleJWT = (req, res, next, roles) => {
  return async (err, user, info) => {
    const error = err || info

    if (error || !user) return res.status(401).json({ status: 401, ...err })
    await req.logIn(user, { session: false })

    if (!roles.reduce((acc, rec) => acc && user.role.some(t => t === rec), true)) {
      return res.status(401).json({ status: 401, ...err })
    }
    req.user = user
    return next()
  }
}

const signInForm = (roles = []) => (req, res, next) => {
  return passport.authenticate(
    'jwt',
    {
      session: true
    },
    handleJWT(req, res, next, roles)
  )(req, res, next)
}

export default signInForm
