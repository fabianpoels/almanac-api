import httpStatus from 'http-status'
import { Category } from './../../models/index.js'
import logger from './../../config/logger.js'

const index = async (req, res, next) => {
  try {
    const reports = await Report.find()
    res.send(reports)
  } catch (e) {
    next(e)
  }
}

export default { index }
