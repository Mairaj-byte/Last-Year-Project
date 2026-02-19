import Payment from "../models/PaymentModel.js";

export const makeAdvancePayment = async (req, res) => {
  try {
    const payment = await Payment.findOneAndUpdate(
      { collaborationId: req.body.collaborationId },
      {
        advancePaid: true,
        paymentStatus: "advance_paid",
      },
      { new: true, upsert: true }
    );

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const makeFinalPayment = async (req, res) => {
  try {
    const commission = req.body.totalAmount * 0.1;

    const payment = await Payment.findOneAndUpdate(
      { collaborationId: req.body.collaborationId },
      {
        finalPaid: true,
        paymentStatus: "completed",
        commissionAmount: commission,
        creatorAmount: req.body.totalAmount - commission,
      },
      { new: true }
    );

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
