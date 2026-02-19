import express from "express";
import {
  updateStatus,
} from "../controllers/CollaborationController.js";

import Collaboration from "../models/CollaborationModel.js";

const collaborationRouter = express.Router();

/**
 * Update collaboration status
 * Example:
 * accepted
 * advance_paid
 * demo_submitted
 * demo_approved
 * final_submitted
 * completed
 */
collaborationRouter.put("/update/:id", updateStatus);


/**
 * Get collaboration by campaignId
 */
collaborationRouter.get("/campaign/:campaignId", async (req, res) => {
  try {
    const collaboration = await Collaboration.findOne({
      campaignId: req.params.campaignId,
    }).populate("campaignId");

    if (!collaboration) {
      return res.status(404).json({ message: "Collaboration not found" });
    }

    res.json(collaboration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default collaborationRouter;
