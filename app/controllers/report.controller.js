import httpStatus from 'http-status'
import { Report } from './../models/index.js'
import logger from './../config/logger.js'

const index = async (req, res, next) => {
  logger.info('here')
  const reports = await Report.find()
  logger.info(reports)
  res.status(httpStatus.OK)
  res.send(reports)
}

export default { index }
