const { Schema } = require("mongoose")

const RequestSchema = new Schema(
  {
    developerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    projectId: { type: Schema.Types.ObjectId, ref: "ProjectDetail", required: true },
    stats: {
      type: String,
      enum: ["pending", "rejects", "approve"],
      default: "pending",
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = RequestSchema
