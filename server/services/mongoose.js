import mongoose from 'mongoose'
import config from '../config'

const { mongo } = config

mongoose.Promise = require('bluebird')

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection failed ${err}`)
})

export default (mongoURL = mongo) => {
  mongoose.connect(mongoURL, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  mongoose.set('useCreateIndex', true)

  return mongoose.connection
}