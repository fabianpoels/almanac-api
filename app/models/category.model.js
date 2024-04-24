import mongoose from 'mongoose'
import { config } from './../config/index.js'

const categorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    key: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    icon: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
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

const Category = mongoose.model('Category', categorySchema)

export default Category
