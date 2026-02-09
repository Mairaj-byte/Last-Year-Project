import Profile from "../models/profileModel.js";

export const createOrUpdateProfile = async (req, res) => {
  try {
    const userId = req.user;

    const existingProfile = await Profile.findOne({ userId });

    if (existingProfile) {
      const updated = await Profile.findOneAndUpdate(
        { userId },
        req.body,
        { new: true }
      );
      return res.json(updated);
    }

    const newProfile = await Profile.create({
      userId,
      ...req.body
    });

    res.status(201).json(newProfile);
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
