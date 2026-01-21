const { Schema } = require('mongoose')

const RequestSchema = new Schema(
  {
    developerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    stats: {
      type: String,
      enum: ["pending", "rejects", "approve"],
      required: true
    } 
  },
  { timestamps: true }
)

module.exports = ProjectDetailSchema
