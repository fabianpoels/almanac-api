import httpStatus from 'http-status'
import logger from './../config/logger.js'
import { User } from './../models/index.js'

const createUsers = async (req, res, next) => {
  const user = new User({
    email: 'fabian@fabianpoels.com',
    fullName: 'Fabian',
    active: true,
    emailVerified: true,
  })
  try {
    const pw = await User.getHashedPassword('Test123Test123!')
    user.password = pw
    await user.save()
    res.status(201)
    res.send(user)
  } catch (e) {
    next(e)
  }
}

export default { createUsers }
