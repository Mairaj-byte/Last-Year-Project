import Campaign from "../models/CampaignModel.js";
import Collaboration from "../models/CollaborationModel.js";

export const createCampaign = async (req, res) => {
  try {
    const {
      influencerId,
      title,
      description,
      platform,
      totalBudget,
      advanceAmount,
      finalAmount,
    } = req.body;

    // Basic validation
    if (!influencerId || !title || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const campaign = await Campaign.create({
      brandId: req.user.id, // ✅ Corrected
      influencerId,
      title,
      description,
      platform,
      totalBudget,
      advanceAmount,
      finalAmount,
    });

    await Collaboration.create({
      campaignId: campaign._id,
    });

    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getCreatorCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({
      influencerId: req.params.id,
    });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBrandCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({
      brandId: req.params.id,
    });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
