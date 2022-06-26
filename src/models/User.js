import mongoose from 'mongoose'
// import mongoosePaginate from 'mongoose-paginate';

// const userSchema = mongoose.Schema;
const { Schema } = mongoose

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      text: true
    },
    name: {
      type: String,
      required: true,
      minlength: 4,
      text: true
    },
    username: {
      type: String,
      required: true,
      minlength: 4,
      unique: true,
      text: true
    },
    password: {
      type: String,
      required: true
    },
    about: {
      type: String,
      default: null,
      text: true
    },
    social: {
      facebook: {
        type: String
      },
      twitter: {
        type: String
      },
      github: {
        type: String
      }
    },
    otp: {
      type: String,
      maxlength: 6,
      minlength: 6
    },
    verified: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      enum: ['superuser', 'developer', null],
      default: null
    },
    lastLogin: {
      type: Date,
      default: new Date()
    },
    loginCount: {
      type: Number
    }
  },
  {
    timestamps: true
  }
)

userSchema.statics.emailExist = function (email) {
  email = email.toLowerCase().trim()
  return this.findOne({ email })
}

userSchema.statics.usernameExist = function (username) {
  username = username.trim()
  return this.findOne({ username })
}
// user.plugin(mongoosePaginate);

export default mongoose.model('User', userSchema)
