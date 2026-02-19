import express from "express";
import {
  createCampaign,
  getCreatorCampaigns,
  getBrandCampaigns,
} from "../controllers/CampaignController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const campaignRouter = express.Router();

campaignRouter.post("/create", authMiddleware, createCampaign);
campaignRouter.get("/creator/:id", getCreatorCampaigns);
campaignRouter.get("/brand/:id", getBrandCampaigns);

export default campaignRouter;
