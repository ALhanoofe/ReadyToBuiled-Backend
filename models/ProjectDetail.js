const { Schema } = require("mongoose")

const ProjectDetailSchema = new Schema(
  {
    pname: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    category: { type: String, required: true },
    language: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    price: { type: Number },
  },
  { timestamps: true }
)

module.exports = ProjectDetailSchema
