const { Schema } = require("mongoose")

const folderSchema = new Schema(
  {
    pname: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    language: { type: String, required: true },
    description: { type: String, required: true }

  },
  { timestamps: true }
)

module.exports = folderSchema
