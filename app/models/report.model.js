import mongoose from 'mongoose'
import config from './../config/config.js'

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
      default: config.defaultStatus,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    geoData: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      }
    }
  }
)

const Report = mongoose.model('Report', reportSchema)

export default Report
