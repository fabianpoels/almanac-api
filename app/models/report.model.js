import mongoose from 'mongoose'
import { config } from './../config/index.js'

const reportSchema = mongoose.Schema(
  {
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
      default: config.report.defaultStatus,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    geoData: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
      },
    },
    toObject: {
      transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
      },
    },
  }
)

const Report = mongoose.model('Report', reportSchema)

export default Report
