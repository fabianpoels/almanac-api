import httpStatus from 'http-status'
import { Category, Report } from './../models/index.js'
import logger from './../config/logger.js'

const reports = async (req, res, next) => {
  try {
    const reports = await Report.find()
    res.send(reports)
  } catch (e) {
    next(e)
  }
}

const categories = async (req, res, next) => {
  try {
    const categories = await Category.find()
    res.send(categories)
  } catch (e) {
    next(e)
  }
}

export default { reports, categories }
