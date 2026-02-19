import express from "express";
import {
  makeAdvancePayment,
  makeFinalPayment,
} from "../controllers/PaymentController.js";

import Payment from "../models/PaymentModel.js";

const paymentRouter = express.Router();

/**
 * Pay Advance
 */
paymentRouter.post("/advance", makeAdvancePayment);


/**
 * Pay Final
 */
paymentRouter.post("/final", makeFinalPayment);


/**
 * Get payment by collaboration
 */
paymentRouter.get("/:collaborationId", async (req, res) => {
  try {
    const payment = await Payment.findOne({
      collaborationId: req.params.collaborationId,
    });

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default paymentRouter;
