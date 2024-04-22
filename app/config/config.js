import 'dotenv/config'

const config = Object.freeze({
  env: process.env.ENV,
  port: process.env.PORT,
  mongodb: {
    url: 'mongodb://localhost:27017/almanac',
    options: {},
  },
  report: {
    status: {
      draft: 'draft',
      published: 'published',
      archived: 'archived',
    },
    defaultStatus: 'draft',
  }
})

export default config
