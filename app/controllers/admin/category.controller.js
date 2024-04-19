import httpStatus from 'http-status'
import { Category } from './../../models/index.js'
import logger from './../../config/logger.js'

const index = async (req, res, next) => {
  const reports = await Report.find()
  res.send(reports)
}

export default { index }
