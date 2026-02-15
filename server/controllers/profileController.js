import Profile from "../models/profileModel.js";


export const createOrUpdateProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      username,
      bio,
      niche,
      location,
      instagram,
      youtube,
      followersCount,
      engagementRate,
      pricePerPost,
    } = req.body;

    let profile = await Profile.findOne({ userId });

    // Handle Image
    let imageUrl = profile?.profileImage || "";

    if (req.file) {
      imageUrl = req.file.path; // Cloudinary URL
    }

    const profileData = {
      userId,
      username,
      bio,
      niche,
      location,
      profileImage: imageUrl,
      socialLinks: {
        instagram,
        youtube,
      },
      followersCount: Number(followersCount),
      engagementRate: Number(engagementRate),
      pricePerPost: Number(pricePerPost),
    };

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { userId },
        profileData,
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Profile updated",
        profile,
      });
    }

    profile = await Profile.create(profileData);

    res.status(201).json({
      success: true,
      message: "Profile created",
      profile,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};




export const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

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
