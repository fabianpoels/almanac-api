import 'dotenv/config'

const config = Object.freeze({
  env: process.env.ENV,
  port: process.env.PORT,
})

export default config
