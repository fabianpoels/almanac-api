import httpStatus from 'http-status'
import { Report } from './../../models/index.js'
import logger from './../../config/logger.js'
import mongoose from 'mongoose'

const index = async (req, res, next) => {
  try {
    const reports = await Report.find()
    res.send(reports)
  } catch(e) {
    next(e)
  }
}

const create = async (req, res, next) => {
  const report = new Report(req.body.report)
  try {
    await report.save()
    res.status(201)
    res.send(report)
  } catch(e) {
    if (e instanceof mongoose.Error.ValidationError) res.status(422)
    next(e)
  }
}

export default { index, create }
