import mongoose from 'mongoose'
import config from '../config'

const { mongo } = config

mongoose.Promise = require('bluebird')

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection failed ${err}`)
  process.exit(1)
})

if (config.env === 'dev') {
  mongoose.set('debug', true)
}

export default (mongoURL = mongo) => {
  mongoose.connect(mongoURL, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  mongoose.set('useCreateIndex', true)

  return mongoose.connection
}

// const userSchema = new mongoose.Schema({
//   first_name: String,
//   last_name: String,
//   email: String,
//   gender: String,
//   ip_address: String,
//   company: String,
//   id: Number,
//   roles: {
//     type: [String],
//     default: ['user']
//   }
// })

// const User = mongoose.model('users', userSchema)

// const userObj = new User({
//   first_name: "Kseniia",
//   last_name: "Fedorova"
// })
// userObj.email = 'kseniiafed@gmail.com'
// userObj.gender = "F"
// userObj.ip_address = "1234.0.0.1"
// userObj.id = 100000
// userObj.save()

// const users = User.find({ first_name: "Kseniia" }).exec().then(console.log)

// const user = User.findOne({ first_name: "Oksana" })
//   .exec()
//   .then((user) => {
//     user.last_name = "Ruane"
//     user.save()
//   })
//   .then(() => User.findOne({ first_name: "Oksana" }).exec())
//   .then(console.log)
