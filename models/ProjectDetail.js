const { Schema } = require("mongoose")

const ProjectDetailSchema = new Schema(
  {
    name: { type: String, required: true },
    folderId: { type: Schema.Types.ObjectId, ref: "Folder" },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    language: { type: String, required: true },
    image: { type: String },
    status: { type: String },
    price: { type: Number },
  },
  { timestamps: true }
)

module.exports = ProjectDetailSchema
