import httpStatus from 'http-status'
import jwt from 'jsonwebtoken'
import { User } from './../models/index.js'
import { UserSerializer } from './../serializers/serializers.js'
import { config, logger } from './../config/index.js'
import redis from './../redis/redis.js'
import crypto from 'crypto'

const login = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({
      email: email,
      active: true,
      emailVerified: true,
    }).exec()
    if (user && (await user.validPassword(password))) {
      const serializedUser = UserSerializer.serialize(user)
      const token = jwt.sign({ user: serializedUser }, config.jwtSecret, {
        expiresIn: config.jwtExpire,
      })
      const randomKey = crypto.randomBytes(16).toString('hex')
      await redis.set(randomKey, user._id.toString(), { EX: 7 * 24 * 60 * 60 })
      await redis.set(user._id.toString(), randomKey, { EX: 7 * 24 * 60 * 60 })
      res.cookie('refreshToken', randomKey, {
        httpOnly: true,
        sameSite: 'strict',
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      })
      res.status(200)
      return res.send({
        user: serializedUser,
        jwt: token,
      })
    } else {
      res.status(401)
      res.send()
    }
  } catch (e) {
    logger.error(e)
    res.status(401)
    res.send()
  }
}

const refreshToken = (req, res, next) => {}

const logout = (req, res, next) => {}

export default { login, refreshToken, logout }
