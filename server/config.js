require('dotenv').config()

const options = {
  port: process.env.PORT,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  isSocketsEnabled: process.env.ENABLE_SOCKETS,
  mongo: process.env.MONGO,
  secret: process.env.SECRET_JWT || 'secretKey'
}

export default options
