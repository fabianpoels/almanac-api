import mongoose from 'mongoose'
import config from './../config/config.js'

const reportSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: String,
  activeFrom: String,
  activeUntil: String,
  status: {
    type: String,
    required: true,
    default: config.defaultStatus,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

const Report = mongoose.model('Report', reportSchema)

export default Report
