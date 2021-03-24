import User from '../models/user.model'

exports.saveUser = async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  })

  await user.save({})
  res.status(200)
  res.json(user)
}
