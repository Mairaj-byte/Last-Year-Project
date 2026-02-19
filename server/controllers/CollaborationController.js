import Collaboration from "../models/CollaborationModel.js";

export const updateStatus = async (req, res) => {
  try {
    const collaboration = await Collaboration.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, demoUrl: req.body.demoUrl, finalUrl: req.body.finalUrl },
      { new: true }
    );

    res.json(collaboration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
