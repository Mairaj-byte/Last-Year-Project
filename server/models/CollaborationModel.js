import mongoose from "mongoose";

const collaborationSchema = new mongoose.Schema(
  {
    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "accepted",
        "advance_paid",
        "demo_submitted",
        "demo_approved",
        "final_submitted",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },
    demoUrl: String,
    finalUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Collaboration", collaborationSchema);
