import { config, logger } from './../config/index.js'
import { User } from './../models/index.js'
import jwt from 'jsonwebtoken'

const authMiddleware = async function (req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]

  logger.info('in auth')

  if (!token) {
    logger.info('no token')
    res.status(401)
    res.send()
  }

  try {
    const { user } = jwt.verify(token, config.jwtSecret)
    const dbUser = await User.findOne({ _id: user.id })
    if (dbUser && dbUser.active && dbUser.emailVerified) {
      req.user = dbUser
      next()
    } else {
      logger.info('no user')
      res.status(401)
      res.send()
    }
  } catch (e) {
    logger.error(e)
    res.status(401)
    res.send()
  }
}

export default authMiddleware
