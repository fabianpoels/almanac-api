import mongoose from 'mongoose'
import config from './../config/config.js'

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    }
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    emailVerified: {
      type: Boolean,
      required: true,
      default: false
    }
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

const User = mongoose.model('User', userSchema)

export default User
