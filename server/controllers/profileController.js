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



// function for list product
export const listProfiles = async (req, res) => {
    try {
        
        const profiles = await Profile.find({});
        res.json({success:true, profiles })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export const singleProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await Profile.findById(id);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.json({ success: true, profile });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
