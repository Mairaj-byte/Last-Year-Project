import Profile from "../models/profileModel.js";
import cloudinary from "../config/cloudinary.js";

// CREATE or UPDATE PROFILE
export const createOrUpdateProfile = async (req, res) => {
  try {
    const userId = req.user; // must be user._id from auth middleware
    let profileImage;

    // Upload image to cloudinary
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "profiles",
      });
      profileImage = result.secure_url;
    }

    // Safe parsing for socialLinks
    let socialLinks = {};
    if (req.body.socialLinks) {
      try {
        socialLinks =
          typeof req.body.socialLinks === "string"
            ? JSON.parse(req.body.socialLinks)
            : req.body.socialLinks;
      } catch (error) {
        socialLinks = {};
      }
    }

    const data = {
      ...req.body,
      socialLinks,
    };

    if (profileImage) data.profileImage = profileImage;

    const profile = await Profile.findOneAndUpdate(
      { userId },
      { userId, ...data },
      { new: true, upsert: true }
    );

    res.status(201).json({ success: true, profile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET LOGGED-IN USER PROFILE
export const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user });
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// LIST ALL PROFILES (Influencer Listing Page)
export const listProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({});
    res.json({ success: true, profiles });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// SINGLE PROFILE (Detail Page)
export const singleProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.json({ success: true, profile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
