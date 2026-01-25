const { Schema } = require("mongoose")

const projectSchema = new Schema(
  {
    pname: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    type: { type: String },
    duration: { type: Date },
    price: { type: Number },
  },
  { timestamps: true }
)

module.exports = projectSchema
