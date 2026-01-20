const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: {type: String, required: true},
    email: { type: String, required: true },
    phoneNumber: {type: Number, required: true},
    passwordDigest: { type: String, required: true },
    userType: {type:String, required: true}
  },
  { timestamps: true }
)

module.exports = userSchema
