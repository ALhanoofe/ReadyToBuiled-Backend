const { Schema } = require('mongoose')

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    type: { type: String },
    duration: { type: Date }
  },
  { timestamps: true }
)

module.exports = projectSchema
