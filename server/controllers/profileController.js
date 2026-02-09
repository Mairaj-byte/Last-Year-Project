import Profile from "../models/profileModel.js";
import cloudinary from "../config/cloudinary.js";

export const createOrUpdateProfile = async (req, res) => {
  try {
    const userId = req.user;
    let profileImage;

    // Upload image if exists
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "profiles"
      });
      profileImage = result.secure_url;
    }

    const data = {
      ...req.body,
      socialLinks: JSON.parse(req.body.socialLinks || "{}")
    };

    if (profileImage) data.profileImage = profileImage;

    const profile = await Profile.findOneAndUpdate(
      { userId },
      { userId, ...data },
      { new: true, upsert: true }
    );

    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
