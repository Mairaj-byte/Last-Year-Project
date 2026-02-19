import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    collaborationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collaboration",
      required: true,
    },
    totalAmount: Number,
    advancePaid: { type: Boolean, default: false },
    finalPaid: { type: Boolean, default: false },
    commissionAmount: Number,
    creatorAmount: Number,
    paymentStatus: {
      type: String,
      enum: ["pending", "advance_paid", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
