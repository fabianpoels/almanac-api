import httpStatus from 'http-status'
import { Category, Report } from './../models/index.js'
import logger from './../config/logger.js'

const reports = async (req, res, next) => {
  const reports = await Report.find()
  res.send(reports)
}

const categories = async (req, res, next) => {
  const categories = await Category.find()
  res.send(categories)
}

export default { reports, categories }
